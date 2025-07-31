import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

export default function Header()
{
    return(
        <>
        <header>
        <div className="Header flex font-manrope p-2 w-[100vw] h-[13vh] shadow-lg backdrop-blur-sm  bg-white">
            <div className="conatiner1 flex gap-2 items-center w-[50vw]">
               <Link to="/"><img className=" w-[70px] h-[70px] rounded-full " src={logo} /></Link>
                <h1 className="font-bold text-[#111111]/90 text-[25px] ">Travely</h1>
            </div>
            <div className="container2 flex  gap-6 items-center justify-end w-[50vw]">
                    <ul className="NavLinks text-[#3e3e3e] flex gap-4 list-none font-manrope text-[17px] ">
                        <Link to="/" className=" hover:text-[#FFA040] " ><li>Home</li></Link>
                        <Link to="/tours" className=" hover:text-[#FFA040] "><li>Tours</li></Link>
                        <Link to="/treks" className=" hover:text-[#FFA040] "><li>Treks</li></Link>
                        <Link to="/about" className=" hover:text-[#FFA040] "><li>About</li></Link>
                        <Link to="/contact" className=" hover:text-[#FFA040] "><li>Contact</li></Link>
                    </ul>
                   <div className="mr-4"> <button className=" text-white cursor-pointer rounded-xl pb-[8px] pt-[8px] pl-[16px] 
                   pr-[16px] bg-[#FF7A00] transition-all hover:bg-[#FFA040] hover:scale-105 active:scale-95 duration-200
                   ">Login</button></div>
            </div>
        </div>
        </header>
        </>
    )
}