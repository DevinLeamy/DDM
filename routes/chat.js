//-----------------------------------Imports----------------------------------------
require("dotenv").config()
const express = require("express")
const router = express.Router()
const mongojs = require("mongojs")
const jwt = require("jsonwebtoken")
const { tokenParser } = require("./functions/userFunc")
const { createChat, createTag, createCategory, createChatSub } = require("./functions/chatFunc")
var io;
//-----------------------------------Constants----------------------------------------

//-----------------------------------Initialize Database----------------------------------------
const databaseUrl = process.env.DATABASE_URL
const database = mongojs(databaseUrl, ["chats", "users", "categories", "tags"])
//-----------------------------------Requests----------------------------------------

//Gets chat by ID
router.get("/data/:id", function(req, res) {
  const chatId = req.params.id
  chatExistsWithId(chatId).then(
    () => getChatById(chatId).then(
      (chat) => res.json(chat)
    ).catch((reject) => console.log(reject))
  ).catch((reject) => console.log(reject))
})

//Get chat ids of most recent 10 chats
router.get("/chatIds/recent", function(req, res) {
  getRecentChatIds()
    .then( (chatIds) => res.json({
      status: "0",
      data: chatIds
    }))
    .catch((reject) => console.log(reject))
})

//Get chat ids of most popular 10 chats
router.get("/chatIds/popular", function(req, res) {
  getPopularChatIds()
    .then( (chatIds) => res.json({
      status: "0",
      data: chatIds
    }))
    .catch( (reject) => console.log(reject))
})

//Get chat ids of "recommended" chats
router.get("/chatIds/recommended", function(req, res) {
  getRecommendedChatIds()
    .then( (chatIds) => res.json({
      status: "0",
      data: chatIds
    }))
    .catch( (reject) => console.log(reject))
})

//Search chats
router.post("/searchChats", function(req, res) {
  const category = req.body.category
  const title = req.body.title
  const tags = req.body.tags
  searchChats(title, category, tags)
    .then((results) => res.json({status: "0", data: results}))
    .catch((reject) => res.json({status: "1", data: reject}))
})

//Get chat ids of related chats
router.post("/chatIds/related", function(req, res) {
  const tags = req.body.tags
  const category = req.body.category
  const originalChatId = req.body.chatId
  var chatIds = []
  getChatIdsInCategory(category).then(
    (categoryIds) => getChatIdsInTags(tags).then(
      (tagIds) => {
          for (var i = 0; i < categoryIds.length; i++) {
            const chatId = categoryIds[i]
            if (chatIds.indexOf(chatId) === -1 && chatId !== originalChatId) {
              chatIds.push(chatId)
              if (chatIds.length === 10) {
                res.json({status: "0", data: chatIds})
              }
            }
          }
          for (var i = 0; i < tagIds.length; i++) {
            const chatId = tagIds[i]
            if (chatIds.indexOf(chatId) === -1 && chatId !== originalChatId) {
              chatIds.push(chatId)
              if (chatIds.length === 10) {
                res.json({status: "0", data: chatIds})
              }
            }
          }
          res.json({status: "0", data: chatIds})
        }).catch(reject => {console.log(reject); res.json({status: "1", data: reject})})
    ).catch(reject => res.json({status: "1", data: reject}))
})

//Gets chat sub from chat will given id
router.post("/chatSub", function(req, res) {
  const chatId = req.body._id
  console.log("Getting chat will Id", chatId)
  chatExistsWithId(chatId)
      .then( () => getChatById(chatId) 
      .then( (chat) => res.json(createChatSub(chat)) 
    ).catch((reject) => console.log(reject))
    ).catch((reject) => console.log(reject))
})

//Get all tags that have been used
router.get("/allTags", function(req, res) {
  console.log("Getting all tags")
  getAllTags()
    .then((tags) => res.json({status: "0", data: tags}))
    .catch((reject) => res.json({status: "1", data: reject}))
})

//Get all chat titles in use
router.get("/allChatTitles", function(req, res) {
  console.log("Getting all chat titles")
  getAllChatTitles()
    .then((chatTitles) => res.json({status: "0", data: chatTitles}))
    .catch((reject) => res.json({status: "1", data: reject}))
})

