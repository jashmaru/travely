export default function RightSection({className,width,price})
{
    return(
           <>
            <div className={` sticky self-start top-10 flex flex-col ${className}`}>

                {/* Book Now Card */}
                <div className="rounded-2xl bg-white shadow-xl border border-gray-300
                backdrop-blur-sm flex flex-col w-full gap-4 p-[20px]">

                    <div className="flex flex-col">
                        <div className="flex items-center"><h2 className="font-bold text-2xl">₹ {price.toLocaleString("en-IN")} </h2>&nbsp;/ person</div>
                        <p className="text-xs text-gray-500">Excluding Applicable Taxes</p>
                    </div>

                    <button className="w-full bg-[#FF7A00] text-white py-[8px] rounded-2xl hover:bg-orange-400 ">Book Now</button>
                </div>

                {/* Plan Next Trip Form */}
                <div className="Box-Two flex flex-col mt-3 md:mt-6 bg-white border border-gray-300 shadow-xl backdrop-blur-sm 
                rounded-xl p-[20px] gap-1 w-full">
                    <h3 className="font-bold text-lg text-[#FF7A00] ">Let's Plan Your Next Trip</h3>
                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <input className="p-[5px] px-[10px] border-gray-400 border focus:border-orange-400 rounded-md 
                            outline-none " 
                            type="text" placeholder="Enter Your Full Name" />
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <input className="p-[5px] px-[10px] border-gray-400 border focus:border-orange-400 rounded-md 
                            outline-none " 
                            type="email" placeholder="Enter Your Email Address" />
                        </div>
                                                
                        <div className="flex flex-col gap-1">
                            <input className="p-[5px] px-[10px] border-gray-400 border focus:border-orange-400 rounded-md 
                            outline-none " 
                            type="text" placeholder="Enter Your Subject" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <textarea className="p-[5px] px-[10px] border-gray-400 border focus:border-orange-400 rounded-md 
                            outline-none" rows="3" 
                            type="text" placeholder="Enter Your Message" />
                        </div>

                        <button className="w-full rounded-lg text-white p-[10px] bg-[#FF7A00] hover:bg-orange-400"
                        type="submit" value="submit">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </>
    );
}