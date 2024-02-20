import express from 'express'
import { TripController } from '../controllers/TripController.js'

const router = express.Router()
const tripController = new TripController()

router.get('/', tripController.getAll)
router.get('/:id', tripController.getById)
router.post('/', tripController.create)
router.patch('/:id', tripController.updateById)
router.delete(':id', tripController.deleteById)

export default router