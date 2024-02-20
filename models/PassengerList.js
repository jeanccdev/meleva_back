// Imports
import { DataTypes } from 'sequelize'
import sequelize from '../db.js'
import { ModelPassenger } from './Passenger.js'
import { ModelTrack } from './Track.js'

// Modelling
export const ModelPassengerList = sequelize.define('passenger_list', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    }
})

ModelPassengerList.belongsTo(ModelPassenger, {
    foreignKey: 'idPassenger'
})
ModelPassengerList.belongsTo(ModelTrack, {
    foreignKey: 'idTrack'
})