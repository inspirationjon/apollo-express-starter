const { gql } = require("apollo-server-express")

const schema = gql `

	type Error {
		code: Int!
	}

	union MutationResponse = User | Error
`

module.exports = schema
