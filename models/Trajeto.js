// Imports
import { DataTypes } from 'sequelize'
import sequelize from '../db.js'
import { ModelMotorista } from './Motorista.js'

// Modelling
export const ModelTrajeto = sequelize.define('trajeto', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    valorTotal: {
        type: DataTypes.FLOAT
    },
    pontoPartida: {
        type: DataTypes.STRING
    },
    pontoChegada: {
        type: DataTypes.STRING
    }
})

ModelTrajeto.belongsTo(ModelMotorista, {
    foreignKey: 'idMotorista'
})