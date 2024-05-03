import { Request, Response } from "express";
import { usuariosRepository } from "../repositories/usuariosRepository";

export class UsuariosController{
    async create (req: Request, res: Response){
        const {nome, email, senha} = req.body

        try {
            const newShark = usuariosRepository.create({nome, email, senha})
            await usuariosRepository.save(newShark)

            return res.status(201).json(newShark)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "internal Server Error"})
        }
    }
}