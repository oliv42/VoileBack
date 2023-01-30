import client from '../config/postgres.js'

const datamapper = {
    findAll : async () => {
        const result = await client.query(`SELECT *
        FROM paraglider
        JOIN photo_paraglider ON paraglider.id = id_paraglider
        `);
        console.log(result)
        return result.rows;
    },

    findByPk : async (idParaglinding) => {
        const result = await client.query('SELECT * FROM paraglider WHERE id=($1)', [idParaglinding]);
        if (result.rowCount === 0) return null;

        return result.rows;
      }
}

export default datamapper;

// SELECT array_agg(table1.nom) FROM table1 JOIN table2 ON table1.id = table2.id;

// `SELECT * FROM paraglider JOIN photo_paraglider ON paraglider.id = id_paraglider`
