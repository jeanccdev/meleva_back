// Imports
import { DataTypes } from 'sequelize'
import sequelize from '../db.js'
import { ModelPassageiro } from './Passageiro.js'
import { ModelTrajeto } from './Trajeto.js'

// Modelling
export const ModelListaPassageiros = sequelize.define('lista_passageiros', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    }
})

ModelListaPassageiros.belongsTo(ModelPassageiro, {
    foreignKey: 'idPassageiro'
})
ModelListaPassageiros.belongsTo(ModelTrajeto, {
    foreignKey: 'idTrajeto'
})