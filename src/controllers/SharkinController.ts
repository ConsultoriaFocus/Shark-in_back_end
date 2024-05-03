import {Request, Response} from 'express'
import { sharkinRepository } from '../repositories/sharkinRepository'

export class SharkinController {
    
    async create(req: Request, res: Response){
        const {dia, horario, usuarioId} = req.body
        
        if(!dia || !horario || !usuarioId){
            return res.status(400).json({message: "O horário é obrigatório"})
        }

        try {
            const newSharkin = sharkinRepository.create({ dia, horario, usuario: { id: usuarioId } })

            await sharkinRepository.save(newSharkin)

            return res.status(201).json(newSharkin) 
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }
}