import { Router } from "express";
import { crearPedido, estadoRepartidor, estadoRestaurante } from "../controllers/cliente.controller";
import { clienteAccess } from '../middlewares/authAWT'

const router = Router()

router.post(
    '/',
    [clienteAccess],
    crearPedido
)
router.post(
    '/restaurante/pedido/:id',
    [clienteAccess],
    estadoRestaurante
)
router.post(
    '/repartidor/pedido/:id',
    [clienteAccess],
    estadoRepartidor
)

export default router