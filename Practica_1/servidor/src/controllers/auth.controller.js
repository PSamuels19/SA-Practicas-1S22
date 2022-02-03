import axios from 'axios'
import config from '../config'

export const signIn = async (req, res) => {
    const url = `${config.SESION_URI}/signin`
    const { data } = await axios.post(url, req.body)

    res.json(data)
}
