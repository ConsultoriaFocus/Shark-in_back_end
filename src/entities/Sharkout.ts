import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuarios";

@Entity('sharkout')
export class Sharkout{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'date'})
    data: Date

    @Column({type: 'text'})
    horario: string

    @ManyToOne(() => Usuario)
    @JoinTable()
    usuario: Usuario
}