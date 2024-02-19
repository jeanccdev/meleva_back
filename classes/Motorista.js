import { Usuario } from "./Usuario.js"

export class Motorista extends Usuario {
    constructor() {
        super()
        let _usuario
        let _idMotorista
        let _modeloCarro
        let _anoCarro
        let _quantidadePassageiros
        let _valorPorPassageiro

        this.getUsuario = () => _usuario
        this.getIdMotorista = () => _idMotorista
        this.getModeloCarro = () => _modeloCarro
        this.getAnoCarro = () => _anoCarro
        this.getQuantidadePassageiros = () => _quantidadePassageiros
        this.getValorPorPassageiro = () => _valorPorPassageiro

        this.setUsuario = (usuario) => _usuario = usuario
        this.setIdMotorista = (idMotorista) => _idMotorista = idMotorista
        this.setModeloCarro = (modeloCarro) => _modeloCarro = modeloCarro
        this.setAnoCarro = (anoCarro) => _anoCarro = anoCarro
        this.setQuantidadePassageiros = (quantidadePassageiros) => _quantidadePassageiros = quantidadePassageiros
        this.setValorPorPassageiro = (valorPorPassageiro) => _valorPorPassageiro = valorPorPassageiro
    }

    // cadastrarMotorista(obj) {
    //     const motorista = new Motorista()
    //     motorista.setIdMotorista = obj.idMotorista
    //     motorista.setModeloCarro = obj.modeloCarro
    //     motorista.setAnoCarro = obj.anoCarro
    //     motorista.setQuantidadePassageiros = obj.quantidadePassageiros
    //     motorista.setValorPorPassageiro = obj.valorPorPassageiro
    // }
}