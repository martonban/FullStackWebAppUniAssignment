import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import {VisitDTO, UserDTO} from '../../../models';
import { User } from './User';

@Entity()
export class Visit implements VisitDTO {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.allVisits, {eager: true})
    patient: UserDTO;

    @Column()
    diagnosis: string;

    @Column()
    medicine: string;
    
    @Column()
    results: string;
} 