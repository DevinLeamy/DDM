require("dotenv").config()
const express = require("express")
const router = express.Router()
const mongojs = require("mongojs")
const jwt = require("jsonwebtoken")
const path = require("path")
const { tokenParser, encodeAsBase64, isString, createUserSub, createUser} = require("./functions/userFunc")
const formidable = require("express-formidable")

//-----------------------------------Initialize Database----------------------------------------
const databaseUrl = "mongodb+srv://" + process.env.DATABASE_USERNAME + ":" + process.env.DATABASE_PASSWORD + "@messenger-db-jzhdw.mongodb.net/" +  process.env.DATABASE_NAME + "?retryWrites=true&w=majority"
const database = mongojs(databaseUrl, ["users"])

//-----------------------------------Requests----------------------------------------
router.get("/data", authenticateToken, function(req, res) {
  if (req.user === null || req.user === undefined) {
    res.json({status: "1", data: "Bad data"})
    return
  }
  getUserById(req.user._id).then(
    (user) => res.json({status: "0", data: createUser(user)})
  ).catch((reject) => res.json({status: "1", data: reject}))
})

//Gets user sub
router.get("/data/:_id", function(req, res) {
  const userId = req.params._id
  console.log("Getting user with id", userId)
  getUserById(userId).then(
    (resolve) => res.json({
      _id: resolve._id,
      username: resolve.username,
      image: resolve.image,
      online: resolve.online
    })
  ).catch((reject) => console.log(reject))
})

//Protects user route from not-login-in users
router.get("", function(req, res) {
  if (!req.headers["authorization"]) res.redirect("http://localhost:3000")
  else { 
    res.next()
  }
})

//Status 1: Success | Status 0: Unsuccessful
router.post("/friend-request", authenticateToken, function(req, res) {
  const receiverEmail = req.body.email
  const senderId = req.user._id
  console.log("Sending friend request to " + receiverEmail)
  alreadyFriends(receiverEmail, senderId).then(
    //Not already friends
    () => alreadySentRequest(receiverEmail, senderId).then(
      //Request has not yet been sent
      () => sendFriendRequest(receiverEmail, senderId).then(
        () => res.json({status: '0', data: "Friend request was sent"})
      ).catch((reject) => res.json({status: "1", data: reject}))
    ).catch((reject) => res.json({status: "1", data: reject}))
  ).catch((reject) => res.json({status: "1", data: reject}))
})

//Status 1: Success | Status 0: Unsuccessful
router.post("/accept-request", authenticateToken, function(req, res) {
  //Id of user that received the request
  const userId = req.user._id 
  //Id of user that send the request
  const requestId = req.body.requestId
  removeRequest(userId, requestId).then(
    () => addFriend(userId, requestId).then(
      () => addFriend(requestId, userId).then(
        () => res.json({status: "0", data: "Users became friends"})
      ).catch((reject) => res.json({status: "1", data: reject}))
    ).catch((reject) => res.json({status: "1", data: reject}))
  ).catch((reject) => res.json({status: "1", data: reject}))
})

router.post("/decline-request", authenticateToken, function(req, res) {
  //Id of user that received the request
  const userId = req.user._id
  //Id of user that sent the request
  const requestId = req.body.requestId
  removeRequest(userId, requestId).then(
    () => res.json({status: "0", data: "Request was revoked"})
  ).catch((reject) => res.json({status: "1", data: reject}))
})

//Formidable middleware parses form data allowing me to send image files
router.post("/setProfileImage", authenticateToken, function(req, res) {
  const userId = req.user._id
  const imageUrl = req.body.imageUrl
  // console.log(imageFile)
  // const imageEncoded = 'data:image/*;base64, ' + encodeAsBase64(imageFile.path).split(" ")[0]
  console.log("Setting profile image")
  setProfileImage(imageUrl, userId).then(
    () => res.json({status: 1, data: imageUrl})
  ).catch((reject) => {console.log(reject); res.json({status: 0, data: null})})
})

//Set user.online = true a.k.a set user status as online
router.get("/userOnline", authenticateToken, function(req, res) {
  const userId = req.user._id
  setUserStatus(userId, true)
    .then( () => res.json({status: "0", data: "Successfully updated user status"}) )
    .catch( (reject) => console.log(reject) )
})

//Set user.online = false a.k.a set user status as offline
router.post("/userOffline", authenticateToken, function(req, res) {
  const userId = req.user._id
  console.log("Trying to set the user offline")
  setUserStatus(userId, false)
    .then( () => res.json({status: "0", data: "Successfully updated user status"}) )
    .catch( (reject) => console.log(reject) )
})
//----------------------------Middle ware-------------------------------

//Checks if tokens exists and extracts the user from it if it does
function authenticateToken(req, res, next) {
  
  console.log("Authenticating Token")
  const bearerToken = req.headers["authorization"]
  if (bearerToken !== "Bearer null") {
    const token = tokenParser(bearerToken)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, payload) {
      if (payload) {
        req.user = payload
      }
    })
  } 
  next()
}
//----------------------------Promises-------------------------------

