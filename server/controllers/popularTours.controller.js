import fetchPopularTours from "../models/popularTours.model";

export default async function getPopularTours()
{
    try {
        const tours = await fetchPopularTours();
        res.json(tours);
    } catch (error) {
        res.status(500);
    }
}