import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { UserDTO } from "../../../models"
import { Visit } from "./Visit"

@Entity()
export class User implements UserDTO {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    birthDay: Date

    @Column()
    tajNumber: number

    @OneToMany(() => Visit, (visit) => visit.patient)
    allVisits: Visit[];

}
