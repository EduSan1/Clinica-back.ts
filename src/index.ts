import { AppDataSource } from "./data-source"
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"
import router from "./routes"

AppDataSource.initialize().then(async () => {

    const app = express()

    app.use(cors())
    app.use(bodyParser.json())
    app.use("/", router)

    app.listen(3001)

    console.log(`Server has started on port 3001. Open http://localhost:3001`)

}).catch(error => console.log(error))
