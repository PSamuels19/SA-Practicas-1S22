import axios from 'axios'
import { logger } from '../../config/logger'
import config from '../config'

export const recibirPedido = async (req, res) => {
    const { data } = await axios.get(config.REPARTIDOR_URI)
    logger.log('info', `${new Date()} Repartidor: Recepción de pedido del restaurante por token ${req.headers.authorization}`)
    res.json(data)
}

export const informarCliente = async (req, res) => {
    const { data } = await axios.get(config.REPARTIDOR_URI)
    logger.log('info', `${new Date()} Repartidor: Informar del pedido al cliente por token ${req.headers.authorization}`)
    res.json(data)
}

export const marcarEntrega = async (req, res) => {
    const { data } = await axios.get(config.REPARTIDOR_URI)
    logger.log('info', `${new Date()} Repartidor: Marcar pedido como entregado por token ${req.headers.authorization}`)
    res.json(data)
}