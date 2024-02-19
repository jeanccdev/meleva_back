import express from 'express'
import { MotoristaController } from '../controllers/MotoristaController.js'

const router = express.Router()
const motoristaController = new MotoristaController()

router.get('/', motoristaController.getAll)
router.get('/:id', motoristaController.getById)
router.post('/', motoristaController.create)
router.patch('/:id', motoristaController.updateById)
router.delete(':id', motoristaController.deleteById)

export default router