import {MapPin,Phone,Mail} from "lucide-react"

export default function Contact()
{
    return(
        <>
        <div className="Contact-Page">
            <div className="Hero-Section flex flex-col gap-1 items-center w-full p-[60px] bg-[#FF7A00] text-white ">
                <h1 className="font-bold text-[50px] capitalize ">Get in touch</h1>
                <p className="text-center">Have questions about our tours, treks, or travel packages?<br/> We are here to help you plan your next adventure.</p>
            </div>
            <div className="Contact-Details flex justify-evenly p-[50px] bg-gray-50 ">

                <div className="Box-One flex flex-col bg-white shadow-md backdrop-blur-sm rounded-xl p-[50px] gap-5 w-[40vw] ">
                    <h3 className="font-bold text-[25px] text-[#FF7A00] ">Our Contact Information</h3>
                    <p className="text-gray-500 ">Feel free to reach out to us through any of the methods below.</p>

                    <div className="flex items-center gap-3 ">
                        <MapPin className="text-orange-500 h-[28px] w-[28px]" />
                        <div className="flex flex-col">
                            <h4>Address</h4>
                            <p className="text-gray-500">123 Adventure Street, Bali, Indonesia</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 ">
                        <Phone className="text-orange-500 h-[28px] w-[28px]" />
                        <div className="flex flex-col">
                            <h4>Phone</h4>
                            <p className="text-gray-500">+62 123 456 789</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 ">
                        <Mail className="text-orange-500 h-[28px] w-[28px]" />
                        <div className="flex flex-col">
                            <h4>Email</h4>
                            <p className="text-gray-500">support@travely.com</p>
                        </div>
                    </div>

                    <div className="rounded-xl rounded-tl-xl mt-[10px] overflow-hidden"><iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505146.76607871364!2d114.74190714966153!3d-8.
                    454654113239544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!
                    2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1755020806885!5m2!1sen!2sin" className="w-full h-[300px] " ></iframe></div>

                </div>

                <div className="Box-Two flex flex-col bg-white shadow-md backdrop-blur-sm rounded-xl p-[50px] gap-5 w-[40vw] ">
                    <h3 className="font-bold text-[25px] text-[#FF7A00] ">Send Us Message</h3>
                    <form className="flex flex-col gap-5" action="submit">
                        <div className="flex flex-col gap-1">
                            <label>Full Name</label>
                            <input className="p-[5px] px-[10px] border-gray-400 border focus:border-orange-400 rounded-md 
                            outline-none " 
                            type="text" placeholder="Enter Your Full Name" />
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <label>Email Address</label>
                            <input className="p-[5px] px-[10px] border-gray-400 border focus:border-orange-400 rounded-md 
                            outline-none " 
                            type="email" placeholder="Enter Your Email Address" />
                        </div>
                                                
                        <div className="flex flex-col gap-1">
                            <label>Subject</label>
                            <input className="p-[5px] px-[10px] border-gray-400 border focus:border-orange-400 rounded-md 
                            outline-none " 
                            type="text" placeholder="Enter Your Subject" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label>Message</label>
                            <textarea className="p-[5px] px-[10px] border-gray-400 border focus:border-orange-400 rounded-md 
                            outline-none" rows="8" 
                            type="text" placeholder="Enter Your Message" />
                        </div>

                        <button className="w-full rounded-lg text-white p-[10px] bg-[#FF7A00] "
                        type="submit" value="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}