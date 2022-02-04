import { Router } from "express"
import { informarCliente, marcarEntrega, recibirPedido } from "../controllers/repartidor.controller"
import { repartidorAccess } from "../middlewares/authAWT"

const router = Router()

router.get(
    '/',
    [repartidorAccess],
    recibirPedido
)
router.put(
    '/restaurante/pedido/:id',
    [repartidorAccess],
    informarCliente
)
router.put(
    '/repartidor/pedido/:id',
    [repartidorAccess],
    marcarEntrega
)

export default router