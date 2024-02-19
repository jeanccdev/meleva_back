// Imports
import { DataTypes } from 'sequelize'
import sequelize from '../db.js'
import { ModelUsuario } from './Usuario.js'

// Modelling
export const ModelPassageiro = sequelize.define('passageiro', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    usuario: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    },
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefones: {
        type: DataTypes.STRING
    },
    pontoPartida: {
        type: DataTypes.STRING
    },
    pontoChegada: {
        type: DataTypes.STRING
    }
})

ModelPassageiro.belongsTo(ModelUsuario, {
    foreignKey: 'idUsuario'
})