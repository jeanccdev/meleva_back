import { Motorista } from '../classes/Motorista.js'

export class MotoristaService {
    constructor() { }

    buscarMotorista(id) {
        const motorista = Motorista.findByPk(id)
        return motorista
    }
}