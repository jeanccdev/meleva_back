import express from 'express'
import { DriverController } from '../controllers/DriverController.js'

const router = express.Router()
const driverController = new DriverController()

router.get('/', driverController.getAll)
router.get('/:id', driverController.getById)
router.post('/', driverController.create)
router.patch('/:id', driverController.updateById)
router.delete(':id', driverController.deleteById)

export default router