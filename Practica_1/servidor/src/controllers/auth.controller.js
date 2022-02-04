import axios from 'axios'
import { logger } from '../../config/logger'
import config from '../config'

export const signIn = async (req, res) => {
    const url = `${config.SESION_URI}/signin`
    const { data } = await axios.post(url, req.body)
    logger.log('info', `${new Date()} Sesion: Inicio de sesión de token ${req.headers.authorization}`)
    res.json(data)
}
