import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

export default function Header()
{
    return(
        <>
        <header>
        <div className="Header flex font-manrope p-4 pr-6 lg:p-2 w-full h-[13vh] shadow-md backdrop-blur-sm ">
            <div className="conatiner1 flex gap-2 items-center w-[50vw]">
               <Link to="/"><img className=" w-[70px] h-[70px] rounded-full " src={logo} /></Link>
                <h1 className="font-bold text-[#111111]/90 text-[27px] font-sans ">Travely</h1>
            </div>

            <div className="container2 hidden lg:flex gap-6 items-center justify-end w-[50vw]">
                    <ul className="NavLinks text-[#3e3e3e] flex gap-4 list-none font-manrope font-medium text-[17px] ">
                        <Link to="/" className=" hover:text-[#FFA040] " ><li>Home</li></Link>
                        <Link to="/tours" className=" hover:text-[#FFA040] "><li>Tours</li></Link>
                        <Link to="/treks" className=" hover:text-[#FFA040] "><li>Treks</li></Link>
                        <Link to="/about" className=" hover:text-[#FFA040] "><li>About</li></Link>
                        <Link to="/contact" className=" hover:text-[#FFA040] "><li>Contact</li></Link>
                    </ul>
                   <div className="mr-4"> 
                        <Link to="/login"> <button className=" text-white cursor-pointer rounded-xl pb-[8px] pt-[8px] pl-[16px] 
                        pr-[16px] bg-[#FF7A00] transition-all hover:bg-[#FFA040] hover:scale-105 active:scale-95 
                        duration-200">Login</button></Link>
                    </div>
            </div>

            <div className="Hamburger flex items-center lg:hidden ml-auto ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
            </div>

        </div>
        </header>
        </>
    )
}