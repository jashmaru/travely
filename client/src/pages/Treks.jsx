import { useEffect, useState } from "react"
import TripCard from "../components/Card";

export default function Treks()
{
    const [treks, setTreks] = useState([]);
    const [loading, setLoading] = useState(true);
    const trekHeadings = [
        "Conquer New Heights",
        "Trails Await",
        "Paths to Adventure",
        "Your Next Summit",
        "Adventure in Every Step",
        "Reach Beyond Limits",
        "Where the Mountains Call",
        "Step Into the Wild",
        "Trek Beyond the Horizon",
        "Journey Through Nature's Wonders"
    ];

    const heading = trekHeadings[Math.floor(Math.random()*trekHeadings.length)]

    useEffect(()=>{
        fetch("http://localhost:3000/api/treks-data").then((res)=>{return res.json()}).then((data)=>{setTreks(data);setLoading(false)})
        .catch((error)=>{
            console.log("Error In Fetching Data From Treks : "+error);
            setLoading(false);
        });
    },[]);

    if (loading) return <><div className="h-[37vh] flex justify-center items-center font-sans font-bold text-[30px] ">
            Loading Treks ...
        </div></>

    return(
        <>
        <div className="Treks-Page flex flex-col gap-[40px] p-[60px] pt-[50px] ">
            <div className="Heading font-bold font-sans text-[30px]">
                {heading},  
            </div>
            <div className="Treks-Cards-Area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {treks.map((data,index)=>{
                    return <TripCard key={index} Name={data.name} ImgURL={data.imgurl} Duration={data.duration} 
                    Price={data.price} Id={data.id} Type={data.type} />
                })}
            </div>
        </div>
        </>
    )
}


