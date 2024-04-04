import { AppDataSource } from "../data-source";
import { Sharkout } from "../entities/Sharkout";

export const sharkoutRepository = AppDataSource.getRepository(Sharkout)