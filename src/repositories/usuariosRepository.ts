import { AppDataSource } from "../data-source";
import { Usuario } from "../entities/Usuarios";

export const usuariosRepository = AppDataSource.getRepository(Usuario)