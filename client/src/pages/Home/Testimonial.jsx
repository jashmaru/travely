import { TestimonialCard } from "../../components/Card";

export default function TestimonialSection()
{


    const testimonialData = [
        {
            name : "Sweden",
            imgurl : "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
            rating : "⭐⭐⭐⭐⭐",
            review : "Our Bali tour was nothing short of magical. From the breathtaking beaches to the serene temples, every moment was perfectly planned.",
            date : "July 23, 2025"
        },
        {
            name : "Joey",
            imgurl : "https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc=",
            rating : "⭐⭐⭐⭐",
            review : "Wonderful experience in Bali! The guide was super friendly, and we got to explore hidden gems. Only wish we had one more day.",
            date : "September 23, 2025"
        },
        {
            name : "Karan",
            imgurl : "https://randomuser.me/api/portraits/men/32.jpg",
            rating : "⭐⭐⭐⭐⭐",
            review : "Absolutely flawless from start to finish. The accommodations were top-notch, and the sunset views were breathtaking.",
            date : "August 10, 2025"
        }
    ];


    return(
        <>
            <div className="Testimonial-Section flex flex-col w-full gap-8 min-h-[70vh] p-[50px] lg:p-[55px]  ">

                <div className="Heading font-bold text-4xl font-sans ">Testimonial Section</div>
                
                <div className="Testimonial-Cards-Area flex flex-grow gap-8 items-center justify-between ">

                    <div className="Left Arrow hover:cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                        stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>

                    <div className="Testimonial-Card gap-4 w-full grid grid-cols-1 overflow-hidden md:grid-cols-2 lg:grid-cols-3 ">
                        {testimonialData.map((data,index)=>{
                            return <TestimonialCard key={index} Name={data.name} ImgURL={data.imgurl} Date={data.date} Review={data.review} 
                            Rating={data.rating} />
                        })}
                    </div>
                     
                    <div className="Right Arrow hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>

                </div>
            
            </div>
        </>
    );
}