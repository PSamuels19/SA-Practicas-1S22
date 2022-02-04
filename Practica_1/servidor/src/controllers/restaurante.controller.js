import axios from 'axios'
import { logger } from '../../config/logger'
import config from '../config'

export const recibirPedido = async (req, res) => {
    const { data } = await axios.get(config.RESTAURENTE_URI)
    logger.log('info', `${new Date()} Restaurante: Recepción de pedido del cliente por token ${req.headers.authorization}`)
    res.json(data)
}

export const informarCliente = async (req, res) => {
    const { data } = await axios.get(config.RESTAURENTE_URI)
    logger.log('info', `${new Date()} Restaurante: Informar de pedido al cliente por token ${req.headers.authorization}`)
    res.json(data)
}

export const crearEntrega = async (req, res) => {
    const { data } = await axios.get(config.RESTAURENTE_URI)
    logger.log('info', `${new Date()} Restaurante: Crear entrega de pedido por token ${req.headers.authorization}`)
    res.json(data)
}