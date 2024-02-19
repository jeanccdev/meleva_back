// Imports
import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

// Modelling
export const ModelUsuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefones: {
        type: DataTypes.STRING
    }
})