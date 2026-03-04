import { getUsers, createUsers, deleteUser, updateUser } from '../services/users.services.js'

export const reqCreateUser = async (req, res) => {
    const { customer_name, customer_email, customer_address, customer_phone } = req.body
    try {
        const newUsers = await createUsers(customer_name, customer_email, customer_address, customer_phone)
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

export const deleteUsersReq = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteUser(id);
        return res.status(200).json({
            message: "Se eliminó correctamente el user"
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const updateUserReq = async (req, res) => {
    const { id } = req.params;
    const { customer_name, customer_email, customer_address, customer_phone } = req.body;

    try {
        const result = await updateUser(id, customer_name, customer_email, customer_address, customer_phone);
        return res.status(200).json({
            message: "Se ha actualizado el usuario de forma correcta",
            user: result
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

