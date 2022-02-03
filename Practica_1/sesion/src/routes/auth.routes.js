import { Router } from "express";
import * as authControl from '../controller/auth.controller'

const router = Router()

router.get('/', (req, res) => {
    res.json({ message: 'Sesion service' })
})
router.post('/signin', authControl.signIn)
router.post('/verifyToken', authControl.verifyToken)

export default router