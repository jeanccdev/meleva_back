import { ModelUser } from '../models/User.js'

export class UserService {
    constructor() { }

    getAll() {
        async function loadAllUsers() {
            const users = await ModelUser.findAll()
            return users
        }
        return loadAllUsers()
    }

    getById(id) {
        async function loadOneUser() {
            const user = await ModelUser.findByPk(id)
            return user
        }
        return loadOneUser()
    }

    create(obj) {
        async function createUser() {
            const newUser = await ModelUser.create(obj)
            return newUser
        }
        return createUser()
    }

    updateById(id, data) {
        async function updateOneUser() {
            const user = await ModelUser.findByPk(id)
            user.set(data)
            const updatedUser = await user.save()
            return updatedUser
        }
        return updateOneUser()
    }

    deleteById(id) {
        async function deleteOneUser() {
            const deletedUser = await ModelUser.destroy({
                where: {
                    id: id
                }
            })
            return deletedUser
        }
        return deleteOneUser()
    }
}