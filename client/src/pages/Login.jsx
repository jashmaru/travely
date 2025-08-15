import { Eye,EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import travely from "../assets/logo.png";

export default function Login()
{
    const travelTaglines = [
        "Your Journey Begins Here",
        "Travel Smarter, Live Better",
        "Explore. Dream. Discover.",
        "Unlock the World",
        "Adventure Awaits You",
        "Where Will You Go Next?",
        "Making Travel Simple",
        "From Login to Lifelong Memories",
        "Your Passport to the World",
        "Start Your Next Adventure"
    ];

    const [eye ,setEye] = useState(false);
    const [password, setPassword] = useState("");
    const [tagline, setTagline] = useState(travelTaglines[Math.floor(Math.random()*travelTaglines.length)]);
    const google = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png";
    const logo = travely;
    
    function eyeOff()
    {
        return setEye(!eye);
    }

    function handlePassword(event)
    {
        const value = event.target.value.replace(/\s/g,"");
        setPassword(value);
    }

    return(
        <>
        <div className="bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D')] 
        min-h-[87vh] bg-cover bg-center relative flex justify-evenly p-[70px] ">

            {/* Overlay Effect */}
            <div className="absolute bg-black/40 backdrop-blur-sm inset-0 z-0"></div>

            {/* Section One */}
            <div className="w-[40vw] z-10 flex flex-col items-center justify-center -mt-10 ">
                <img className=" h-[300px] w-[300px] -mb-8 " src={logo} />
                <h2 className=" font-bold text-white text-[50px]">Travely</h2>
                <p className="text-white text-[25px] italic">"{tagline}"</p>
            </div>

            {/* Section Two */}
            <div className="w-[30vw] rounded-3xl bg-white shadow-lg backdrop-blur-md z-10 p-[40px] ">

                <form className="flex flex-col gap-3  justify-center">

                    <h2 className="text-[28px] font-bold text-[#FF7A00] ">Login</h2>

                    {/* Email Address */}
                    <div className="flex flex-col gap-1">
                        <label>Email Address</label>
                        <input className="p-[5px] w-[380px] px-[10px] border-gray-400 border focus:border-orange-400 rounded-md 
                        outline-none " 
                        type="email" placeholder="Enter Your Email Address" />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-1">
                        <label>Password</label>
                        <div className="relative">
                            <input className="p-[5px] px-[10px] pr-[38px] border-gray-400 border focus:border-orange-400 rounded-md 
                            outline-none w-[380px] " 
                            type={eye ? "text" : "password" } 
                            value={password}
                            onChange={handlePassword}
                            placeholder="Enter Your Password" />
                            <button type="button" onClick={eyeOff} className="text-black/40 
                            inset-y-0 right-2 absolute">{eye ? <EyeOff/> : <Eye/> }</button>
                        </div>
                        <div className="text-blue-900 text-[13px] ml-1 ">Forgot Password ?</div>
                    </div>

                    {/* Sign In */}
                    <div className="flex flex-col gap-1">
                        <button className="flex w-full bg-[#FF7A00] justify-center text-white rounded-xl p-[4px] pb-[6px]">
                            Sign In
                        </button>
                        <div className=" text-gray-500 text-[13px] text-center">Don't Have Account ? 
                            <Link className="text-blue-900" to="/register"> Click Here</Link>
                        </div>
                    </div>

                    {/* Divider For OAuth */}
                    <div className="flex items-center">
                        <div className="h-[1px] flex-1 bg-gray-300"></div>
                        <div className="text-center px-2 text-[14px] text-gray-400">OR</div>
                        <div className="h-[1px] flex-1 bg-gray-300"></div>
                    </div>

                    {/* Google Sign In */}
                    <div className="flex gap-10 mt-2">
                        <button className="rounded-xl w-full flex justify-center gap-2 border border-black py-[10px] ">
                            <img className="h-[30px] " src={google} /> 
                            <div className="font-sans">Sign In With <span className="font-semibold">Google</span></div>
                        </button>
                    </div>

                </form>

            </div>

            
        </div>
        
        </>
    );
}