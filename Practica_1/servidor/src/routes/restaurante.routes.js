import { Router } from "express"
import { informarCliente, crearEntrega, recibirPedido } from "../controllers/restaurante.controller"
import { restauranteAccess } from "../middlewares/authAWT"

const router = Router()

router.get(
    '/',
    [restauranteAccess],
    recibirPedido
)
router.put(
    '/restaurante/pedido/:id',
    [restauranteAccess],
    informarCliente
)
router.post(
    '/repartidor/pedido/:id',
    [restauranteAccess],
    crearEntrega
)

export default router