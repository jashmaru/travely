export default function TestimonialSection()
{
    return(
        <>
            <div className="Testimonial-Section flex flex-col w-full gap-8 min-h-[70vh] p-[50px] lg:p-[55px]  ">

                <div className="Heading font-bold text-4xl font-sans ">Testimonial Section</div>
                
                <div className="Testimonial-Cards-Area flex flex-grow items-center justify-between ">

                    <div className="Left Arrow hover:cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                        stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>

                    <div className="Testimonial-Card w-full grid grid-cols-3 ">
                        
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