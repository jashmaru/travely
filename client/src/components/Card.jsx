import { Link } from "react-router-dom";

 export default function TripCard({Name,ImgURL,Duration,Price,Id,Type})
 {
    return(
        <>
        {/*<!-- Card that is to be dispalyed -->*/}
        <div className="Card h-[300px] flex-col hover:scale-[103%] transition-transform ease-in-out duration-300
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
                    <p className="font-bold text-orange-400">₹ {Price.toLocaleString("en-IN")}</p>
                    <span><Link to={"/"+Type+"/"+Id}><button className="cursor-pointer rounded-lg bg-orange-500 pt-1 
                    pr-2 pb-1 pl-2 text-white">Book Now</button></Link></span>
                </div>

            </div>

        </div>
        </>
    )
 }

 export function TestimonialCard({Date,Review,Rating,Name,ImgURL})
 {
    return(
            <>
            <div className={"Card p-[5px] border relative flex h-[260px] flex-col overflow-hidden rounded-lg "}>
                <div className="Person-Details text-gray-900 flex h-[90px] items-center p-[15px] pb-0">
                    <img src={ImgURL} 
                    className="h-[60px] w-[60px] rounded-[200px] object-cover" />
                    <div className="Detail ml-3">
                        <div>{Name}</div>
                        <div>{Rating}</div>
                    </div>
                </div>
                <div className="Review-Message text-gray-800 flex flex-col h-[180px] text-sm p-[20px]">
                    <div>{Review}</div> 
                    <div className="text-[12px] italic text-right mt-2">– {Date}</div>
                </div>
            </div>
            </>
    );
 }

 export function TeamCard({name,position,img})
 {
    return(
        <>
            <div class="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
                <img src={img} class="w-24 h-24 rounded-full mx-auto mb-4"/>
                <h4 class="font-semibold">{name}</h4>
                <p class="text-gray-500 text-sm">{position}</p>
            </div>
        </>
    );
 };