import { Link } from "react-router-dom";

export default function MobileMenu({ isOpen }) {
  return (
    <nav className={`absolute top-auto left-0 w-full  bg-white z-10 transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
      <ul className="flex flex-col ">
        <Link to="/"><li className="w-full hover:bg-[#FF7A00] hover:text-white font-manrope border-b border-gray-400 p-4">
            Home</li></Link>
        <Link to="/tours"><li className="w-full hover:bg-[#FF7A00] hover:text-white font-manrope border-b border-gray-400 p-4">
            Tours</li></Link>
        <Link to="/treks"><li className="w-full hover:bg-[#FF7A00] hover:text-white font-manrope border-b border-gray-400 p-4">
            Treks</li></Link>
        <Link to="/about"><li className="w-full hover:bg-[#FF7A00] hover:text-white font-manrope border-b border-gray-400 p-4">
            About</li></Link>
        <Link to="/contact"><li className="w-full hover:bg-[#FF7A00] hover:text-white font-manrope border-b border-gray-400 p-4">
            Contact</li></Link>
      </ul>
    </nav>
  );
}
