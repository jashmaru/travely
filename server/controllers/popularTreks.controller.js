import fetchPopularTreks from "../models/popularTreks.model";

export default async function getPopularTreks(req, res)
{
    try {
        console.log("inside controller")
        const treks = await fetchPopularTreks();
        res.json(treks);
        console.log("data sended to route")
    } catch (error) {
        console.log("error fetching data")
        res.status(500);
    }
}