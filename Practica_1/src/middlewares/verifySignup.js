import { ROLES } from "../models/role";
import user from "../models/user";

export const checkRolesExisted = (req, res, next) => {
    const { roles } = req.body

    if (roles) {
        roles.forEach(role => {
            console.log(`[${ROLES}] includes ${role}: `, ROLES.includes(role))
            if (!ROLES.includes(role)) {
                res.status(400).json({ message: `${role} no existe` })
            }
        });
    }
    next()
}

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const { username, email } = req.body

    const userFounded = await user.findOne({ username })
    if (userFounded) return res.status(400).json({ message: 'El usuario ya existe' })

    const emailFounded = await user.findOne({ email })
    if (emailFounded) return res.status(400).json({ message: 'El correo ya existe' })

    next()
}