//-----------------------------------Imports----------------------------------------
const express = require("express")
const router = express.Router()
const mongojs = require("mongojs")
const jwt = require("jsonwebtoken")
const { tokenParser } = require("./functions/userFunc")
const { createChat } = require("./functions/chatFunc")
var io;
//-----------------------------------Constants----------------------------------------

//-----------------------------------Initialize Database----------------------------------------
const databaseUsername = "test"
const databasePassword = "test"
const databaseName = "messenger-database"
const databaseUrl = "mongodb+srv://" + databaseUsername + ":" + databasePassword + "@messenger-db-jzhdw.mongodb.net/" + databaseName + "?retryWrites=true&w=majority"
const database = mongojs(databaseUrl, ["chats", "users", "categories", "tags"])
//-----------------------------------Requests----------------------------------------
//Gets chat by ID
router.get("/data/:id", function(req, res) {
  const chatId = req.params.id
  // if (chatId == null || chatId == "" || chatId == undefined) return
  chatExistsWithId(chatId).then(
    () => getChatById(chatId).then(
      (chat) => res.json(chat)
    ).catch((reject) => console.log(reject))
  ).catch((reject) => console.log(reject))
})

//Initialize socket.io
router.get("/init", function(req, res) {
  //Change this
  if (!io) {
    io = req.app.get("io")
    io.on("connect", function(socket) {
    console.log("Socket connected to client")
    socket.on("message-posted-to-server", function(rawMessage) {
      const userId = rawMessage.senderId
      getUserById(userId).then(
        (user) => {
          const message = {
            senderId: user._id, 
            senderUsername: user.username,
            text: rawMessage.text,
            _id: new mongojs.ObjectId(),
            image: user.image,
            timestamp: rawMessage.timestamp
          }
          postMessage(message, rawMessage.chatId).then(
            (message) => {
              //Only posts to sockets connected to chat from which the message was sent
              console.log("message-posted-to-chat-" + rawMessage.chatId)
              io.sockets.emit("message-posted-to-chat-" + rawMessage.chatId, message)
            }
          ).catch((reject) => console.log(reject))
        }
      )
      })
    })
    res.json("Socket connected to client")
  }
})

//Post new chat
router.post("/chat-create/create", function(req, res) {
  const chat = req.body
  const title = chat.title
  const adminId = chat.adminId
  const category = chat.category
  const global = chat.global
  const tags = chat.tags
  const subs = []
  getUserById(adminId).then(
    (user) =>  {
      const newChat = createChat(title, {_id: user._id, username: user.username}, category, global, subs, tags)
      chatExistsWithTitle(title).then(
        //Chat already exists
        (resolve) => console.log(resolve)
      ).catch(() => postChat(newChat).then(
        //Chat does not exist
        (resolve) => {
          //Resolve holds newChat
          addUserToChatSubs(resolve._id, user).then(
            //Add chat to user
            () => addChatToUserSubs(resolve, user._id).then(
              //Sends chat userId 
              () => res.json(resolve)
            ).catch((reject) => console.log(reject))
          ).catch((reject) => console.log(reject))
        }
      ).catch((reject) => console.log(reject))
    )
    }
  ).catch((reject) => console.log(reject))
})

//Gets all chats
router.get("/chats", function(req, res) {
  getChats().then(
    (resolve) => res.json(resolve)
  ).catch((reject) => console.log(reject))
})

//Add user to chat subscribers list and add chat to user subscriptions list
router.post("/subscribe", authenticateToken, function(req, res) {
  const chat = req.body.chat
  const userId = req.user._id
  //Check if chat exists
  chatExistsWithId(chat._id).then(
    //Check if user exists
    () => getUserById(userId).then(
      (user) => chatContainsUser(chat._id, user).then(
        (resolve) => console.log(resolve)
      ).catch(
        //Add user id to chat
        () => addUserToChatSubs(chat._id, user).then(
          //Add chat to user
          () => addChatToUserSubs(chat, user._id).then(
            //Sends chat userId 
            () => res.json(user)
          ).catch((reject) => console.log(reject))
        ).catch((reject) => console.log(reject))
      )
    ).catch((reject) => console.log(reject))
  ).catch((reject) => console.log(reject))
})

//Returns a list of tags whose first letters match those requested by the query
router.post("/query-tags", function(req, res) {
  const queryString = req.body.queryString
  queryTags(queryString).then(
    (resolve) => res.json({status: '0', data: resolve})
  ).catch((reject) => console.log(reject))
})

//Returns a list of categories whose first letters match those quested by the query
router.post("/query-categories", function(req, res) {
  const queryString = req.body.queryString
  queryCategories(queryString).then(
    (resolve) => res.json({status: '0', data: resolve})
  ).catch((reject) => console.log(reject))
})

//-----------------------------------Middleware----------------------------------------

//Checks if tokens exists and extracts the user from it if it does
function authenticateToken(req, res, next) {
  console.log("Authenticating Token")
  const bearerToken = req.headers["authorization"]
  if (bearerToken) {
    const token = tokenParser(bearerToken)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, payload) {
      if (payload) {
        req.user = payload
        next()
      }
    })
  } else {
    res.send("BAD")
  }
}

//-----------------------------------Promises----------------------------------------
//Check if the given message exists
function chatExistsWithId(chatId) {
  return new Promise((resolve, reject) => {
    if (chatId == undefined || chatId == null) reject("Bad Data")
    database.chats.count({_id: mongojs.ObjectId(chatId)}, function(err, count) {
      if (err) reject("Error counting chat")
      else {
        if (count == 0) reject("Chat does not exist")
        else resolve(0)
      }
    })
  })
}