//Check if user exists
function userExistsWithId(userId) {
  return new Promise((resolve, reject) => {
    if (userId === null || userId === undefined) {
      reject("Bad Data")
    }
    database.users.findOne({_id: mongojs.ObjectId(userId)}, function(err, user) {
      if (err || user === null || user === undefined) {
        reject("User does not exist")
        return
      } 
      resolve(user)
    })
  })
}

function getUserById(userId) {
  return new Promise((resolve, reject) => {
    if (userId === null || userId === undefined || !isString(userId)) reject("Bad Data")
    database.users.findOne({_id: mongojs.ObjectId(userId)}, (err, user) => {
      if (err || user === null || user === undefined) {
        reject("Error retrieving user data from database")
        return
      }
      resolve(user)
    })
  })
}

function getUserByEmail(userEmail) {
  return new Promise((resolve, reject) => {
    if (userEmail == null || userEmail == undefined) {
      reject("Bad Data")
      return
    }
    database.users.findOne({email: userEmail}, (err, user) => {
      if (err || user == null || user == undefined) {
        reject("Error retrieving user data from database")
        return
      }
      resolve(user)
    })
  })
}

//Checks whether one user has already sent a request to another
//Rejects if true || Bad data
function alreadySentRequest(receiverEmail, senderId) {
  return new Promise((resolve, reject) => {
    if (senderId === null || senderId === undefined || receiverEmail === null || receiverEmail === undefined) reject("Bad Data")
    database.users.findOne({email: receiverEmail}, function(err, user) {
      if (err || user === undefined || user === null) {
        reject("Error retrieving user from database")
        return
      } 
      for (var i = 0; i < user.friendReqIds.length; i++) {
        const friendReqId = user.friendReqIds[i]
        if (friendReqId === senderId) {
          reject("Already sent request")
          return
        }
      }
      resolve("Request has not been sent")
    })
  })
}

//Checks whether two users are friends
//Rejects if true or if parameters are undefined or null
function alreadyFriends(receiverEmail, senderId) {
  return new Promise((resolve, reject) => {
    if (senderId === null || senderId === undefined || receiverEmail === null || receiverEmail === undefined) reject("Bad Data")
    database.users.findOne({email: receiverEmail}, function(err, user) {
      if (err || user === undefined || user === null) {
        reject("Error retrieving user from database")
        return
      }
      for (var i = 0; i < user.friendIds.length; i++) {
        const friendId = user.friendIds[i]
        if (friendId === senderId) {
          reject("Already Friends")
          return 
        }
      }
      resolve("Not friends")
    })
  })
}

//Sends friend request from one user to another 
//Resolves if sent successfully
function sendFriendRequest(receiverEmail, senderId) {
  return new Promise((resolve, reject) => {
    if (senderId === null || senderId === undefined || receiverEmail === null || receiverEmail === undefined) reject("Bad Data")
    database.users.update(
      {email: receiverEmail}, 
      {$push: { friendReqIds: senderId }}, function(err, user) {
        if (err || user === null || user === undefined) {
          reject("Error updating user")
          return
        }
        resolve("Send friend request")
      })
  })
}

///Request will be removed from friendReqIds of user with userId
function removeRequest(userId, requestId) {
  return new Promise((resolve, reject) => {
    if (requestId === null || requestId === undefined || userId === null || userId === undefined) reject("Bad data")
    database.users.update(
      {_id: mongojs.ObjectId(userId)},
      {$pull: { friendReqIds: requestId }}, function(err, user) {
        if (err || user === null || user === undefined) {
          reject("Error pulling request from database")
          return
        }
        resolve("Request was pulled from user profile")
      }
    )
  })
}

//Friend will be added to friendIds  of user with userId
function addFriend(userId, friendId) {
  return new Promise((resolve, reject) => {
    if (friendId === null || friendId === undefined || userId === null || userId === undefined) reject("Bad data")
    database.users.update(
      {_id: mongojs.ObjectId(userId)},
      {$push: { friendIds: friendId }}, function(err, user) {
        if (err || user === undefined || user === null) {
          reject("Error adding friend to user database")
          return
        }
        resolve("Users became friends")
      }
    )
  })
}

//Updates user profile image
function setProfileImage(image, userId) {
  return new Promise((resolve, reject) => {
    if (image === undefined || image === null || userId === undefined || userId === null) reject("Bad data")
    database.users.update({_id: mongojs.ObjectId(userId)}, { $set: {image: image} }, function(err, user) {
      if (err || user === null || user === undefined) {
        reject("Error updating user image")
        return
      }
      resolve(user)
    }) 
  })
}

//Set user.online equal to the provided value
function setUserStatus(userId, online) {
  return new Promise((resolve, reject) => {
    if (online === undefined || online === null || userId === undefined || userId === null) reject("Bad data")
    database.users.update({_id: mongojs.ObjectID(userId)}, {$set: {online: online}}, function(err, data) {
      if (err || data === undefined || data === null) {
        reject("Error updating user status")
        return
      }
      //Success: User status was updated
      resolve(0)
    })
  })
}
module.exports = router
