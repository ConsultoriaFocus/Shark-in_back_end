import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "./Usuarios";

@Entity('sharkin')
export class Sharkin{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type: 'date'})
    dia: Date

    @Column({type: 'text'})
    horario: string

    @ManyToOne(() => Usuarios, usuarios => usuarios.sharkin)
    @JoinColumn({name: 'id'})
    usuarios: Usuarios
}