//Initialize socket.io
router.get("/init", function(req, res) {
  if (!io) {
    io = req.app.get("io")
    io.on("connect", function(socket) {
    console.log("Socket connected to client")
    socket.on("message-posted-to-server", function(rawMessage) {
      const userId = rawMessage.senderId
      getUserById(userId).then(
        () => {
          const message = {
            senderId: userId, 
            text: rawMessage.text,
            _id: new mongojs.ObjectId(),
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
      ).catch((reject) => console.log(reject))
      })
    })
    res.json("Socket connected to client")
  } else {
    res.json("Socket already connected to client")
  }
})

//Protects chat-create route from not-login-in users
router.get("/chat-create", function(req, res) {
  if (!req.headers["authorization"]) res.redirect("http://localhost:3000")
  else { 
    res.next()
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
  const newChat = createChat(title, adminId, category, global, subs, tags)
  chatExistsWithTitle(title).then(
    //Chat already exists
    (resolve) => console.log(resolve)
  ).catch(() => postChat(newChat).then(
    //Chat does not exist
    //Resolves a new chat
    (resolve) => { addUserToChatSubs(resolve._id, adminId).then(
        //Add chat to user
        () => addChatToUserSubs(resolve._id, adminId).then(
          //Sends chatId 
          () => res.json(resolve._id)
        ).catch((reject) => console.log(reject))
      ).catch((reject) => console.log(reject))
    }
  ).catch((reject) => console.log(reject)))
})

//Add or update tags from newly created chat
router.post("/chat-create/addTag", function(req, res) {
  const tag = req.body.tag
  const chatId = req.body.chatId
  tagExists(tag)
    .then( () => addChatIdToTag(tag, chatId)
      .then( () => {
        console.log("Tag " + tag + " was updated") 
        res.json({status: '0', data: "Updated and posted tags"})
      })
      .catch( (reject) => console.log(reject))
  ).catch(() => {
    //Tag does not exist
    addNewTag(tag)
      .then( () => addChatIdToTag(tag, chatId)
        .then( () => {
          console.log("Tag " + tag + " was updated") 
          res.json({status: '0', data: "Updated and posted tags"})
        })
        .catch( (reject) => console.log(reject))
    ).catch( (reject) => console.log(reject) )
  })
})

//Add or update category from newly created chat
router.post("/chat-create/addCategory", function(req, res) {
  const category = req.body.category
  const chatId = req.body.chatId
  categoryExists(category)
    .then( () => addChatIdToCategory(category, chatId)
      .then( () => {
        console.log("Category " + category + " was updated") 
        res.json({status: "0", data: "Updated and/or posted a category"})
      })
      .catch( (reject) => console.log(reject))
  ).catch(() => {
    //Tag does not exist
    addNewCategory(category)
      .then( () => addChatIdToCategory(category, chatId)
        .then( () => {
          console.log("Category " + category + " was updated") 
          res.json({status: "0", data: "Updated and/or posted a category"})
        })
        .catch( (reject) => console.log(reject))
    ).catch( (reject) => console.log(reject) )
  })
  
})

//Gets all chats
router.get("/chats", function(req, res) {
  getChats().then(
    (resolve) => res.json(resolve)
  ).catch((reject) => console.log(reject))
})

//Add user to chat subscribers list and add chat to user subscriptions list
router.post("/subscribe", authenticateToken, function(req, res) {
  const chatId = req.body.chatId
  const userId = req.user._id
  //Check if chat exists
  chatExistsWithId(chatId).then(
    //Check if user exists
    () => getUserById(userId).then(
      () => chatContainsUser(chatId, userId).then(
        (resolve) => console.log(resolve)
      ).catch(
        //Add user id to chat
        () => addUserToChatSubs(chatId, userId).then(
            //Add chat to user
            () => addChatToUserSubs(chatId, userId).then(
              //Sends chat userId 
              () => res.json(userId)
            ).catch((reject) => console.log(reject))
          ).catch((reject) => console.log(reject))
      )
    ).catch((reject) => console.log(reject))
  ).catch((reject) => console.log(reject))
})

//Remove user from chat subscribers list and remove chat from user subscriptions list
router.post("/unsubscribe", authenticateToken, function(req, res) {
  const chatId = req.body.chatId
  const userId = req.user._id
  //Check if chat exists
  chatExistsWithId(chatId).then(
    //Check if user exists
    () => getUserById(userId).then(
      () => {
        removeChatSubFromUserSubs(userId, chatId).then(
          () => removeUserFromChatSubs(userId, chatId).then(
            () => res.json({status: '0', data: userId})
          ).catch((reject) => console.log(reject))
        ).catch((reject) => console.log(reject))
      }
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

//Formidable middleware parses form data allowing me to send image files
router.post("/setChatImage/:id", authenticateToken, function(req, res) {
  const chatId = req.params.id
  const imageUrl = req.body.imageUrl
  console.log("Setting chat image", chatId)
  setChatImage(imageUrl, chatId).then(
    () => res.json({status: "0", data: imageUrl})
  ).catch((reject) => {
    console.log(reject)
    res.json({status: "1", data: null})
  })
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
    if (chatId === undefined || chatId === null || chatId === "undefined") {
      reject("Bad Data")
      return
    }
    database.chats.count({_id: mongojs.ObjectId(chatId)}, function(err, count) {
      if (err || count === undefined || count === null) {
        reject("Error counting chat")
        return
      } else if (count == 0) {
        reject("Chat does not exist")
        return
      }
      resolve(0)
    })
  })
}

//Get chat object
function getChatById(chatId) {
  return new Promise((resolve, reject) => {
    if (chatId == null || chatId == undefined) {
      reject("Bad Data")
    }
    database.chats.findOne( {_id: mongojs.ObjectId(chatId)}, function(err, chat) {
      if (err || chat == null || chat == undefined) {
        reject("Error querying chats")
        return
      }
      resolve(chat)
    })
  })
}

//Post new message to database
function postMessage(message, chatId) {
  return new Promise((resolve, reject) => {
    if (message == null || message == undefined) {
      reject("Bad Data")
      return
    }
    database.chats.update({ _id: mongojs.ObjectId(chatId) }, {
      $push: {
        messages: message
      }
    }, function(err) {
      if (err || message == null || message == undefined) {
        reject("Error posting message")
        return
      }
      resolve(message)
    })
  })
}

//Check is chat with given name exists
function chatExistsWithTitle(title) {
  return new Promise((resolve, reject) => {
    if (title == null || title == undefined) {
      reject("Bad Data")
      return 
    }
    database.chats.count({ title: title }, function(err, count) {
      if (err || count == null || count == undefined) {
        reject("Error querying chats")
        return
      } else if (count > 0) {
        resolve("Chat with given title exists")
        return
      } else reject(0)
    })
  })
}

//Posts chat
function postChat(newChat) {
  return new Promise( (resolve, reject) => {
    if (newChat == null || newChat == undefined) {
      reject("Bad Data")
      return
    }
    database.chats.save(newChat, function(err, chat) {
      if (err || chat == null || chat == undefined) {
        reject("Error querying chats")
        return
      }
      resolve(chat)
    })
  })
}

//Gets all chats
function getChats() {
  return new Promise((resolve, reject) => {
    database.chats.find({}, function(err, chats) {
      if (err || chats == undefined || chats == null) {
        reject("Error getting chats")
        return
      }
      resolve(chats)
    })
  })
}

function addUserToChatSubs(chatId, userId) {
  return new Promise((resolve, reject) => {
    if (userId == undefined || userId == null || chatId == undefined || chatId == null) {
      reject("Bad data")
      return
    }
    database.chats.update({ _id: mongojs.ObjectId(chatId) }, {
      $push: {
        subs: userId
      }
    }, (err, data) => {
      if (err || data === undefined || data === null) {
        reject("Error posting userSub to chat subIds list")
        return
      }
      else resolve(0)
    })
  })
}

function chatContainsUser(chatId, userId) {
  return new Promise((resolve, reject) => {
    getChatById(chatId).then(
      (chat) => {
        if (chat.subs.includes(userId)) {
          resolve("Chat contains user");
          return
        } else {
          reject("Chat does not contain user")
          return
        }
      }
    ).catch((err) => {
      console.log(err)
      resolve("Error querying chat with given id")
    })
  })
}

function addChatToUserSubs(chatId, userId) {
  return new Promise((resolve, reject) => {
    if (userId == undefined || userId == null || chatId == undefined || chatId == null) {
      reject("Bad data")
      return
    }
    database.users.update({ _id: mongojs.ObjectId(userId) }, {
      $push: {
        chatIds: chatId
      }
    }, (err, data) => {
      if (err || data === undefined || data === null) {
        reject("Error posting chat to user subscriptions list")
        return
      }
      resolve(0)
    })
  })
}

function getUserById(userId) {
  return new Promise((resolve, reject) => {
    if (userId == null || userId == undefined) {
      reject("Bad Data")
      return
    }
    database.users.findOne({_id: mongojs.ObjectId(userId)}, (err, user) => {
      if (err || user == null || user == undefined) {
        reject("Error retrieving user data from database")
        return
      }
      resolve(user)
    })
  })
}

//Removes userSub from ChatSubs 
function removeUserFromChatSubs(userId, chatId) {
  return new Promise((resolve, reject) => {
    if (userId === undefined || userId === null || chatId === undefined || chatId === null) {
      reject("Bad Data")
      return
    }
    database.chats.update({ _id: mongojs.ObjectId(chatId) }, {
      $pull: {
        subs: userId
      }
    }, (err, data) => {
      if (err || data === undefined || data === null) {
        reject("Error removing userSub from chat subIds list")
        return
      }
      else resolve(0)
    })
  })
}

//Removes chatSub from userSubs
function removeChatSubFromUserSubs(userId, chatId) {
  return new Promise((resolve, reject) => {
    if (userId == undefined || userId == null || chatId == undefined || chatId == null) {
      reject("Bad data")
      return
    }
    database.users.update({ _id: mongojs.ObjectId(userId) }, {
      $pull: {
        chatIds: chatId
      }
    }, (err, data) => {
      if (err || data === undefined || data === null) {
        reject("Error removing chatSub from user subscriptions list")
        return
      } 
      resolve(0)
    })
  })
}

//Queries tags for tags that contain the queryString as a substring
function queryTags(queryString) {
  return new Promise((resolve, reject) => {
    if (queryString === undefined || queryString === null) {
      reject("Bad data")
      return
    }
    database.tags.find({tag: new RegExp(queryString, 'i')}, function(err, tags) {
      if (err || tags === undefined || tags === null) {
        reject("Error querying tags")
        return
      }
      resolve(tags)
    })
  })
}

//Queries categories for categories that contain the queryString as a substring
function queryCategories(queryString) {
  return new Promise((resolve, reject) => {
    if (queryString === undefined || queryString === null) {
      reject("Bad data")
      return
    }
    database.categories.find({category: new RegExp(queryString, 'i')}, function(err, categories) {
      if (err || categories === undefined || categories === null) {
        reject("Error querying categories")
        return
      }
      resolve(categories)
    })
  })
}

//Query chats for chats that have a title with prefix matching a querystring
function searchChats(queryString, queryCategory, queryTags) {
  return new Promise((resolve, reject) => {
    if (queryString === undefined || queryString === null) {
      reject("Bad Data")
      return 
    }
    database.chats.find({title: {$regex: new RegExp("^" + queryString, "i")}}, {category: 1, tags: 1}, function(err, chats) {
      if (err || chats === undefined || chats === null) {
        reject("Bad data")
        return 
      }
      var searchResults = []
      for (var i = 0; i < chats.length; i++) {
        const chat = chats[i]
        if (queryCategory === chat.category || queryCategory === "Any") {
          var works = true
          for (var j = 0; j < queryTags.length; j++) {
            const tag = queryTags[j]
            if (chat.tags.indexOf(tag) === -1) {
              works = false
            }
          }
          if (works) {
            searchResults.push(chat._id)
          }
        }
      }
      resolve(searchResults)
    })
  })
}

//Check if a given tag has already been recorded
function tagExists(tag) {
  return new Promise((resolve, reject) => {
    if (tag === undefined || tag === null) {
      reject("Bad data")
      return
    }
    database.tags.findOne({tag: tag}, function(err, data) {
      if (err || data === undefined || data === null) {
        reject("Tag does not exist")
        return
      }
      resolve(0)
    })
  })
}

//Add a new chatId to a tag 
function addChatIdToTag(tag, chatId) {
  return new Promise((resolve, reject) => {
    if (tag === undefined || tag === null || chatId === undefined || chatId === null) {
      reject("Bad data")
      return
    }
    database.tags.update({tag: tag}, 
      {$push: {
        chatIds: chatId
      }}, function(err, data) {
        if (err || data === undefined || data === null) {
          reject("Error posting chat sub to tag chat subs")
          return
        }
        resolve(0)
      })
  })
}

//Add new tag to tags collection
function addNewTag(tag) {
  return new Promise((resolve, reject) => {
    if (tag === undefined || tag === null) {
      reject("Bad data")
      return
    }
    const newTag = createTag(tag)
    database.tags.save(newTag, function(err, data) {
      if (err || data === undefined || data === null) {
        reject("Error posting new tag")
        return
      }
      //Successfully posted the new tag
      resolve(0)
    })
  })
}

//Check if a given category has already been recorded
function categoryExists(category) {
  return new Promise((resolve, reject) => {
    if (category === undefined || category === null) {
      reject("Bad Data")
      return
    }
    database.categories.findOne({category: category}, function(err, data) {
      if (err || data === null || data === undefined) {
        reject("Category does not exist")
        return
      }
      //Success: Category exists
      resolve(0)
    })
  })
}

function addChatIdToCategory(category, chatId) {
  return new Promise((resolve, reject) => {
    if (category === undefined || category === null || chatId === undefined || chatId === null) {
      reject("Bad data")
      return
    }
    database.categories.update({category: category}, 
      {$push: {
        chatIds: chatId
      }}, function(err, data) {
        if (err || data === undefined || data === null) {
          reject("Error posting chat sub to category chat subs")
          return
        }
        resolve(0)
      })
  })
}

//Add new category to categories collection
function addNewCategory(category) {
  return new Promise((resolve, reject) => {
    if (category === undefined || category === null) {
      reject("Bad data")
      return
    }
    const newCategory = createCategory(category)
    database.categories.save(newCategory, function(err, data) {
      if (err || data === undefined || data === null) {
        reject("Error posting new category")
      }
      resolve(0)
    })
  })
}

//Get most recent chat Ids
function getRecentChatIds() {
  return new Promise( (resolve, reject) => {
    database.chats.find({}, {_id: 1}, function(err, chats) {
      if (err || chats === undefined || chats == null) {
        reject("Error querying chats")
        return
      }
      chatIds = []
      for (var i = chats.length - 1; i >= 0; i--) {
        const chatId = chats[i]._id
        if (chatIds.indexOf(chatId) === -1) {
          chatIds.push(chatId)
        }
        if (chatIds.length === 10) {
          break;
        }
      }
      resolve(chatIds)
    })
  })
}

//Get most popular chats Ids
function getPopularChatIds() {
  return new Promise((resolve, reject) => {
    //I should add a limit to the number of results returned
    database.chats.find({}, {subs: 1}, function(err, chats) {
        if (err || chats === undefined || chats === null) {
          reject("Error querying chats")
          return
        }
        chats.sort(function(chatA, chatB) {
          if (chatA.subs.length > chatB.subs.length) {
            return 1
          } else {
            return -1
          }
        })
        chatIds = []
        for (var i = chats.length - 1; i >= 0; i--) {
          const chatId = chats[i]._id
          if (chatIds.indexOf(chatId) === -1) {
            chatIds.push(chatId)
          }
          if (chatIds.length === 10) {
            break;
          }
        }
        resolve(chatIds)
      })
  })
}

//Get recommended chats (random chats)
function getRecommendedChatIds() {
  return new Promise( (resolve, reject) => {
    database.chats.aggregate([ { $group: { _id: "$_id" } }, { $sample: { size: 10 } }],  function(err, chats) {
      if (err || chats === undefined || chats === null) {
        reject("Error querying chats")
        return
      }
      chatIds = []
      for (var i = 0; i < chats.length; i++) {
        chatId = chats[i]._id
        chatIds.push(chatId)
        if (chatIds.length === 10) {
          break
        }
      }
      resolve(chatIds)
    })
  })
}

//Get chatIds of chats that feature a given category
function getChatIdsInCategory(category) {
  return new Promise((resolve, reject) => {
    if (category === undefined || category === null) {
      reject("Bad data")
      return
    }
    database.categories.findOne({category: category}, function(err, data) {
      if (err || data === undefined || data === null) {
        reject("Error querying categories")
        return
      }
      resolve(data.chatIds)
    })
  })
}

//Get chatIds of chats that feature a given tag
function getChatIdsInTags(tags) {
  return new Promise((resolve, reject) => {
    if (tags === undefined || tags === null) {
      reject("Bad data")
      return
    }
    database.tags.find(function(err, data) {
      if (err || data === undefined || data === null) {
        reject("Errory querying tags")
        return
      }
      var chatIds = []
      for (var i = 0; i < data.length; i++) {
        if (tags.indexOf(data[i].tag) !== -1) {
          if (data[i].chatIds === null || data[i].chatIds === undefined) continue
          for (var j = 0; j < data[i].chatIds.length; j++) {
            const chatId = data[i].chatIds[j]
            if (chatIds.indexOf(chatId) === -1) {
              chatIds.push(chatId)
            }
          }
        }
      }
      resolve(chatIds)
    })
  })
}


//Updates user profile image
function setChatImage(image, chatId) {
  return new Promise((resolve, reject) => {
    if (image === undefined || image === null || chatId === undefined || chatId === null) {
      reject("Bad data")
      return
    }
    database.chats.update({_id: mongojs.ObjectId(chatId)}, { $set: {image: image} }, function(err, chat) {
      if (err || chat === null || chat === undefined) {
        reject("Error updating chat image")
        return
      }
      resolve(chat)
    }) 
  })
}

//Get all tags in use
function getAllTags() {
  return new Promise((resolve, reject) => {
    database.tags.find({}, function(err, tags) {
      if (err || tags === undefined || tags === null) {
        reject("Error querying tags")
        return
      }
      var tagValues = []
      for (var i = 0; i < tags.length; i++) {
        const tag = tags[i]
        const tagText = tag.tag
        if (tagValues.indexOf(tagText) === -1) {
          tagValues.push(tagText)
        }
      }
      resolve(tagValues)
    })
  })
}

//Get all chat titles in use
function getAllChatTitles() {
  return new Promise((resolve, reject) => {
    database.chats.find({}, {title: 1, _id: 0}, function(err, chatTitlesRaw) {
      if (err || chatTitlesRaw === undefined || chatTitlesRaw === null) {
        reject("Error querying chat titles")
        return
      }
      var chatTitles = []
      for (var i = 0; i < chatTitlesRaw.length; i++) {
        const chatTitle = chatTitlesRaw[i].title
        if (chatTitles.indexOf(chatTitle) === -1) {
          chatTitles.push(chatTitle)
        }
      }
      resolve(chatTitles)
    })
  })
}

//Get all chat ids
function getAllChatIds() {
  return new Promise((resolve, reject) => {
    database.chats.find({}, {}, function(err, chatIds) {
      if (err || chatIds === undefined || chatIds === null) {
        reject("Error querying chats")
        return
      }
      var chatIds = []
      for (var i = 0; i < chatIds.length; i++) {
        const chatId = chatIds[i]
        if (chatIds.indexOf(chatId) === -1) {
          chatIds.push(chatId)
        }
      }
      resolve(chatIds)
    })
  })
}

module.exports = router
