// Model

const { fetch, fetchOne } = require("../../Library/Database/Postgres")

const MANY = `

	SELECT
		user_id,
		user_username,
		user_first_name,
		user_last_name,
		user_middle_name,
		user_age
	FROM
		users
`

const CREATE = `
	
	INSERT INTO users (

		user_username,
		user_password,
		user_first_name,
		user_last_name

	) VALUES (
		$1, $2, $3, $4
	) RETURNING *
`

const many = async () => await fetch(MANY)

const create = async ({ username }) => await fetchOne(CREATE, username, "pass1", "fName", "lName")

module.exports.many = many
module.exports.create = create
