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

module.exports = { tokenParser, encodeAsBase64 }
