import { useState } from "react";
import TripCard from "../../components/Card";
import { useEffect } from "react";

export default function PopularTreks()
{

    const [treks, setTreks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("http://localhost:3000/api/popular-treks").then((res)=>{console.log("Raw response:", res); return res.json();}).then((data)=>{console.log("data "+data); setTreks(data); setLoading(false)})
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[])

    if (loading) return <p className="text-xl">Loading Popular Treks <span className="font-bold">...</span></p>

    return(
        <>
        <div className="Popular-Treks min-h-[70vh]  w-full flex flex-col gap-8  p-[55px] lg:p-[50px] ">

            {/* Heading Of Section */}
            <div className="Heading font-sans text-4xl ml-3 font-bold">Popular Treks</div>

            {/* <!-- Area for multiple cards --> */}
            <div className="Trek-Cards-Area grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            h-full w-full gap-8 ">
                {treks.map((trek,index)=>{
                    return(
                        <TripCard key={index} Type={trek.type} Name={trek.name} ImgURL={trek.imgurl} 
                        Duration={trek.duration} Price={trek.price} Id={trek.id} />
                    )
                })}
            </div>

        </div>
        </>
    )
}