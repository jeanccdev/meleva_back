import { Usuario } from '../classes/Usuario.js'

export class UsuarioService {
    constructor() { }

    buscarUsuario(id) {
        const usuario = Usuario.findByPk(id)
        return usuario
    }
}