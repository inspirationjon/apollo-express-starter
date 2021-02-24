const express = require("express")

// General routes
const General = require("./Modules/General/General")

const app = express()

app.use(express.json())

app.use(General)

module.exports = app
