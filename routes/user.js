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

router.get("/:id", function(req, res) {
  const id = req.params.id
  console.log("Getting user with id", id)
  getUserById(id).then(
    (resolve) => res.json(resolve)
  ).catch((reject) => console.log(reject))
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
//----------------------------Functions-------------------------------
function getUserById(userId) {
  return new Promise((resolve, reject) => {
    if (userId == null || userId == undefined) reject("Bad Data")
    database.users.findOne({_id: mongojs.ObjectId(userId)}, (err, user) => {
      if (err || user == null || user == undefined) reject("Error retrieving user data from database")
      resolve(user)
    })
  })
}
module.exports = router
