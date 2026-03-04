import { pool } from '../config/dbconfig.js'

export const getUsers = async () => {
    try{
        const res = await pool.query('SELECT * FROM juan_lopez.users;')
        return res.rows
    }catch(error){
        console.error('Error: Could not access the users: ', error);
        throw error;
    }
}

export const createUsers = async (customer_name, customer_email, customer_address, customer_phone) => {

    const query = `
    INSERT INTO juan_lopez.users 
    (customer_name, customer_email, customer_address, customer_phone) VALUES ($1, $2, $3, $4) RETURNING *`;

    const values = [customer_name, customer_email, customer_address, customer_phone];

    try {
        const response = await pool.query(query, values);
        return response.rows[0];
    } catch (error) {
        console.error(`error: user not created: ${error}`);
        throw error;
    }
}

export const deleteUser = async (id) => {
    const query = `delete from juan_lopez.users where id_user = $1`
    const values = [id]

    try {
        const response = await pool.query(query, values)

        if (response.rowCount === 0) {
        throw new Error('No se ha logrado eliminar el paciente')
    }
    }catch (error) {
        console.error(`No se ha podido eliminar el paciente: ${error}`)
        throw error;
    }
}

export const updateUser = async (id_user, customer_name, customer_email, customer_address, customer_phone) => {
    const query = `
    UPDATE juan_lopez.users SET 
        customer_name = $1,
        customer_email = $2,
        customer_address = $3,
        customer_phone = $4
    WHERE id_user = $5
    RETURNING *`;
    const values = [customer_name, customer_email, customer_address, customer_phone, id_user];
    try {
        const response = await pool.query(query, values);

        if (!response.rows[0]) {
        throw new Error("El usuario no se ha podido actualizar");
        }

        return response.rows[0];

    } catch (error) {
        console.error(`Error updating user: ${error}`);
        throw error;
    }
};


