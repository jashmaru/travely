import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersRound,CloudSun,Calendar } from "lucide-react"

export default function Package()
{
    const {type,id} = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`http://localhost:3000/api/${type}/${id}`).then((res)=>{ return res.json()})
        .then((resData)=>{setData(resData[0]);setLoading(false)})
        .catch((error)=>{
            console.log("Error In Fetching Data In Package File : "+error);
        });
    },[type,id]);

    
    if (loading) return <p>Loading...</p>;
    if (!data) return <p>No package found</p>;

    return(
        <>
        {/* Package Page */}
        <div>

            {/* Tour Or Trek Image */}
            <div className="w-full h-[50vh] bg-cover bg-center relative p-[50px] flex items-end" style={{backgroundImage : `url(${data.imgurl})`}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <h1 className="relative font-bold font-poppins text-[40px] text-white">{data.name}</h1>
            </div>

            {/* Package Content & Booking Inquiry Or Booking */}
            <div className="flex bg-gray-100 gap-10 p-[50px]">

                {/* Left Content */}
                <div className="w-[70vw] h-[80vh] rounded-2xl bg-inherit">

                    {/* Basic Details Icons */}
                    <div className="flex w-full gap-10">

                        {/* Calender */}
                        <div className="flex gap-2 items-center">
                            <Calendar className="w-[40px] h-[36px] text-[#FF7A00]" />
                            <div className="flex flex-col">
                                <h4 className="text-lg font-bold">Duration</h4>
                                <p className="text-sm text-gray-500 -mt-1 ">{data.duration}</p>
                            </div>
                        </div>
                        
                        {/* Best Season */}
                        <div className="flex gap-2 items-center">
                            <CloudSun  className="w-[40px] h-[36px] text-[#FF7A00]" />
                            <div className="flex flex-col">
                                <h4 className="text-lg font-bold">Best Season</h4>
                                <p className="text-sm text-gray-500 -mt-1 ">{data.best_season}</p>
                            </div>
                        </div>

                        {/* Age Range */}
                        <div className="flex gap-2 items-center">
                            <UsersRound className="w-[40px] h-[36px] text-[#FF7A00]" />
                            <div className="flex flex-col">
                                <h4 className="text-lg font-bold">Age Range</h4>
                                <p className="text-sm text-gray-500 -mt-1 ">{data.age_range}</p>
                            </div>
                        </div>
                        
                    </div>

                </div>

                {/* Right Content Sticky */}
                <div className="w-[30vw] h-[36vh] rounded-2xl bg-white shadow-xl border border-gray-300
                 backdrop-blur-sm sticky self-start top-10 ">

                </div>

            </div>

        </div>
        </>
    );
}