import { pool } from '../config/dbconfig.js'



export const createPatient = async (customer_name, customer_email, customer_address, customer_phon) => {

    const query = `INSERT INTO test.patient (customer_name, customer_email, customer_address, customer_phon) VALUES ($1, $2, $3, $4) RETURNING id, name`;
    const values = [customer_name, customer_email, customer_address, customer_phon]

    try {

        const response = await pool.query(query, values);
        if (!response.rows[0]) {
            throw Error("No se ha logrado crear el paciente")
        }
        return response;

    } catch (error) {
        console.error(`No se ha podido crear el paciente: ${error}`);
        throw (error);
    }

}