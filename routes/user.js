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
router.post("/friend-request", authenticateToken, function(req, res) {
  const receiverEmail = req.body.email
  const senderId = req.user._id
  const senderUsername = req.user.username
  console.log("Sending friend request to " + receiverEmail)
  getUserByEmail(receiverEmail).then(
    (resolve) => {
      const receiver = resolve
      alreadyFriends(receiver, senderId, senderUsername).then(
        //Not already friends
        () => alreadySentRequest(receiver, senderId, senderUsername).then(
          //Request has not yet been sent
          () => sendFriendRequest(senderId, senderUsername, receiver._id).then(
            () => {
              console.log("Success")
              res.json({status: 1})
            }
          ).catch(() => res.json({status: 0}))
        ).catch(() => res.json({status: 0}))
      ).catch(() => res.json({status: 0}))
    }
  ).catch(() => res.json({status: 0}))
})

//Status 1: Success | Status 0: Unsuccessful
router.post("/accept-request", authenticateToken, function(req, res) {
  //Both users become friends of one another
  const user = req.user;
  const request = req.body.request
  removeRequest(request._id, request.username, user._id).then(
    () => addFriend(request._id, request.username, user._id).then(
      () => addFriend(user._id, user.username, request._id).then(
        () => res.json({status: 1})
      ).catch((reject) => {console.log(reject); res.json({status: 0})})
    ).catch((reject) => {console.log(reject); res.json({status: 0})})
  ).catch((reject) => {console.log(reject); res.json({status: 0})})
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
    database.users.findOne({email: userEmail}, (err, user) => {
      if (err || user == null || user == undefined) reject("Error retrieving user data from database")
      resolve(user)
    })
  })
}

//Checks whether one user has already sent a request to another
//Rejects if true || Bad data
function alreadySentRequest(receiver, senderId, senderUsername) {
  return new Promise((resolve, reject) => {
    if (senderId === null || senderId === undefined || receiver === null || receiver === undefined || senderUsername === null || senderUsername === undefined) {
      reject("Bad Data")
    }
    for (var friendReq in receiver.friendReqs) {
      if (friendReq.username === senderUsername && friendReq._id === senderId) {
        reject("Already sent request")
      }
    }
    resolve("Not yet friends")
  })
}

//Checks whether two users are friends
//Rejects if true || Bad data
function alreadyFriends(receiver, senderId, senderUsername) {
  return new Promise((resolve, reject) => {
    if (senderId === null || senderId === undefined || receiver === null || receiver === undefined || senderUsername === null || senderUsername === undefined) {
      reject("Bad Data")
    }
    //Queries user database for senders user-sub in receivers friendReqs array
    for (var friend in receiver.friends) {
      if (friend.username === senderUsername && friend._id === senderId) {
        reject("Already friends")
      }
    }
    resolve("Not friends")
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

///Request { _id: requestId, username: requestUsername } will be removed from friendReqs of user with userId
function removeRequest(requestId, requestUsername, userId) {
  return new Promise((resolve, reject) => {
    if (requestId === null || requestId === undefined || requestUsername === null || requestUsername === undefined || userId === null || userId === undefined) {
      reject("Bad data")
    }
    database.users.update(
      {_id: mongojs.ObjectId(userId)},
      {$pull: { friendReqs: {_id: requestId, username: requestUsername}}}, function(err, user) {
        if (err || user === null || user === undefined) { reject("Error pulling request from database") }
        resolve(user)
      }
    )
  })
}

//Friend { _id: friendId, username: friendUsername } will be added to friend list of user with userId
function addFriend(friendId, friendUsername, userId) {
  return new Promise((resolve, reject) => {
    if (friendId === null || friendId === undefined || friendUsername === null || friendUsername === undefined || userId === null || userId === undefined) {
      reject("Bad data")
    }
    database.users.update(
      {_id: mongojs.ObjectId(userId)},
      {$push: { friends: {_id: friendId, username: friendUsername}}}, function(err, user) {
        if (err || user === undefined || user === null) { reject("Error adding friend to user database")}
        resolve(user)
      }
    )
  })
}

module.exports = router
