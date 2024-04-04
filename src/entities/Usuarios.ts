import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sharkin } from "./Sharkin";
import { Sharkout } from "./Sharkout";

@Entity('usuarios')
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    nome: string

    @Column({type: 'text'})
    email: string

    @Column({type: 'text'})
    senha: string

    @OneToMany(() => Sharkin, sharkin => sharkin.usuarios)
    sharkin: Sharkin[]

    @OneToMany(() => Sharkout, sharkout => sharkout.usuario)
    sharkout: Sharkout[]
}