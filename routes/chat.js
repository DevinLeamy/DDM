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
const database = mongojs(databaseUrl, ["chats", "users"])
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
      postMessage(rawMessage).then(
        (message) => {
          //Only posts to sockets connected to chat from which the message was sent
          console.log("message-posted-to-chat-" + rawMessage.chatId)
          io.sockets.emit("message-posted-to-chat-" + rawMessage.chatId, message)
        }
      ).catch((reject) => console.log(reject))
      })
    })
    res.json("Socket connected to client")
  }
})

//Post new chat
router.post("/chat-create/create", function(req, res) {
  const chat = req.body
  const title = chat.title
  const admin = chat.admin
  const category = chat.category
  const global = chat.global
  const subs = [
    { _id: admin._id, username: admin.username }
  ]
  const newChat = createChat(title, admin, category, global, subs)
  chatExistsWithTitle(title).then(
    //Chat already exists
    (resolve) => console.log(resolve) 
  ).catch(() => postChat(newChat).then(
      (resolve) => res.json(resolve)
    ).catch((reject) => console.log(reject))
  )
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
  console.log(req.user)
  const user = { _id: req.user._id, username: req.user.username, image: req.user.image }
  //Check if chat exists
  chatExistsWithId(chat._id).then(
    //Check if user exists
    () => userExistsWithId(user._id).then(
      () => chatContainsUser(chat._id, user).then(
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
function postMessage(rawMessage) {
  return new Promise((resolve, reject) => {
    if (rawMessage == null || rawMessage == undefined) reject("Bad Data")
    const chatId = rawMessage.chatId
    const message = {
      senderId: rawMessage.senderId,
      senderUsername: rawMessage.senderUsername,
      text: rawMessage.text,
      _id: new mongojs.ObjectId(),
      image: rawMessage.image
    }
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

module.exports = router
