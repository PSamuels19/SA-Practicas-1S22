import { Router } from "express";
import { crearPedido, estadoRepartidor, estadoRestaurante } from "../controllers/cliente.controller";
import { verifyToken } from '../middlewares/authAWT'

const router = Router()

router.post(
    '/',
    [verifyToken],
    crearPedido
)
router.post(
    '/restaurante/pedido/:id',
    [verifyToken],
    estadoRestaurante
)
router.post(
    '/repartidor/pedido/:id',
    [verifyToken],
    estadoRepartidor
)

export default router