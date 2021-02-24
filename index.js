const http = require("http")

const expressServer = require("./src/Express/Application")
const graphqlServer = require("./src/Apollo")

const { PORT } = require("./src/Settings")

const httpServer = http.createServer(expressServer)

graphqlServer.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: PORT }, () => {
	console.log('http://localhost:' + PORT + graphqlServer.graphqlPath)
	console.log('ws://localhost:' + PORT + graphqlServer.subscriptionsPath)
})
