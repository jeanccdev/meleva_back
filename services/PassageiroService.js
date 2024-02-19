import { Passageiro } from '../classes/Passageiro.js'

export class PassageiroService {
    constructor() { }

    buscarPassageiro(id) {
        const passageiro = Passageiro.findByPk(id)
        return motorista
    }
}