const { Pool } = require('pg')
const { PG: options } = require('../../Settings')

const pool = new Pool(options)

const fetch = async (SQL, ...params) => {
    const client = await pool.connect()

    try {
        const { rows } = await client.query(SQL, params.length ? params : null)

        return rows
    } finally {
        client.release()
    }
}

const fetchOne = async (SQL, ...params) => {
    const client = await pool.connect()

    try {
        const {
            rows: [row],
        } = await client.query(SQL, params.length ? params : null)

        return row
    } finally {
        client.release()
    }
}

module.exports.fetch = fetch
module.exports.fetchOne = fetchOne
