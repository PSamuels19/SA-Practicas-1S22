import { Router } from "express";
import * as authControl from '../controllers/auth.controller'

const router = Router()

router.get('/', (req, res) => {
    res.json({
        login: 'api/auth/signin',
        logup: 'api/auth/signup'
    })
})
router.post('/signin', authControl.signIn)

export default router;