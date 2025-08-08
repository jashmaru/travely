import Slider from "react-slick";
import { TestimonialCard } from "../../components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ChevronLeft,ChevronRight} from "lucide-react"
import { useEffect } from "react";

export default function TestimonialSection()
{

    useEffect(
        fetch("")
    );

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