import { TripService } from '../services/TripService.js'

export class TripController {
    tripService

    constructor() {
        this.tripService = new TripService()
    }

    getAll(req, res) {

    }

    getById(req, res) {

    }

    create(req, res) {

    }

    updateById(req, res) {

    }

    deleteById(req, res) {

    }
}