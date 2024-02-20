import { UserService } from "../services/UserService.js"

export class UserController {
    constructor() { }

    getAll(req, res) {
        async function getAll() {
            try {
                const userService = new UserService()
                const users = await userService.getAll()
                res.send(users)
            } catch (error) {
                res.send(error.message)
            }
        }
        getAll()
    }

    getById(req, res) {
        async function getById() {
            try {
                const { id } = req.params
                const userService = new UserService()
                const user = await userService.getById(id)
                res.send(user)
            } catch (error) {
                res.send(error.message)
            }
        }
        getById()
    }

    create(req, res) {
        async function create() {
            try {
                const data = req.body
                const userService = new UserService()
                const user = await userService.create(data)
                res.send(user)
            } catch (error) {
                res.send(error.message)
            }
        }
        create()
    }

    updateById(req, res) {
        async function updateById() {
            try {
                const { id } = req.params
                const data = req.body
                const userService = new UserService()
                const user = await userService.updateById(id, data)
                res.send(user)
            } catch (error) {
                res.send(error.message)
            }
        }
        updateById()
    }

    deleteById(req, res) {
        async function deleteById() {
            try {
                const { id } = req.params
                const userService = new UserService()
                const user = await userService.deleteById(id)
                res.send(user)
            } catch (error) {
                res.send(error.message)
            }
        }
        deleteById()
    }
}