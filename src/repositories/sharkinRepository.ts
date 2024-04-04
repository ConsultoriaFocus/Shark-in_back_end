import { AppDataSource } from "../data-source";
import { Sharkin } from "../entities/Sharkin";

export const sharkinRepository = AppDataSource.getRepository(Sharkin)
