import fetchSearch from "../models/search.model.js";

export default async function getSearch(req,res)
{
    const value = req.query.text;
    try {
        const searchResult = await fetchSearch(value);
        res.json(searchResult);
    } catch (error) {
        console.log("Error In Search Controller : "+error);
    }
}
