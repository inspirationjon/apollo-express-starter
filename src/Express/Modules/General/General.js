const General = require("express").Router()

General.get("/", (_, res) => res.send("Welcome!"))

General.get("/about", (_, res) => res.send("Graphql Service"))

module.exports = General
