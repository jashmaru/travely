export default function PopularTours()
{
    return(
        <>
        <div className="Popular-Tours h-[70vh] w-full flex-col bg-white p-[50px] ">

            <div className="Heading font-sans text-4xl font-bold">Popular Tours</div>

            {/* <!-- Area for multiple cards --> */}
            <div className="Tour-Cards-Area mt-8 flex h-full w-full flex-wrap gap-8">

                {/* <!-- Card that is to be dispalyed --> */}
                <div className="Card h-[300px] w-[280px] flex-col hover:scale-[103%] transition-transform ease-in-out duration-300
                 overflow-hidden rounded-3xl shadow-xl backdrop-blur-xl">

                    {/* <!-- Container 1 --> */}
                    <div className="Card-Image">
                        <img className="h-[160px] w-full object-cover" 
                        src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1170&
                        auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>

                    <div className="Tour-Details bg-white p-4">
                        {/* <!-- Container 2 --> */}
                        <div className="Tour-Name-Time h-[70px] w-full">
                        <h1 className="text-lg font-bold">Bali,Indonesia</h1>
                        <p className="text-sm text-gray-700">8D | 7N</p>
                        </div>

                        {/* <!-- Container 3 --> */}
                        <div className="Tour-Price-CTA flex h-[70px] w-full justify-between">
                            <p className="font-bold text-orange-400">$800</p>
                            <span><button className="cursor-pointer rounded-lg bg-orange-500 pt-1 
                            pr-2 pb-1 pl-2 text-white">Book Now</button></span>
                        </div>
                    </div>

                </div>

                
                {/* <!-- Card that is to be dispalyed --> */}
                <div className="Card h-[300px] w-[280px] flex-col hover:scale-[103%] transition-transform ease-in-out duration-300 
                overflow-hidden rounded-3xl shadow-xl backdrop-blur-xl">

                    {/* <!-- Container 1 --> */}
                    <div className="Card-Image">
                        <img className="h-[160px] w-full object-cover" 
                        src="https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?q=80&w=1184&auto=format&
                        fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>

                    <div className="Tour-Details bg-white p-4">
                        {/* <!-- Container 2 --> */}
                        <div className="Tour-Name-Time h-[70px] w-full">
                        <h1 className="text-lg font-bold">Atlantis,Dubai</h1>
                        <p className="text-sm text-gray-700">4D | 3N</p>
                        </div>

                        {/* <!-- Container 3 --> */}
                        <div className="Tour-Price-CTA flex h-[70px] w-full justify-between">
                            <p className="font-bold text-orange-400">$1000</p>
                            <span><button className="cursor-pointer rounded-lg bg-orange-500 pt-1 
                            pr-2 pb-1 pl-2 text-white">Book Now</button></span>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

        </>
    )
}