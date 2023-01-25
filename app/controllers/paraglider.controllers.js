import datamapper  from "../models/paraglider.js";

export default{
    getAll : async(_req, res) => {
        const result = await datamapper.findAll();
        const error = { message: 'paraglider not found', statusCode: 404 };
        if (!result) throw error;
        return res.json(result);
    },
    getOne : async(req, res) => {
        const idParaglider = Number(req.params.id)
        const result = await datamapper.findByPk(idParaglider);
        const error = { message: `paraglider ${idParaglider} not found`, statusCode: 404 };
        if (!result) throw error;
        return res.json(result);
    }
};
