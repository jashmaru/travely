import Slider from "react-slick";
import { TestimonialCard } from "../../components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ChevronLeft,ChevronRight} from "lucide-react"

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
        },
        {
            name : "Lina",
            imgurl : "https://randomuser.me/api/portraits/women/68.jpg",
            rating : "⭐⭐⭐⭐⭐",
            review : "I fell in love with the culture, the food, and the warm hospitality. The team ensured we were comfortable and happy throughout.",
            date : "July 5, 2025"
        },
        {
            name : "Daniel",
            imgurl : "https://randomuser.me/api/portraits/men/75.jpg",
            rating : "⭐⭐⭐",
            review : "Good experience overall, though some parts of the itinerary felt too commercialized. Still, the natural beauty was amazing.",
            date : "June 28, 2025"
        },
        {
            name : "Sofia",
            imgurl : "https://randomuser.me/api/portraits/women/22.jpg",
            rating : "⭐⭐⭐⭐⭐",
            review : "The team went above and beyond! Each day brought a new adventure, and I couldn’t have asked for a better birthday trip.",
            date : "August 1, 2025"
        },
        {
            name : "Anil",
            imgurl : "https://randomuser.me/api/portraits/men/45.jpg",
            rating : "⭐⭐⭐⭐",
            review : "Loved the flexibility of the tour. We were able to explore on our own while still enjoying guided experiences.",
            date : "May 19, 2025"
        },
        {
            name : "Priya",
            imgurl : "https://randomuser.me/api/portraits/women/36.jpg",
            rating : "⭐⭐⭐⭐⭐",
            review : "An unforgettable escape! Bali's charm combined with the smooth arrangements made this one of our best trips yet.",
            date : "April 7, 2025"
        }
    ];

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <button
            onClick={onClick}
            className="absolute top-1/2 translate-x-7 -translate-y-2  right-0 "
            >
            <ChevronRight className="w-7 h-7 text-gray-800" />
            </button>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <button
            onClick={onClick}
            className="absolute top-1/2 -translate-x-6 -translate-y-2"        
            >
                <ChevronLeft className="w-7 h-7 text-gray-800" />
            </button>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<NextArrow />,
        prevArrow : <PrevArrow />
    };

    return(
        <>
            <div className="Testimonial-Section flex flex-col w-full gap-8 min-h-[70vh] p-[50px] lg:p-[55px]  ">

                <div className="Heading font-bold text-4xl font-sans ">Testimonial Section</div>
                
                <div className="Testimonial-Cards-Area flex flex-grow gap-8 items-center justify-between ">
                    <div className="Testimonial-Cards-Area w-full">
                        <Slider {...settings}>
                            {testimonialData.map((data,index)=>{
                                return<div className="px-4 pb-4"><TestimonialCard key={index} Name={data.name} Date={data.date} Review={data.review} Rating={data.rating} 
                                ImgURL={data.imgurl} /></div>
                            })}
                        </Slider>
                    </div>
                </div>
            
            </div>
        </>
    );
}