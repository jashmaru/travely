import fetchPopularTours from "../models/popularTours.model.js";

export default async function getPopularTours(req, res)
{
    try {
        console.log("inside controller")
        const tours = await fetchPopularTours();
        res.json(tours);
        console.log("data sended to route")
    } catch (error) {
        console.log("error fetching data")
        res.status(500);
    }
}