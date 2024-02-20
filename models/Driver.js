// Imports
import { DataTypes } from 'sequelize'
import sequelize from '../db.js'
import { ModelUser } from './User.js'

// Modelling
export const ModelDriver = sequelize.define('driver', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    carModel: {
        type: DataTypes.STRING
    },
    carYear: {
        type: DataTypes.INTEGER
    },
    passengerQuantity: {
        type: DataTypes.INTEGER
    },
    pricePerPassenger: {
        type: DataTypes.FLOAT
    }
})

ModelDriver.belongsTo(ModelUser, {
    foreignKey: 'idUser'
})