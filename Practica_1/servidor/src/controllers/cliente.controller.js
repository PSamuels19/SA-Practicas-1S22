import axios from "axios"
import { logger } from "../../config/logger"
import config from "../config"

export const crearPedido = async (req, res) => {
    const { data } = await axios.post(`${config.CLIENTE_URI}/pedido`)
    logger.log('info', `${new Date()} Cliente: Creación de pedido por token ${req.headers.authorization}`)
    res.json(data)
}

export const estadoRestaurante = async (req, res) => {
    const { data } = await axios.get(`${config.CLIENTE_URI}/pedido/1`)
    logger.log('info', `${new Date()} Cliente: Solicitud de información al restaurante por token ${req.headers.authorization}`)
    res.json(data)
}

export const estadoRepartidor = async (req, res) => {
    const { data } = await axios.get(`${config.CLIENTE_URI}/reparto/1`)
    logger.log('info', `${new Date()} Cliente: Solicitud de información al repartidor por token ${req.headers.authorization}`)
    res.json(data)
}