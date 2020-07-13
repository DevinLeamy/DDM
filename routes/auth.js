//-----------------------------------Imports----------------------------------------
require("dotenv").config()
const express = require("express")
const router = express.Router()
const mongojs = require("mongojs")
const jwt = require("jsonwebtoken")
const { passwordIsValid, getNewUser } = require("./functions/authFunc")
//-----------------------------------Constants----------------------------------------

//-----------------------------------Initialize Database----------------------------------------
const databaseUsername = "test"
const databasePassword = "test"
const databaseName = "messenger-database"
const databaseUrl = "mongodb+srv://" + databaseUsername + ":" + databasePassword + "@messenger-db-jzhdw.mongodb.net/" + databaseName + "?retryWrites=true&w=majority"
const database = mongojs(databaseUrl, ["users"])
//-----------------------------------Requests----------------------------------------
// Prevents users from manually changing url
router.get("/login", function(req, res, next) {
  //If auth token was not sent redirect to home
  if (req.headers["authorization"]) next()
  else res.redirect("http://localhost:3000")
})

// Prevents users from manually changing url
router.get("/register", function(req, res, next) {
  //If auth token was not sent redirect to home
  if (req.headers["authorization"]) next()
  else res.redirect("http://localhost:3000")
})

router.post("/login/authenticate", function(req, res) {
  //Check if user manually changed url
  if (!req.headers["authorization"]) res.redirect("http://localhost:3000")
  else {
    const credentials = req.body
    const email = credentials.email
    const password = credentials.password
    takenEmail(email).then(
        () => res.json({
          status: "1",
          data: "Incorrect username or password"
        })
      ).catch(
        //User exists
        () => getUserByEmail(email).then(
          (user) => {
            const passwordHash = user.password_hash
            const salt = user.salt
            if (passwordIsValid(password, passwordHash, salt)) {
              res.json(
                { 
                  status: "0",
                  data: getAccessToken({_id: user._id, username: user.username})
                }
              )
            } else {
              res.json({
                status: "1",
                data: "Incorrect username or password"
              })
            }
          }
        ).catch(() => res.json({
          status: "1",
          data: "Incorrect username or password"
        }))
      )
  }
})

router.post("/register/createUser", function(req, res) {
  const user = req.body
  const username = user.username
  const email = user.email
  const password = user.password
  const newUser = getNewUser(username, email, password)
  takenEmail(email).then(
    () => postUser(newUser).then(
      (user) => {
          res.json(
            { 
              status: "0",
              data: getAccessToken({_id: user._id, username: user.username}) 
            }
          )
        }
      ).catch(() => res.json({
        status: "1",
        data: "An error occured while creating your account"
      }))
  ).catch(() => res.json({
    status: "1",
    data: "A user already exists under the provided email"
  }))
})
//-----------------------------------Middle ware----------------------------------------

//-----------------------------------Functions----------------------------------------

//Post new user to database
function postUser(newUser) {
  return new Promise( (resolve, reject) => {
    if (newUser == undefined || newUser == null) reject("Bad Data")
    database.users.save(newUser, function(err, user) {
      if (err) reject("Error posting user")
      else {
        resolve(user)
      }
    })
  })
}

//Get user by username
function getUserByEmail(email) {
  return new Promise( (resolve, reject) => {
    database.users.findOne({email: email}, function(err, user) {
      if (err || user == null || user == undefined) reject("Error getting user data")
      else {
        resolve(user)
      }
    })
  })
}

//Check if user with given email exists
function takenEmail(email) {
  return new Promise( (resolve, reject) => {
    database.users.count({email: email}, function(err, count) {
      if (err) reject("Error counting users")
      if (count > 0) reject("User already exists")
      else resolve(0)

    })
  })
}

//Get JWT access token
function getAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
}

module.exports = router
