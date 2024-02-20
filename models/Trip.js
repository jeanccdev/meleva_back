// Imports
import { DataTypes } from 'sequelize'
import sequelize from '../db.js'
import { ModelDriver } from './Driver.js'

// Modelling
export const ModelTrip = sequelize.define('trip', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    totalPrice: {
        type: DataTypes.FLOAT
    },
    departure: {
        type: DataTypes.STRING
    },
    arrival: {
        type: DataTypes.STRING
    }
})

ModelTrip.belongsTo(ModelDriver, {
    foreignKey: 'idDriver'
})