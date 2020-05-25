//Parses jwt ( "Bearer {token}" ) syntax
function tokenParser(bearerToken) {
  const token = bearerToken.split(" ")[1]
  return token
}

module.exports = { tokenParser }
