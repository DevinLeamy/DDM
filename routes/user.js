require("dotenv").config()
const express = require("express")
const router = express.Router()
const mongojs = require("mongojs")
const jwt = require("jsonwebtoken")
const path = require("path")
const { tokenParser } = require("./functions/userFunc")

//-----------------------------------Initialize Database----------------------------------------
const databaseUsername = "test"
const databasePassword = "test"
const databaseName = "messenger-database"
const databaseUrl = "mongodb+srv://" + databaseUsername + ":" + databasePassword + "@messenger-db-jzhdw.mongodb.net/" + databaseName + "?retryWrites=true&w=majority"
const database = mongojs(databaseUrl, ["users"])

//-----------------------------------Requests----------------------------------------
router.get("/data", authenticateToken, function(req, res) {
  getUserById(req.user._id).then(
    (resolve) => res.json(resolve)
  ).catch((reject) => console.log(reject))
})

router.get("/:_id", function(req, res) {
  const userId = req.params._id
  console.log("Getting user with id", userId)
  getUserById(userId).then(
    (resolve) => res.json(resolve)
  ).catch((reject) => console.log(reject))
})

//Status 1: Success | Status 0: Unsuccessful
router.post("send-friend-request", authenticateToken, function(req, res) {
  const receiverEmail = req.body.email
  const senderId = req.user._id
  const senderUsername = req.user.username
  userExistsWithEmail(receiverEmail).then(
    (resolve) => {
      const receiverId = resolve._id
      alreadyFriends(senderId, senderUsername, receiverId).then(
        //Not already friends
        () => alreadySentRequest(senderId, senderUsername, receiverId).then(
          //Request has not yet been sent
          () => sendFriendRequest(senderId, senderUsername, receiverId).then(
            () => res.json({status: 1})
          ).catch(() => res.json({status: 0}))
        ).catch(() => res.json({status: 0}))
      ).catch(() => res.json({status: 0}))
    }
  ).catch(() => res.json({status: 0}))
})

//----------------------------Middle ware-------------------------------

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
      } 
      resolve(user)
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

function getUserByEmail(userEmail) {
  return new Promise((resolve, reject) => {
    if (userEmail == null || userEmail == undefined) reject("Bad Data")
    database.users.findOne({_id: mongojs.ObjectId(userEmail)}, (err, user) => {
      if (err || user == null || user == undefined) reject("Error retrieving user data from database")
      resolve(user)
    })
  })
}

//Checks whether one user has already sent a request to another
//Rejects if true || Bad data
function alreadySentRequest(senderId, senderUsername, receiverId) {
  return new Promise((resolve, reject) => {
    if (senderId === null || senderId === undefined || receiverId === null || receiverId === undefined || senderUsername === null || senderUsername === undefined) {
      reject("Bad Data")
    }
    //Queries user database for senders user-sub in receivers friendReqs array
    database.users.findOne({_id: mongojs.ObjectId(receiverId)}, {friendReqs: {$elemMatch: {_id: senderId, username: senderUsername}}}, function(err, user) {
      if (err || user === null || user === undefined) {
        resolve("Request not sent")
      }
      reject("Request has already been sent")
    })
  })
}

//Checks whether two users are friends
//Rejects if true || Bad data
function alreadyFriends(senderId, senderUsername, receiverId) {
  return new Promise((resolve, reject) => {
    if (senderId === null || senderId === undefined || receiverId === null || receiverId === undefined || senderUsername === null || senderUsername === undefined) {
      reject("Bad Data")
    }
    //Queries user database for senders user-sub in receivers friendReqs array
    database.users.findOne(
      {_id: mongojs.ObjectId(receiverId)}, 
      {friends: {$elemMatch: {_id: senderId, username: senderUsername}}}, function(err, user) {
        if (err || user === null || user == undefined) {
          resolve("Not friends")
        } 
        reject("Friends")
    })
  })
}

//Sends friend request from one user to another 
//Resolves if sent successfully
function sendFriendRequest(senderId, senderUsername, receiverId) {
  return new Promise((resolve, reject) => {
    if (senderId === null || senderId === undefined || receiverId === null || receiverId === undefined || senderUsername === null || senderUsername === undefined) {
      reject("Bad Data")
    }
    database.users.update(
      {_id: mongojs.ObjectId(receiverId)}, 
      {$push: { friendReqs: {_id: senderId, username: senderUsername}}}, function(err, user) {
        if (err || user === null || user === undefined) {
          reject("Error updating user")
        }
        resolve(user)
      })
  })
}

module.exports = router
