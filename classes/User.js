export class User {
    constructor() {
        let _userId
        let _username
        let _password
        let _name
        let _email
        let _phones

        this.getUserId = () => _userId
        this.getUsername = () => _username
        this.getPassword = () => _password
        this.getName = () => _name
        this.getEmail = () => _email
        this.getPhones = () => _phones

        this.setUserId = (userId) => _userId = userId
        this.setUsername = (username) => _username = username
        this.setPassword = (password) => _password = password
        this.setName = (name) => _name = name
        this.setEmail = (email) => _email = email
        this.setPhones = (phones) => _phones = phones
    }
}