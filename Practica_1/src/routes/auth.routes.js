import { Router } from "express";
import * as authControl from '../controllers/auth.controller'
import { checkRolesExisted, checkDuplicateUsernameOrEmail } from '../middlewares/verifySignup'

const router = Router()

router.get('', (req, res) => {
    res.json({
        login: '/signin',
        logup: '/signup'
    })
})
router.post('/signin', authControl.signIn)
router.post('/signup', [checkRolesExisted, checkDuplicateUsernameOrEmail], authControl.signUp)

export default router;