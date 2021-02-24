// express server
const app = require("./Express/Application")

// graphql service
const { ApolloServer } = require("apollo-server-express")

// load graphql modules
const modules = require("./Modules")

// load graphql path
const { GRAPHQL_PATH } = require("./Settings")

// create graphql server
const server = new ApolloServer({
	modules,
	subscriptions: {
		onConnect: (connectionParams, webSocket, context) => {},
		onDisconnect: (webSocket, context) => {},
	},
})

// apply middleware
server.applyMiddleware({ app, path: GRAPHQL_PATH })

module.exports = server