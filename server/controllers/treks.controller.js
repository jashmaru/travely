import fetchTreks from "../models/treks.model.js";

export default async function getTreks(req,res)
{
    try {
        const treks = await fetchTreks();
        res.json(treks);
    } catch (error) {
        console.logs("Error In Getting Treks : "+error);
    }
}