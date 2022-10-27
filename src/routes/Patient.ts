import { Router } from "express"
import { PatientController } from "../controller/Patient"

const patientRoute = Router()
const patientController = new PatientController()

patientRoute.post("/", patientController.create)
patientRoute.get("/", patientController.getAll)


export default patientRoute