export default{
    getOne : async(req, res) => {
        const idParaglinding = Number(req.params.id)
        return res.send(`Controller2 paradilinding getone ${idParaglinding}`)
    },
    getAll : async(_req, res) => {
        console.log("enculer")
        return res.send('controller2 paradilinding getAll')
    }
};
