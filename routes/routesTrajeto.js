import express from 'express'
import { TrajetoController } from '../controllers/TrajetoController.js'

const router = express.Router()
const trajetoController = new TrajetoController()

router.get('/', trajetoController.getAll)
router.get('/:id', trajetoController.getById)
router.post('/', trajetoController.create)
router.patch('/:id', trajetoController.updateById)
router.delete(':id', trajetoController.deleteById)

export default router