//Authentication Service Accessory Functions
const crypto = require("crypto")

const saltLength = 32

function passwordIsValid(password, passwordHash, salt) {
  const hashedPassword = getPasswordHash(password, salt)
  return hashedPassword == passwordHash
}

function getPasswordHash(password, salt) {
  // Hashed with sha512
  const passwordHash = crypto.createHmac('sha512', salt);
  passwordHash.update(password);
  // Returns hash as hex string
  return passwordHash.digest('hex');
}

function getSalt(length) {
  return crypto.randomBytes(Math.ceil(length/2))
                .toString('hex')
                .slice(0,length);
}

function getNewUser(username, email, password) {
  const salt = getSalt(saltLength)
  const passwordHash = getPasswordHash(password, salt)
  const newUser = {
    username: username,
    email: email,
    chatSubs: [],
    friendReqs: [],
    friends: [],
    salt: salt,
    password_hash: passwordHash,
    image: "$$$Default$$$"
  }
  return newUser;
}


module.exports = { passwordIsValid, getNewUser, getSalt, getPasswordHash }
