import express from 'express'
import { UsuarioController } from '../controllers/UsuarioController.js'

const router = express.Router()
const usuarioController = new UsuarioController()

router.get('/', usuarioController.getAll)
router.get('/:id', usuarioController.getById)
router.post('/', usuarioController.create)
router.patch('/:id', usuarioController.updateById)
router.delete(':id', usuarioController.deleteById)

export default router