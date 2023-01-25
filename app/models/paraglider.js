import client from '../config/postgres.js'

const datamapper = {
    findAll : async () => {
        const result = await client.query(`SELECT paraglider.*, maker.name AS maker_name FROM paraglider JOIN maker ON "idMaker"=maker.id`);
        return result.rows;
    },

    findByPk : async (idParaglinding) => {
        const result = await client.query('SELECT * FROM "paraglider" WHERE id=($1)', [idParaglinding]);
        if (result.rowCount === 0) return null;

        return result.rows;
      }
}

export default datamapper;


// 'SELECT "paraglider.*, "maker.is" AS "maker_id", "maker.name" AS "maker_name"  FROM "paraglider" JOIN "maker" ON "paraglider.idMaker"="maker.id"'
// 'SELECT *, "maker.is" AS "maker_id", "maker.name" AS "maker_name"  FROM "paraglider" JOIN "maker" ON "paraglider.idMaker"="maker.id"'
// 'SELECT "paraglider.*", "maker.id" AS "maker_id", "maker.name" AS "maker_name" FROM "paraglider" JOIN "maker" ON "paraglider.idMaker"="maker.id"'
