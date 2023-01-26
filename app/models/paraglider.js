import client from '../config/postgres.js'

const datamapper = {
    findAll : async () => {
        const result = await client.query(`SELECT * FROM paraglider`);
        return result.rows;
    },

    findByPk : async (idParaglinding) => {
        const result = await client.query('SELECT * FROM paraglider WHERE id=($1)', [idParaglinding]);
        if (result.rowCount === 0) return null;

        return result.rows;
      }
}

export default datamapper;
