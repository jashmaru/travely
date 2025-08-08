import Slider from "react-slick";
import { TestimonialCard } from "../../components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ChevronLeft,ChevronRight} from "lucide-react"
import { useEffect, useState } from "react";

export default function TestimonialSection()
{
    const [testimonial, setTestimonial] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("http://localhost:3000/api/testimonials").then((res)=>{ return res.json()}).then((data)=>{ setTestimonial(data); setLoading(false); })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[]);

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
        autoplay:true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<NextArrow />,
        prevArrow : <PrevArrow />,
        responsive : 
        [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if(loading) return <p className="text-lg">Loading Testimonials <span className="font-bold">...</span></p>

    return(
        <>
            <div className="Testimonial-Section flex flex-col w-full gap-8 min-h-[70vh] p-[50px] lg:p-[55px]  ">

                <div className="Heading font-bold text-4xl font-sans ">Testimonial Section</div>
                
                <div className="Testimonial-Cards-Area flex flex-grow gap-8 items-center justify-between ">
                    <div className="Testimonial-Cards-Area w-full">
                        <Slider className="slicker-dots" {...settings}>
                            {testimonial.map((data,index)=>{
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