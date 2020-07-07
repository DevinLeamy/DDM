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
module.exports = { tokenParser, encodeAsBase64, isString }
