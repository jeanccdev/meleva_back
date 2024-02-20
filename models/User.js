// Imports
import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

// Modelling
export const ModelUser = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phones: {
        type: DataTypes.STRING
    }
})