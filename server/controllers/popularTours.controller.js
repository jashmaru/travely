import fetchPopularTours from "../models/popularTours.model.js";

export default async function getPopularTours(req, res)
{
    try {
        const tours = await fetchPopularTours();
        res.json(tours);
    } catch (error) {
        res.status(500);
    }
}