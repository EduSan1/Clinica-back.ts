import { Router, Request, Response } from "express"
import patientRoute from "./routes/Patient"

const router = Router()

router.get("/", (req: Request, res: Response) => {
    return res.json("clinic api!")
})

router.use("/patient", patientRoute)


export default router