import datamapper  from "../models/paraglinding.js";

export default{
    getAll : async(_req, res) => {
        //todo supprimer ce commentaire test
        console.log("le getALL")
        console.log(typeof(datamapper))
        const result = await datamapper.findAll();
        const error = { message: 'paraglinding not found', statusCode: 404 };
        if (!result) throw error;
        return res.json(result);
    },
    getOne : async(req, res) => {
        const idParaglinding = Number(req.params.id)
        //todo supprimer ce commentaire test
        console.log(`paradilinding getone ${idParaglinding}`)
        const result = await datamapper.findByPk(idParaglinding);
        const error = { message: `paraglinding ${idParaglinding} not found`, statusCode: 404 };
        if (!result) throw error;
        return res.json(result);
    }
};
