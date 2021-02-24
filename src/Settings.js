module.exports = {
    PORT: process.env.PORT || 4000,

    GRAPHQL_PATH: '/graphql',

    PG: {
        host: 'localhost',
        user: 'postgres',
        password: 'math',
        database: 'd35',
        port: 5432,
    },
}
