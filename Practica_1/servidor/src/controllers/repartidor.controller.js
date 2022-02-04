import axios from 'axios'
import config from '../config'

export const recibirPedido = async (req, res) => {
    const { data } = await axios.get(config.REPARTIDOR_URI)
    res.json(data)
}

export const informarCliente = async (req, res) => {
    const { data } = await axios.get(config.REPARTIDOR_URI)
    res.json(data)
}

export const marcarEntrega = async (req, res) => {
    const { data } = await axios.get(config.REPARTIDOR_URI)
    res.json(data)
}