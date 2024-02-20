import { DriverService } from "../services/DriverService.js"

export class DriverController {
    driverService

    constructor() { 
        this.driverService = new DriverService()
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