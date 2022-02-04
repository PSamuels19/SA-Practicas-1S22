import axios from 'axios'
import jwt from 'jsonwebtoken'
import config from '../config'

const API_URI = 'http://localhost:3001'

export const signIn = async (req, res) => {
    const { email, password } = req.body

    const url = `${API_URI}/login/${email}/${password}`
    const { data } = await axios.get(url)

    if (data.lenght === 0) return res.status(400).json({ token: null, message: 'Usuario no encontrado' })

    const token = jwt.sign({ id: data[0].id }, config.SECRET, { expiresIn: '1h' })

    res.status(200).json({ token, message: 'ok' })
}

export const verifyToken = async (req, res) => {
    const { token } = req.body

    try {
        const decode = jwt.verify(token, config.SECRET)
        const userId = decode.id

        const { data } = await axios.get(`${API_URI}/usuario/${userId}`)
        if (data.lenght === 0)
            return res.status(404).json({ message: 'No se encontró el usuario' })

        res.status(200).json(data[0])
    } catch (error) {
        res.status(401).json({ message: 'No autorizado' })
    }
}

export const getCurrentUser = async (req, res) => {
    const { token } = req.body

    try {
        const decode = jwt.verify(token, config.SECRET)
        const userId = decode.id

        const { data } = await axios.get(`${API_URI}/usuario/${userId}`)
        if (data.lenght === 0)
            return res.status(404).json({ message: 'No se encontró el usuario' })

        res.status(200).json(data[0])
    } catch (error) {
        res.status(401).json({ message: 'No autorizado' })
    }
}