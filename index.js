const express = require("express")
const helmet = require("helmet")
const logger = require("morgan")
const server = express()
const PORT = process.env.PORT || 3008

server.use(
 helmet(),
 logger(),
 express.json()
)

server.listen(PORT, () => {
 console.log(`Server is running live on ${PORT}`)
})