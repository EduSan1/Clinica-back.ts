import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { PatientORM } from "../entity/Patient";

export class PatientRepository {
    private repository: Repository<PatientORM>

    constructor() {
        this.repository = AppDataSource.getRepository(PatientORM)
    }

    create = async (patient: PatientORM) => {
        return await this.repository.save(patient)
    }

    getAll = async () => {
        return await this.repository.find()
    }
}