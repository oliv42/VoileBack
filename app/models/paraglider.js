import client from '../config/postgres.js'

const datamapper = {
    findAll : async () => {
        const result = await client.query(`SELECT
        paraglider.*,
        array_agg(row(photo_paraglider.photo_1, photo_paraglider.photo_2,photo_paraglider.photo_3, photo_paraglider.photo_4,photo_paraglider.photo_5,photo_paraglider.photo_6)) AS photos
        FROM paraglider
        JOIN photo_paraglider
        ON paraglider.id = photo_paraglider.id_paraglider
        GROUP BY paraglider.id
        `);
        //! Console log a supprimé
        console.log(result)
        return result.rows;
    },

    findByPk : async (idParaglinding) => {
        const result = await client.query(`SELECT paraglider.*,
        array_agg(row(photo_paraglider.photo_1, photo_paraglider.photo_2,photo_paraglider.photo_3, photo_paraglider.photo_4,photo_paraglider.photo_5,photo_paraglider.photo_6)) AS photos
        FROM paraglider
        JOIN photo_paraglider
        ON photo_paraglider.id_paraglider = paraglider.id
        WHERE paraglider.id = ($1)
        GROUP BY paraglider.id`, [idParaglinding]);
        if (result.rowCount === 0) return null;

        return result.rows;
      }
}

export default datamapper;

// SELECT array_agg(table1.nom) FROM table1 JOIN table2 ON table1.id = table2.id;

// `SELECT * FROM paraglider JOIN photo_paraglider ON paraglider.id = id_paraglider`
