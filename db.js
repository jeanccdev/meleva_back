import { Sequelize } from 'sequelize'

// const dbname = process.env.PLANETSCALE_DB
// const username = process.env.PLANETSCALE_DB_USERNAME
// const password = process.env.PLANETSCALE_DB_PASSWORD
// const hostname = process.env.PLANETSCALE_DB_HOST
// const ssl = process.env.PLANETSCALE_SSL_CERT_PATH
const database_url = process.env.DATABASE_URL

const sequelize = new Sequelize(database_url, {
    dialect: 'postgres',
    benchmark: true
})

export default sequelize