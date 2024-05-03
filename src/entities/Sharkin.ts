import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuarios";

@Entity('sharkin')
export class Sharkin {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date' })
    dia: Date

    @Column({ type: 'text' })
    horario: string

    @ManyToOne(() => Usuario, (usuario) => usuario.sharkin)
    @JoinColumn({ name: 'usuario_id' }) // Usando uma coluna diferente para a chave estrangeira
    usuario: Usuario // Renomeado para singular para refletir que é uma única instância de Usuario
}