class Authentication extends Error {

	constructor(message) {
		super()
		this.name = 'Authentication'
		this.message = message

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor)
		} else {
			this.stack = (new Error()).stack
		}
	}
}

module.exports = Authentication
