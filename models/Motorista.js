// Imports
import { DataTypes } from 'sequelize'
import sequelize from '../db.js'
import { ModelUsuario } from './Usuario.js'

// Modelling
export const ModelMotorista = sequelize.define('motorista', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    modeloCarro: {
        type: DataTypes.STRING
    },
    anoCarro: {
        type: DataTypes.INTEGER
    },
    quantidadePassageiros: {
        type: DataTypes.INTEGER
    },
    valorPorPassageiro: {
        type: DataTypes.FLOAT
    }
})

ModelMotorista.belongsTo(ModelUsuario, {
    foreignKey: 'idUsuario'
})