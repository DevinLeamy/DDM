const express = require("express");
const Keycloak = require("keycloak-connect");
const session = require("express-session");
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const socket = require("socket.io")
const http = require("http")
const PORT = process.env.PORT || 3000
const cors = require('cors');

// Configure express for keycloak
const memoryStore = new session.MemoryStore();
// Accesses keycloak.json to create keycloak object
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true,
	store: memoryStore
}));
const keycloak = new Keycloak({ store: memoryStore });
//--------------------------------Configure express app-----------------------------
// Allows for the use of keycloak.project middleware

// Add headers
app.use(cors());
app.use(keycloak.middleware());
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded( { extended: false } ))
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

module.exports = {keycloak};
//Set routes to api services
const authAPI = require("./routes/auth")
const chatAPI = require("./routes/chat")
const userAPI = require("./routes/user")
app.use("/api/authentication", authAPI)
app.use("/api/chat", chatAPI)
app.use("/api/user", userAPI)

// Renders the index.html page on every page
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"));
})

const server = http.Server(app)

//Sets port
server.listen(PORT, function() {
  console.log("Server started on port: " + PORT)
})

const io = socket(server)

app.set("io", io)