//Get chat object
function getChatById(chatId) {
  return new Promise((resolve, reject) => {
    if (chatId == null || chatId == undefined) reject("Bad Data")
    database.chats.findOne( {_id: mongojs.ObjectId(chatId)}, function(err, chat) {
      if (err || chat == null || chat == undefined) reject("Error getting chat")
      else resolve(chat)
    })
  })
}

//Post new message to database
function postMessage(message, chatId) {
  return new Promise((resolve, reject) => {
    if (message == null || message == undefined) reject("Bad Data")
    database.chats.update({ _id: mongojs.ObjectId(chatId) }, {
      $push: {
        messages: message
      }
    }, function(err) {
      if (err || message == null || message == undefined) reject("Error posting message")
      else resolve(message)
    })
  })
}

//Check is chat with given name exists
function chatExistsWithTitle(title) {
  return new Promise((resolve, reject) => {
    if (title == null || title == undefined) reject("Bad Data")
    database.chats.count({ title: title }, function(err, count) {
      if (err || count == null || count == undefined) reject("Error querying chats")
      if (count > 0) resolve("Chat with given title exists")
      else reject(0)
    })
  })
}

//Posts chat
function postChat(newChat) {
  return new Promise( (resolve, reject) => {
    if (newChat == null || newChat == undefined) reject("Bad Data")
    database.chats.save(newChat, function(err, chat) {
      if (err || chat == null || chat == undefined) reject("Bad Data")
      else resolve(chat)
    })
  })
}

//Gets all chats
function getChats() {
  return new Promise((resolve, reject) => {
    database.chats.find({}, function(err, chats) {
      if (err || chats == undefined || chats == null) {
        reject("Error getting chats")
      } else {
        resolve(chats)
      }
    })
  })
}

//Get chat ids from given chats
function getChatIds(rawChats) {
  if (rawChats == undefined || rawChats == null) return []
  var chatIds = []
  for (var i = 0; i < rawChats.length; i++) {
    chatIds.push(rawChats[i]._id)
  }
  return chatIds
}

function userExistsWithId(userId) {
  return new Promise((resolve, reject) => {
    if (userId == undefined || userId == null) reject("Bad Data")
    database.users.count({ _id: mongojs.ObjectId(userId) }, function(err, count) {
      if (err) reject("Error quering database for userId")
      if (count == 0) reject("User with given id does not exist")
      else resolve(0)
    })
  })
} 

function addUserToChatSubs(chatId, userId) {
  return new Promise((resolve, reject) => {
    if (userId == undefined || userId == null || chatId == undefined || chatId == null) reject("Bad data")
    database.chats.update({ _id: mongojs.ObjectId(chatId) }, {
      $push: {
        subs: userId
      }
    }, (err, data) => {
      if (err) reject("Error posting userId to chat subIds list")
      else resolve(0)
    })
  })
}

function chatContainsUser(chatId, user) {
  return new Promise((resolve, reject) => {
    getChatById(chatId).then(
      (chat) => {
        if (chat.subs.includes(user)) {
          resolve("Chat contains user");
        } else {
          reject("Chat does not contain user")
        }
      }
    ).catch((err) => {
      console.log(err)
      resolve("Error querying chat with given id")
    })
  })
}

function addChatToUserSubs(chat, userId) {
  return new Promise((resolve, reject) => {
    if (userId == undefined || userId == null || chat == undefined || chat == null) reject("Bad data")
    database.users.update({ _id: mongojs.ObjectId(userId) }, {
      $push: {
        chatSubs: chat
      }
    }, (err, data) => {
      if (err) reject("Error posting chat to user subscriptions list")
      resolve(0)
    })
  })
}

function getUserById(userId) {
  return new Promise((resolve, reject) => {
    if (userId == null || userId == undefined) reject("Bad Data")
    database.users.findOne({_id: mongojs.ObjectId(userId)}, (err, user) => {
      if (err || user == null || user == undefined) reject("Error retrieving user data from database")
      resolve(user)
    })
  })
}

//Adds a tag to the list of tags in the tags collection
function addTag(tag) {
  return new Promise((resolve, reject) => {
    if (tag === null || tag === undefined) reject("Bad data")
    database.tags.save({ tag }, function(err, tag) {
      if (err || tags === undefined || tags == null) reject("Error posting tag")
      resolve(0)
    })
  })
}

//Adds a category to the list of categories in the categories collection
function addCategory(category) {
  return new Promise((resolve, reject) => {
    if (category === null || category === undefined) reject("Bad data")
    database.categories.save({ category }, function(err, category) {
      if (err || category === undefined || category === null) reject("Error posting category")
      resolve(0)
    })
  })
}

//Queries tags for tags that contain the queryString as a substring
function queryTags(queryString) {
  return new Promise((resolve, reject) => {
    if (queryString === undefined || queryString === null) reject("Bad data")
    database.tags.find({tag: new RegExp(queryString, 'i')}, function(err, tags) {
      if (err || tags === undefined || tags === null) reject("Error querying tags")
      resolve(tags)
    })
  })
}

//Queries categories for categories that contain the queryString as a substring
function queryCategories(queryString) {
  return new Promise((resolve, reject) => {
    if (queryString === undefined || queryString === null) reject("Bad data")
    database.categories.find({category: new RegExp(queryString, 'i')}, function(err, categories) {
      if (err || categories === undefined || categories === null) reject("Error querying categories")
      resolve(categories)
    })
  })
}

module.exports = router
