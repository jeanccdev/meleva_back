import express from 'express'
import { PassengerController } from '../controllers/PassengerController.js'

const router = express.Router()
const passengerController = new PassengerController()

router.get('/', passengerController.getAll)
router.get('/:id', passengerController.getById)
router.post('/', passengerController.create)
router.patch('/:id', passengerController.updateById)
router.delete(':id', passengerController.deleteById)

export default router