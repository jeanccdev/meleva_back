import express from 'express'
import { UserController } from '../controllers/UserController.js'

const router = express.Router()
const userController = new UserController()

router.get('/', userController.getAll)
router.get('/:id', userController.getById)
router.post('/', userController.create)
// router.patch('/:id', userController.updateById)
// router.delete(':id', userController.deleteById)

export default router