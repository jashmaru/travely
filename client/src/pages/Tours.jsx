import { useEffect, useState } from "react"
import TripCard from "../components/Card";

export default function Tours()
{
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const tourHeadings = [
        "Discover the World",
        "Journeys Await",
        "Wonders to Explore",
        "Your Next Destination",
        "Explore the World",
        "Destinations You'll Love"
    ];

    const heading = tourHeadings[Math.floor(Math.random()*tourHeadings.length)]

    useEffect(()=>{
        fetch("http://localhost:3000/api/tours-data").then((res)=>{return res.json()}).then((data)=>{setTours(data);setLoading(false)})
        .catch((error)=>{
            console.log("Error In Fetching Data From Tours : "+error);
            setLoading(false);
        });
    },[]);

    if (loading) return <><div className="h-[37vh] flex justify-center items-center font-sans font-bold text-[30px] ">
            Loading Tours ...
        </div></>

    return(
        <>
        <div className="Tours-Page flex flex-col gap-[40px] p-[60px] pt-[50px] ">
            <div className="Heading font-bold font-sans text-[30px]">
                {heading},  
            </div>
            <div className="Tours-Cards-Area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {tours.map((data,index)=>{
                    return <TripCard key={index} Name={data.name} ImgURL={data.imgurl} Duration={data.duration} 
                    Price={data.price} Id={data.id} Type={data.type} />
                })}
            </div>
        </div>
        </>
    )
}