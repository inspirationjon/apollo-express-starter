module.exports = {
    PORT: process.env.PORT || 4000,

    GRAPHQL_PATH: '/graphql',

    PG: {
        host: 'localhost',
        user: 'postgres',
        password: 'ilhom55',
        database: 'mydb...' /* ... === Number */,
        port: 5000,
    },
}
