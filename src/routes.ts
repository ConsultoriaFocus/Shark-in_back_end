import { Router } from 'express'
import { SharkinController } from './controllers/SharkinController'
import { SharkoutController } from './controllers/SharkoutController'

const routes = Router()

routes.post('/sharkin', new SharkinController().create)
routes.post('/sharkout', new SharkoutController().create)

export default routes