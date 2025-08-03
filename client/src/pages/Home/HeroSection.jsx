import img1 from "./assets/Carousel/greece.webp";
import img2 from "./assets/Carousel/italy.webp";
import img3 from "./assets/Carousel/maldive.webp";
import img4 from "./assets/Carousel/waterfall.webp";
import img5 from "./assets/Carousel/austria2.webp";
import img6 from "./assets/Carousel/austria.webp";
import img7 from "./assets/Carousel/bali.webp";

import { useEffect, useState } from "react";

export default function HeroSection()
{
    const images = [img1,img2,img3,img4,img5,img6,img7];
    const [currentImage,setImage] = useState(0);

    useEffect(()=>{
        
        const interval =  setInterval(() => {
            setImage((prev)=>{
               return ((prev + 1) % images.length)
            })
        }, 5000)

        return()=>clearInterval(interval)
        
    },[])

    return(
        <>
            <div className="Hero-Section flex items-center justify-center w-full h-[87vh] relative ">
                {images.map((img,index)=>{
                   return( <img key={index} src={img} loading="lazy" className={` absolute object-cover w-full h-full transition-opacity 
                    duration-[3000ms] ease-in-out ${ index === currentImage ? "opacity-100 " : "opacity-0 z-[-1]" }`} />)
                })}
                {/*This Is Overlay Effect That Makes Image Liitle Dark */}
                <div className="Overlay-Effect absolute inset-0 bg-black/40"></div> 
                <div className="Search-Box appearance-none rounded-[20px] shadow-lg backdrop-blur-sm flex z-10 overflow-hidden border-[#FF7A00] border-2 ">
                    <button className=" bg-[#FF7A00] p-[20px] pt-[15px] pb-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 lg:size-5 text-white">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25
                            8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" 
                            clipRule="evenodd" />
                        </svg>
                    </button>
                    <input className=" w-[250px] md:w-[400px] h-[50px] md:h[60px] p-[20px] pt-[15px] pb-[15px]
                    outline-none text-[#666666] " 
                    type="text" 
                    placeholder="Search places, tours..." />
                </div>

            </div>
        </>
    );

}