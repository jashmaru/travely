
 
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

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1
                     1 0 0 1 1-1h3z"/></svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2
                     4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12
                    0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3
                    1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68
                    1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>

                </div>
            </div>

        </div>
        </>
    )
}