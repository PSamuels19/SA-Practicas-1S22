import axios from 'axios'
import { ROLES } from "../models/role";

export const checkRolesExisted = (req, res, next) => {
    const { rol } = req.body

    if (!ROLES.includes(rol)) res.status(400).json({ message: `${rol} no existe` })

    next()
}

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const { username, email } = req.body

    const userFounded = await axios.get(`http://localhost:3001/check/email/${email}`)
    console.log(userFounded)
    if (userFounded) return res.status(400).json({ message: 'El usuario ya existe' })
    const emailFounded = await axios.get(`http://localhost:3001/check/username/${username}`)
    console.log(emailFounded)
    if (emailFounded) return res.status(400).json({ message: 'El correo ya existe' })

    next()
}