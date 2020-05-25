const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const authAPI = require("./routes/auth")
const chatAPI = require("./routes/chat")
const userAPI = require("./routes/user")
const socket = require("socket.io")
const http = require("http")
const PORT = 3000

//--------------------------------Configure express app-----------------------------
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: false } ))
app.use(express.static(path.join(__dirname, "dist")))

//Set routes to api services
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
//--------------------------------Middle ware-----------------------------
