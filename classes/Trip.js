export class Trip {
    constructor() {
        let _tripId
        let _totalValue
        let _departurePoint
        let _arrivalPoint
        let _driver
        let _passengers

        this.getTripId = () => _tripId
        this.getTotalValue = () => _totalValue
        this.getDeparturePoint = () => _departurePoint
        this.getArrivalPoint = () => _arrivalPoint
        this.getDriver = () => _driver
        this.getPassengers = () => _passengers

        this.setTripId = (tripId) => _tripId = tripId
        this.setTotalValue = (totalValue) => _totalValue = totalValue
        this.setDeparturePoint = (departurePoint) => _departurePoint = departurePoint
        this.setArrivalPoint = (arrivalPoint) => _arrivalPoint = arrivalPoint
        this.setDriver = (driver) => _driver = driver
        this.setPassengers = (passengers) => _passengers = passengers
    }

    registerTrip(obj) {
        const trip = new Trip()
        trip.setTripId = obj.tripId
        trip.setTotalValue = obj.totalValue
        trip.setDeparturePoint = obj.departurePoint
        trip.setArrivalPoint = obj.arrivalPoint
        trip.setDriver = obj.driver
        trip.setPassengers = obj.passengers
    }
}
