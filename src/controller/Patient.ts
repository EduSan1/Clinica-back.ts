import { PatientService } from "../service/Patient";
import { Request, Response } from "express"
import { PatientORM } from "../entity/Patient";

export class PatientController {
    private service: PatientService

    constructor() {
        this.service = new PatientService()
    }

    create = async (req: Request, res: Response) => {
        await this.service.create(req.body).then((response) => {
            res.json(response)
        })
    }

    getAll = async (req: Request, res: Response) => {
        await this.service.getAll().then((response) => {
            res.json(response)
        })
    }
}