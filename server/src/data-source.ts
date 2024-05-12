import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Visit } from "./entity/Visit"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "hospital",
    synchronize: true,
    logging: false,
    entities: [User, Visit],
    migrations: [],
    subscribers: [],
})
