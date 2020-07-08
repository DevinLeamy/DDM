const fs = require("fs")

//Parses jwt ( "Bearer {token}" ) syntax
function tokenParser(bearerToken) {
  const token = bearerToken.split(" ")[1]
  return token
}

//Encodes file as base 64 string
function encodeAsBase64(filePath) {
  const bitmap = fs.readFileSync(filePath)
  return new Buffer.from(bitmap).toString("base64")
}

//Check is a given value is of type string
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]"
}

//Creates user sub from user
function createUserSub(user) {
  return {
    _id: user._id,
    username: user.username,
    image: user.image,
    onine: user.online
  }
}

//Create user from raw-user
function createUser(rawUser) {
  return {
    _id: rawUser._id,
    username: rawUser.username,
    email: rawUser.email,
    chatIds: rawUser.chatIds,
    friendReqs: rawUser.friendReqs,
    friends: rawUser.friends,
    image: rawUser.image,
    online: rawUser.online
  }
}
module.exports = { tokenParser, encodeAsBase64, isString, createUserSub, createUser }
