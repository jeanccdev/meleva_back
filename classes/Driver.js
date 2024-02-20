import { User } from "./User.js"

export class Driver extends User {
    constructor() {
        super()
        let _user
        let _driverId
        let _carModel
        let _carYear
        let _passengerQuantity
        let _pricePerPassenger

        this.getUser = () => _user
        this.getDriverId = () => _driverId
        this.getCarModel = () => _carModel
        this.getCarYear = () => _carYear
        this.getPassengerQuantity = () => _passengerQuantity
        this.getPricePerPassenger = () => _pricePerPassenger

        this.setUser = (user) => _user = user
        this.setDriverId = (driverId) => _driverId = driverId
        this.setCarModel = (carModel) => _carModel = carModel
        this.setCarYear = (carYear) => _carYear = carYear
        this.setPassengerQuantity = (passengerQuantity) => _passengerQuantity = passengerQuantity
        this.setPricePerPassenger = (pricePerPassenger) => _pricePerPassenger = pricePerPassenger
    }
}