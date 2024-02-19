import express from 'express'
import { PassageiroController } from '../controllers/PassageiroController.js'

const router = express.Router()
const passageiroController = new PassageiroController()

router.get('/', passageiroController.getAll)
router.get('/:id', passageiroController.getById)
router.post('/', passageiroController.create)
router.patch('/:id', passageiroController.updateById)
router.delete(':id', passageiroController.deleteById)

export default router