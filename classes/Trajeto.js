export class Trajeto {
    constructor() {
        let _idTrajeto
        let _valorTotal
        let _pontoPartida
        let _pontoChegada
        let _motorista
        let _passageiros

        this.getIdTrajeto = () => _idTrajeto
        this.getValorTotal = () => _valorTotal
        this.getPontoPartida = () => _pontoPartida
        this.getPontoChegada = () => _pontoChegada
        this.getMotorista = () => _motorista
        this.getPassageiros = () => _passageiros

        this.setIdTrajeto = (idTrajeto) => _idTrajeto = idTrajeto
        this.setValorTotal = (valorTotal) => _valorTotal = valorTotal
        this.setPontoPartida = (pontoPartida) => _pontoPartida = pontoPartida
        this.setPontoChegada = (pontoChegada) => _pontoChegada = pontoChegada
        this.setMotorista = (motorista) => _motorista = motorista
        this.setPassageiros = (passageiros) => _passageiros = passageiros
    }

    cadastrarTrajeto(obj) {
        const trajeto = new Trajeto()
        trajeto.setIdTrajeto = obj.idTrajeto
        trajeto.setValorTotal = obj.valorTotal
        trajeto.setPontoPartida = obj.pontoPartida
        trajeto.setPontoChegada = obj.pontoChegada
        trajeto.setMotorista = obj.motorista
        trajeto.setPassageiros = obj.passageiros
    }
}