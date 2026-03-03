import { createUser , getUsers } from '../services/users.services.js'

export const reqCreateUser = async (req, res) => {
    const { customer_name, customer_email, customer_address, customer_phone } = req.body
    try {
        const newUsers = await createUser(customer_name, customer_email, customer_address, customer_phone)
        return res.status(201).json({
            message: 'The user was created correctly.'
        })
    } catch (error) {
        console.error('Error : not was created the new user', error)
        res.status(500).json({ error: error.message });
    }
};

export const getUsersrReq = async (req, res) => {
    try {
        const data = await getUsers()
        res.json(data)

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener preguntas' })
    }
}

