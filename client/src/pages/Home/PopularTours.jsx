import { useState } from "react";
import TripCard from "../../components/Card";
import { useEffect } from "react";

export default function PopularTours()
{

    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("http://localhost:3000/api/popular-tours").then((res)=>{console.log("Raw response:", res); return res.json();}).then((data)=>{console.log("data "+data); setTours(data); setLoading(false)})
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[])

    if (loading) return <p className="text-xl">Loading Popular Tours <span className="font-bold">...</span></p>

    return(
        <>
        <div className="Popular-Tours min-h-[70vh] w-full flex flex-col gap-8 p-[55px] lg:p-[50px] ">

            {/* Heading Of Section */}
            <div className="Heading font-sans text-4xl ml-3 font-bold">Popular Tours</div>

            {/* <!-- Area for multiple cards --> */}
            <div className="Tour-Cards-Area grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            h-full w-full gap-8 ">
                {tours.map((tour,index)=>{
                    return(
                        <TripCard key={index} Type={tour.type} Name={tour.name} ImgURL={tour.imgurl} 
                        Duration={tour.duration} Price={tour.price} Id={tour.id} />
                    )
                })}
            </div>

        </div>
        </>
    )
}