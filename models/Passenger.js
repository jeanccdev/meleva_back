// Imports
import { DataTypes } from 'sequelize'
import sequelize from '../db.js'
import { ModelUser } from './User.js'

// Modelling
export const ModelPassenger = sequelize.define('passenger', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    depature: {
        type: DataTypes.STRING
    },
    arriving: {
        type: DataTypes.STRING
    }
})

ModelPassenger.belongsTo(ModelUser, {
    foreignKey: 'idUser'
})