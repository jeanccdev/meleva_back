import { Sequelize } from 'sequelize'

const database_url = process.env.DATABASE_URL

const sequelize = new Sequelize(`postgres://zuubqdrl:lRMS7LpUZ1aXKQ9QC14A02n1KLtUYyw5@kesavan.db.elephantsql.com/zuubqdrl`, {
    dialect: 'postgres',
    benchmark: true
})

export default sequelize