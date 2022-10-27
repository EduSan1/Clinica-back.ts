import "reflect-metadata"
import { DataSource } from "typeorm"
import { PatientORM } from "./entity/Patient"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "db_clinic",
    synchronize: true,
    logging: false,
    entities: [PatientORM],
    migrations: [],
    subscribers: [],
})
