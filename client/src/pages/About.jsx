import logo from "../assets/logo.png"
import {TeamCard} from "../components/Card"

export default function About()
{
    const team = [
    {
        name: "John Doe",
        position: "Founder",
        img: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        name: "Sarah Smith",
        position: "Travel Expert",
        img: "https://randomuser.me/api/portraits/women/56.jpg"
    },
    {
        name: "Michael Lee",
        position: "Tour Coordinator",
        img: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        name: "Emma Davis",
        position: "Customer Support",
        img: "https://randomuser.me/api/portraits/women/12.jpg"
    }
    ];

    return(
        <>
        <div className="About-Page bg-gray-50">

            {/* Section One */}
            <div className="flex flex-wrap items-center justify-evenly">
                <div className="flex flex-col justify-start gap-4 w-full lg:w-[40vw] p-[60px] ">
                    <h2 className=" text-[30px] font-bold text-orange-500 ">Who We Are</h2>
                    <p className=" text-gray-700 ">At Travely, we believe travel is more than just seeing new places
                    it’s about living experiences that become lasting memories. With a passion for discovery and years of expertise, 
                    we design journeys that blend culture, adventure, and relaxation. 
                    Every trip is guided by professionals, tailored to your style, and crafted to make each moment effortless and unforgettable.</p>
                    <a><button className="p-[10px] px-[15px] bg-[#FF7A00] text-white rounded-lg " >Learn More</button></a>
                </div>
                <div className="w-full lg:w-[40vw] flex justify-center">
                    <img src={logo} className="w-[350px] h-[350px]" />
                </div>
            </div>

            {/* Section Two */}
            <div className="flex flex-wrap justify-evenly gap-10 p-[60px] ">
                <div className="p-[30px] w-full lg:w-[40vw] flex flex-col gap-4 items-center shadow hover:shadow-lg hover:backdrop-blur-lg transition-all rounded-xl ">
                    <h2 className="font-bold text-orange-500 text-[20px]">Our Mission</h2>
                    <p>To connect travelers with authentic experiences that inspire and enrich their lives. 
                    We aim to create journeys that celebrate culture, 
                    foster human connection, and leave a positive impact on the communities we visit.</p>
                </div>
                <div className="p-[30px] w-full lg:w-[40vw] flex flex-col gap-4 items-center shadow hover:shadow-lg hover:backdrop-blur-lg transition-all rounded-xl">
                    <h2 className="font-bold text-orange-500 text-[20px]">Our Vision</h2>
                    <p>To be the most trusted travel companion for exploring the world's beauty responsibly. We envision a 
                    future where every trip is a gateway to understanding, sustainability, and unforgettable memories.</p>
                </div>
            </div>

            {/* Section Three */}
            <div className="flex flex-col p-[60px] pt-[30px] ">
                <h2 className="text-[30px] font-bold text-[#FF7A00] text-center ">Meet Our Team</h2>
                <div class="grid md:grid-cols-4  gap-8 p-[50px]">
                    {team.map((data,index)=>{
                        return(
                            <TeamCard key={index} name={data.name} position={data.position} img={data.img} />
                        );
                    })}
                </div>
            </div>

        </div>
        </>
    )
}