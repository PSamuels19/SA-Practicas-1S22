import jwt from 'jsonwebtoken'
import user from '../models/user'
import role from '../models/role'
import config from '../config'

export const signIn = async (req, res) => {
    const { email, comparePassword } = req.body

    const userFounded = await user.findOne({ email: email }).populate('roles')
    if (!userFounded) return res.status(400).json({ token: null, message: 'Usuario no encontrado' })

    const passMatched = await user.comparePassword(comparePassword, userFounded.password)
    if (!passMatched) return res.status(401).json({ token: null, message: 'Contraseña incorrecta' })

    const token = jwt.sign({ id: userFounded._id }, config.SECRET, { expiresIn: '1h' })

    res.json({ token })
}

export const signUp = async (req, res) => {
    const { username, email, password, roles } = req.body

    const newUser = new user({
        username,
        email,
        password: user.encryptPassword(password)
    })

    if (roles) {
        const rolesFound = await role.find({ name: { $in: roles } })
        newUser.roles = rolesFound.map(role => role._id)
    } else {
        const roleFound = await role.findOne({ name: 'user' })
        newUser.roles = [roleFound._id]
    }

    const savedUser = await newUser.save()

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, { expiresIn: '1h' })

    res.status(200).json({ token })
}