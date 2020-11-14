//-----------------------------------Imports----------------------------------------
require("dotenv").config()
const express = require("express")
const router = express.Router()
const mongojs = require("mongojs")
const jwt = require("jsonwebtoken")
const { keycloak } = require("../server")
const { passwordIsValid, getNewUser } = require("./functions/authFunc")
//-----------------------------------Constants----------------------------------------

//-----------------------------------Initialize Database----------------------------------------
const databaseUrl = process.env.DATABASE_URL
const database = mongojs(databaseUrl, ["users"])
//-----------------------------------Requests----------------------------------------

// Prevents users from manually changing url
router.get("/register", function(req, res, next) {
  //If auth token was not sent redirect to home
  if (req.headers["authorization"]) next()
  else res.redirect("https://ddm-rumble-keycloak.herokuapp.com")
})

router.get("/login", keycloak.protect(), function(req, res) {
	console.log("user has logged in with keycloak")
    const email = req.kauth.grant.access_token.content.email;
	console.log(email);
    getUserByEmail(email).then((user) => {
        res.json({
            status: '0',
            token: getAccessToken({_id: user._id, username: user.username})
        })
    }).catch(() => res.json({
        status: "1",
        data: "Unable to log in user"
    }))
})

router.post("/register/createUser", function(req, res) {
    console.log(req.body.token)
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
    if (newUser == undefined || newUser == null) {
      reject("Bad Data")
      return
    }
    database.users.save(newUser, function(err, user) {
      if (err || user === undefined || user === null) {
        reject("Error posting user")
        return
      }
      resolve(user)
    })
  })
}

//Get user by username
function getUserByEmail(email) {
  return new Promise( (resolve, reject) => {
    database.users.findOne({email: email}, function(err, user) {
      if (err || user === null || user === undefined) {
        reject("Error querying users")
        return
      }
      resolve(user)
    })
  })
}

//Check if user with given email exists
function takenEmail(email) {
  return new Promise( (resolve, reject) => {
    database.users.count({email: email}, function(err, count) {
      if (err || count === undefined || count === null) {
        reject("Error counting users")
        return
      } else if (count > 0) {
        reject("User already exists")
      }
      resolve(0)
    })
  })
}

//Get JWT access token
function getAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
}

module.exports = router
