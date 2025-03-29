import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiHeart } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import { GrMenu } from "react-icons/gr";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 md:px-14 px-10 shadow-md bg-white">
      <button
        className="md:hidden text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <GrMenu />
      </button>
      <div className="text-2xl">
        <img src="/Logo.png" className="w-[7rem] h-[1.25rem] cursor-pointer" />
      </div>

      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium ">
        <li className="flex items-center gap-1 cursor-pointer hover:text-black">
          Home <MdOutlineKeyboardArrowDown />
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-black">
          Shop <MdOutlineKeyboardArrowDown />
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-black">
          Products <MdOutlineKeyboardArrowDown />
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-black">
          Pages <MdOutlineKeyboardArrowDown />
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-black">
          Blog <MdOutlineKeyboardArrowDown />
        </li>
        <li className="cursor-pointer hover:text-black">Sale</li>
        <li className="cursor-pointer hover:text-black">Buy Umino!</li>
      </ul>

      <div className="flex items-center space-x-4">
        <FiSearch className="text-xl cursor-pointer" />
        <FiUser className="md:flex hidden text-xl cursor-pointer" />
        <LuClock className="md:flex hidden text-xl cursor-pointer" />
        <div className="relative md:flex hidden">
          <FiHeart className="text-xl cursor-pointer transition" />
          <span className="absolute -top-1 -right-2 bg-[#D73F0F] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>

        <div className="relative">
          <FiShoppingCart className="text-xl cursor-pointer transition" />
          <span className="absolute -top-1 -right-2 bg-[#D73F0F] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
