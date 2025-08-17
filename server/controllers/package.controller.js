import fetchPackage from "../models/package.model.js";

export default async function getPackage(req,res)
{
    const {type,id} = req.params;

    try {
        const result = await fetchPackage(type,id);
        res.json(result);
    } catch (error) {
        console.log("Error In Getting Package Data From Model : "+error);
    }
}