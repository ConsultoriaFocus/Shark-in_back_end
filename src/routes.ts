import { Router } from 'express'
import { SharkinController } from './controllers/SharkinController'
import { SharkoutController } from './controllers/SharkoutController'
import { UsuariosController } from './controllers/UsuariosController'

const routes = Router()

routes.post('/sharkin', new SharkinController().create)
routes.post('/sharkout', new SharkoutController().create)
routes.post('/usuario', new UsuariosController().create)

export default routes