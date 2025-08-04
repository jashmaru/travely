import { Link } from "react-router-dom";

 export default function TripCard({Name,ImgURL,Duration,Price,Id})
 {
    return(
        <>
        {/*<!-- Card that is to be dispalyed -->*/}
        <div className="Card h-[300px] w-full md:w-[47%] lg:w-[23%] flex-col hover:scale-[103%] transition-transform ease-in-out duration-300
         overflow-hidden rounded-3xl shadow-xl backdrop-blur-xl">

            {/*<!-- Container 1 -->*/}
            <div className="Card-Image">
                <img className="h-[160px] w-full object-cover" src={ImgURL} alt={Name} />
            </div>

            <div className="Tour-Details bg-white p-4">
                
                {/*<!-- Container 2 -->*/}
                <div className="Tour-Name-Time h-[70px] w-full">
                    <h1 className="text-lg font-bold">{Name}</h1>
                    <p className="text-sm text-gray-700">{Duration}</p>
                </div>

                {/*<!-- Container 3 -->*/}
                <div className="Tour-Price-CTA flex h-[70px] w-full justify-between">
                    <p className="font-bold text-orange-400">$ {Price}</p>
                    <span><Link to={"/tours/"+Id}><button className="cursor-pointer rounded-lg bg-orange-500 pt-1 
                    pr-2 pb-1 pl-2 text-white">Book Now</button></Link></span>
                </div>

            </div>

        </div>
        </>
    )
 }