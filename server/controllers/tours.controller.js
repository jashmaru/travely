import fetchTours from "../models/tours.model.js";

export default async function getTours(req,res)
{
    try {
        const toursData = await fetchTours();
        res.json(toursData);
    } catch (error) {
        console.log("Error Getting Tours Data : "+error);
    }
}