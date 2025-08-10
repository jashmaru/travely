import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import TripCard from "../components/Card";

export default function Search()
{
    const [search, setSearch] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchValue = new URLSearchParams(useLocation().search);
    const searchText = searchValue.get("text");

    useEffect(()=>{
        fetch(`http://localhost:3000/api/search?text=${encodeURIComponent(searchText)}`)
        .then((res)=>{return res.json()}).then((data)=>{setSearch(data);setLoading(false)})
        .catch((error)=>{console.log("Error In Fetching Search : "+error);setLoading(false)});
    },[])

    if(loading) return <></>

    if (search.length===0) return <><div className="Heading font-bold font-sans text-[30px] flex justify-center h-[37vh] items-center ">
                No Matching Result For {searchText},
            </div></>

    return(
        <>
        <div className="Search-Results flex flex-col p-[60px] pt-[50px] gap-[40px] ">
            <div className="Heading font-bold font-sans text-[30px] ">
                Searched Results For {searchText},
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">   
                {search.map((data,index)=>{
                    return <TripCard key={index} Name={data.name} ImgURL={data.imgurl} Duration={data.duration} 
                    Price={data.price} Id={data.id} Type={data.type} />
                })}
            </div>
        </div>
        </>
    );
}