import { User } from './User.js'

export class Passenger extends User {
    constructor() {
        super()
        let _passengerId
        let _departure
        let _arrival

        this.getPassengerId = () => _passengerId
        this.getDeparture = () => _departure
        this.getArrival = () => _arrival

        this.setPassengerId = (passengerId) => _passengerId = passengerId
        this.setDeparture = (departure) => _departure = departure
        this.setArrival = (arrival) => _arrival = arrival
    }
}