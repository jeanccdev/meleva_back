import { Trajeto } from '../classes/Trajeto.js'

export class TrajetoService {
    constructor() { }

    buscarTrajeto(id) {
        const trajeto = Trajeto.findByPk(id)
        return trajeto
    }
}