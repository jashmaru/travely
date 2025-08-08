import { Facebook,Instagram,Github,Twitter,Youtube,Linkedin } from "lucide-react";

 
export default function Footer()
{
    return(
        <>
        <div className="Footer text-white flex w-full flex-col lg:flex-row min-h-[50vh] p-[40px] bg-[#FF7A00]">
            <div className="flex gap-[50px] items-center border-r-white border-r pl-[40px] pr-[80px]">
                <div className="Logo text-[50px] -rotate-12 font-pacifico">Travely</div>
            </div>
            
            <div className="Navigation-Links tracking-[1px] pt-[60px] font-sans font-thin pl-[100px] pr-[150px] gap-[100px] flex ">

                <div className="Box-1 gap-0.5 flex flex-col ">
                    <div className="Heading font-bold text-lg mb-2 ">Quick Links</div>
                    <a href="http://localhost:5173/">Home</a>
                    <a href="http://localhost:5173/tours">Tours</a>
                    <a href="http://localhost:5173/treks">Treks</a>
                    <a href="http://localhost:5173/about">About</a>
                    <a href="http://localhost:5173/contact">Contact</a>
                </div>

                <div className="Box-2 gap-0.5 flex flex-col">
                    <div className="Heading font-bold text-lg -mt-0.5 mb-2 ">Important Links</div>
                    <a href="">Privacy Policy</a>
                    <a href="">Cancellation Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Disclaimer</a>
                </div>

                <div className="Box-3 gap-0.5 flex flex-col">
                    <div className="Heading font-bold text-lg -mt-0.5 mb-2 ">Company</div>
                    <a href="">Carrers</a>
                    <a href="">Blogs</a>
                    <a href="">Teams</a>
                    <a href="">FAQ</a>
                </div>
            </div>

            <div className="Subscribe-Newsletter flex flex-col gap-4 pt-[75px]">
                <div className="Subscribe-Area flex gap-2 items-center flex-col ">
                    <div className="font-bold font-manrope uppercase tracking-[1.5px] ">Subscribe To Our News Letter</div>
                    <input placeholder="Enter Your Email" className="rounded-lg text-[#3e3e3e] p-[5px] pl-[15px] w-[310px] 
                    outline-none "/>
                </div>
                <div className="Social-Media flex justify-center gap-4 ">
                    <Youtube />
                    <Instagram />
                    <Twitter />
                    <Facebook />
                    <Github />
                    <Linkedin/>
                </div>
            </div>

        </div>
        </>
    )
}