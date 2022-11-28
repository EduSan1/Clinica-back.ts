import { AppDataSource } from "./data-source"
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"
import router from "./routes"

AppDataSource.initialize().then(async () => {
    require('dotenv').config()

    const app = express()

    app.use(cors())
    app.use(bodyParser.json())
    app.use("/", router)

    app.listen(process.env.PORT)

    console.log(`Server has started on port ${process.env.PORT}. Open http://localhost:${process.env.PORT}`)

}).catch(error => console.log(error))
