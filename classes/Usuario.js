export class Usuario {
    constructor() {
        let _idUsuario
        let _usuario
        let _senha
        let _nome
        let _email
        let _telefones

        this.getIdUsuario = () => _idUsuario
        this.getUsuario = () => _usuario
        this.getSenha = () => _senha
        this.getNome = () => _nome
        this.getEmail = () => _email
        this.getTelefones = () => _telefones

        this.setIdUsuario = (idUsuario) => _idUsuario = idUsuario
        this.setUsuario = (usuario) => _usuario = usuario
        this.setSenha = (senha) => _senha = senha
        this.setNome = (nome) => _nome = nome
        this.setEmail = (email) => _email = email
        this.setTelefones = (telefones) => _telefones = telefones
    }
}