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

    const query = `INSERT INTO juan_lopez.users (customer_name, customer_email, customer_address, customer_phone) VALUES ($1, $2, $3, $4) RETURNING id, name`;
    const values = [customer_name, customer_email, customer_address, customer_phone]

    try {

        const response = await pool.query(query, values);
        if (!response.rows[0]) {
            throw Error("No se ha logrado crear el paciente")
        }
        return response;

    } catch (error) {
        console.error(`error: user not created: ${error}`);
        throw (error);
    }
}



