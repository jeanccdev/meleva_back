import { Usuario } from './Usuario.js'

export class Passageiro extends Usuario {
    constructor() {
        super()
        let _idPassageiro
        let _pontoPartida
        let _pontoChegada

        this.getIdPassageiro = () => _idPassageiro
        this.getPontoPartida = () => _pontoPartida
        this.getPontoChegada = () => _pontoChegada

        this.setIdPassageiro = (idPassageiro) => _idPassageiro = idPassageiro
        this.setPontoPartida = (pontoPartida) => _pontoPartida = pontoPartida
        this.setPontoChegada = (pontoChegada) => _pontoChegada = pontoChegada
    }

    cadastrarPassageiro(obj) {
        const passageiro = new Passageiro()
        passageiro.setIdPassageiro = obj.idPassageiro
        passageiro.setPontoPartida = obj.pontoPartida
        passageiro.setPontoChegada = obj.pontoChegada
    }
}