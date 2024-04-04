import { Request, Response } from "express";
import { sharkoutRepository } from "../repositories/sharkoutRepository";

export class SharkoutController{
    async create (req: Request, res: Response){
        const {data, horario} = req.body

        try {
            const newSharkout = sharkoutRepository.create({data, horario})
            await sharkoutRepository.save(newSharkout)

            return res.status(201).json(newSharkout)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "internal Server Error"})
        }
    }
}