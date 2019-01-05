const express = require("express")
const helmet = require("helmet")
const logger = require("morgan")
const server = express()
const projectsRouter = require('./data/routers/projectsRouter')
const actionsRouter = require("./data/routers/actionsRouter")
const PORT = process.env.PORT || 3008
server.use(
 helmet(),
 logger('tiny'),
 express.json()
)

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.listen(PORT, () => {
 console.log(`Server is running live on ${PORT}`)
})