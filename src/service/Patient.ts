import { PatientORM } from "../entity/Patient";
import { IPatient } from "../interfaces/Patient";
import { PatientRepository } from "../repository/Patient";

export class PatientService {
    private patientRepository: PatientRepository

    constructor() {
        this.patientRepository = new PatientRepository()
    }

    create = async (patient: PatientORM) => {
        try {
            const response = await this.patientRepository.create(patient)

            return {
                message: "top",
                data: response
            }
        } catch (error) {

            if (error.driverError.code === "ER_DATA_TOO_LONG")
                return {
                    message: "tem caractere dms",
                    data: error
                }

            return {
                message: "deu ruim",
                data: error
            }
        }

    }

    getAll = async () => {
        try {
            const response = await this.patientRepository.getAll()

            return {
                message: "top",
                data: response
            }
        } catch (error) {
            return {
                message: "deu ruim",
                data: error
            }
        }

    }
}