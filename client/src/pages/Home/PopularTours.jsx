import TripCard from "../../components/Card";

export default function PopularTours()
{
    const popularTourData = [{
        Name : "Bali,Indonesia",
        ImgURL : "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Duration: "8D | 7N",
        Price : "$600",
        Id : 1
    },
    {
        Name : "Atlantis,Dubai",
        ImgURL : "https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Duration: "4D | 3N",
        Price : "$500",
        Id : 2
    },
    {
        Name : "Danang, Vietnam",
        ImgURL : "https://images.unsplash.com/photo-1555979864-7a8f9b4fddf8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Duration: "6D | 5N",
        Price : "$500",
        Id : 3
    },
    {
        Name : "Tiger Nest, Bhutan",
        ImgURL : "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Duration: "7D | 6N",
        Price : "$400",
        Id : 4
    }];

    return(
        <>
        <div className="Popular-Tours h-[70vh] w-full flex flex-col gap-8 bg-white p-[55px] lg:p-[50px] ">

            {/* Heading Of Section */}
            <div className="Heading font-sans text-4xl ml-3 font-bold">Popular Tours</div>

            {/* <!-- Area for multiple cards --> */}
            <div className="Tour-Cards-Area flex justify-center h-full w-full flex-wrap gap-8">
                {popularTourData.map((tour,index)=>{
                    return(
                        <TripCard key={index} Name={tour.Name} ImgURL={tour.ImgURL} 
                        Duration={tour.Duration} Price={tour.Price} Id={tour.Id} />
                    )
                })}
            </div>

        </div>
        </>
    )
}