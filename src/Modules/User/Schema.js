const { gql } = require("apollo-server-express")

const schema = gql `
	type User {
		id: ID!
		username: String!
	}

	extend type Query {
		users: [User!]!
	}

	extend type Mutation {
		createUser(username: String!): MutationResponse!
	}
`

module.exports = schema
