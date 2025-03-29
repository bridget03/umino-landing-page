import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
  FaFacebook,
  FaHeart,
} from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";

import * as Accordion from "@radix-ui/react-accordion";
import { RxHome } from "react-icons/rx";
import { AiOutlineShop } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { LiaShoppingCartSolid } from "react-icons/lia";

function Footer() {
  const NavItem = ({ icon, label, badgeCount }) => {
    return (
      <li className="relative flex flex-col items-center cursor-pointer">
        <div className="relative">
          {icon}
          {badgeCount && (
            <span className="absolute -top-2 -right-2 bg-[#D73F0F] text-white text-[9px]  rounded-full w-4 h-4 flex items-center justify-center">
              {badgeCount}
            </span>
          )}
        </div>
        <span className="mt-1 text-xs font-medium">{label}</span>
      </li>
    );
  };
  return (
    <footer className="mt-28 pt-28 border-t border-[#EBEBEB] bg-[#fcfcfc]">
      <nav className="fixed md:hidden bottom-0 left-0 w-full bg-white shadow-lg py-3 z-1000">
        <ul className="flex justify-around items-center text-black text-sm">
          <NavItem icon={<RxHome size={18} />} label="Home" />
          <NavItem icon={<AiOutlineShop size={18} />} label="Shop" />
          <NavItem icon={<GoPerson size={18} />} label="Account" />
          <NavItem
            icon={<FaRegHeart size={18} />}
            label="Wishlist"
            badgeCount={2}
          />
          <NavItem
            icon={<LiaShoppingCartSolid size={22} />}
            label="Cart"
            badgeCount={2}
          />
        </ul>
      </nav>
      <div className="container max-w-[1410px] mx-auto px-4">
        <div className="grid grid-cols-6 md:grid-cols-6 gap-8">
          <div className="md:col-span-2 col-span-6">
            <img
              src="/Logo.png"
              className="w-[92.41px] h-[20px] mb-4 cursor-pointer"
            />
            <p className="mt-2 text-[#555555] text-[16px] font-normal">
              268 St, South New York/NY 98944, United States
            </p>
            <p className="text-[#555555]">+222-1800-2628</p>
            <p className="text-[#555555]">blueskytechcompany@gmail.com</p>
            <div className="flex space-x-3 my-5">
              <div className="border border-[#555555] rounded-full p-2">
                <FaInstagram className="text-[#555555] hover:text-black text-xl cursor-pointer" />
              </div>
              <div className="border border-[#555555] rounded-full p-2">
                <FaTiktok className="text-[#555555] hover:text-black text-xl cursor-pointer" />
              </div>
              <div className="border border-[#555555] rounded-full p-2">
                <FaYoutube className="text-[#555555] hover:text-black text-xl cursor-pointer" />
              </div>
              <div className="border border-[#555555] rounded-full p-2">
                <FaXTwitter className="text-[#555555] hover:text-black text-xl cursor-pointer" />
              </div>
              <div className="border border-[#555555] rounded-full p-2">
                <FaFacebook className="text-[#555555] hover:text-black text-xl cursor-pointer" />
              </div>
            </div>
            <div className="md:flex items-center mt-4 gap-2 hidden">
              <button className="flex items-center justify-center bg-[#5A31F4] text-white p-3 rounded-full">
                <span>
                  <FaHeart />
                </span>{" "}
              </button>
              <div className="text-[#555555] text-sm flex items-center gap-2 ">
                Follow on{" "}
                <span className="font-bold">
                  <img src="/logo (2).png" />
                </span>
              </div>
            </div>
          </div>

          <Accordion.Root
            type="multiple"
            className="md:hidden col-span-6 w-full"
          >
            <Accordion.Item
              value="hotCategories"
              className="border-t border-[#EBEBEB] py-4"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between w-full text-sm font-semibold cursor-pointer">
                  <h3 className="text-sm font-semibold">HOT CATEGORIES</h3>
                  <IoIosArrowDown className="transition-transform accordion-arrow" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="categoryList mt-2 space-y-2 text-[#555555]">
                <ul className="categoryList mt-2 space-y-2 text-[#555555]">
                  <li>Special Offers</li>
                  <li>Performance</li>
                  <li>T-shirts</li>
                  <li>Underwear</li>
                  <li>Top Brands</li>
                  <li>Online Exclusive</li>
                </ul>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="customerService"
              className="border-t border-[#EBEBEB] py-4"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between w-full text-sm font-semibold cursor-pointer">
                  CUSTOMER SERVICE
                  <IoIosArrowDown className="transition-transform accordion-arrow" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="categoryList mt-2 space-y-2 text-[#555555]">
                <ul className="categoryList mt-2 space-y-2 text-[#555555]">
                  <li>Privacy Policy</li>
                  <li>Refund Policy</li>
                  <li>Shipping & Return</li>
                  <li>Term & Conditions</li>
                  <li>Advanced Search</li>
                  <li>Theme FAQs</li>
                  <li>Store Locations</li>
                </ul>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value="newsletter"
              className="border-t border-[#EBEBEB] py-4"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between w-full text-sm font-semibold cursor-pointer">
                  SIGN UP TO NEWSLETTER
                  <IoIosArrowDown className="transition-transform accordion-arrow" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="mt-2 text-[#555555]">
                <p>
                  Enter your email address to get $10 off your first order and
                  free shipping.
                </p>
                <div className="flex items-center mt-3 gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="border border-gray-300 px-4 py-3 rounded-[30px] w-full focus:outline-none"
                  />
                  <button className="bg-[#111111] text-white text-[12px] px-4 py-3 rounded-[30px] cursor-pointer">
                    SUBSCRIBE
                  </button>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          <div className="hidden md:grid col-span-1">
            <h3 className="text-sm font-semibold">HOT CATEGORIES</h3>
            <ul className="categoryList mt-2 space-y-2 text-[#555555]">
              <li>Special Offers</li>
              <li>Performance</li>
              <li>T-shirts</li>
              <li>Underwear</li>
              <li>Top Brands</li>
              <li>Online Exclusive</li>
            </ul>
          </div>

          <div className="hidden md:grid col-span-1">
            <h3 className="text-sm font-semibold">CUSTOMER SERVICE</h3>
            <ul className="categoryList mt-2 space-y-2 text-[#555555]">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Shipping & Return</li>
              <li>Term & Conditions</li>
              <li>Advanced Search</li>
              <li>Theme FAQs</li>
              <li>Store Locations</li>
            </ul>
          </div>

          <div className="hidden md:grid col-span-2">
            <h3 className="text-sm font-semibold">SIGN UP TO NEWSLETTER</h3>
            <p className="mt-2 text-[#555555]">
              Enter your email address to get $10 off your first order and free
              shipping. Updates on Sales and Offers.
            </p>
            <div className="flex items-center mt-3 gap-3">
              <input
                type="email"
                placeholder="Enter your email..."
                className="border border-gray-300 px-4 py-3 rounded-[30px] w-full focus:outline-none"
              />
              <button className="bg-[#111111] text-white text-[12px] px-4 py-3 rounded-[30px] cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-[#EBEBEB] py-8 mb-16 md:mb-0">
          <div className="flex space-x-4 text-[14px] text-[#555555]">
            <p className="cursor-pointer flex items-center gap-1">
              English <IoIosArrowDown />
            </p>
            <p className="cursor-pointer flex items-center gap-1">
              United States (USD $) <IoIosArrowDown />
            </p>
          </div>
          <div className="text-[#555555] text-[14px] mt-2">
            &copy; 2023 Umino Store. All Rights Reserved.
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <div className="border-[#DEDEDE] p-1 border-1 rounded-[3px]">
              <img src="/visa.png" alt="Visa" className="h-6 " />
            </div>
            <div className="border-[#DEDEDE] p-1 border-1 rounded-[3px]">
              <img src="/mastercard.png" alt="MasterCard" className="h-6 " />
            </div>
            <div className="border-[#DEDEDE] p-1 border-1 rounded-[3px]">
              <img src="/discover.png" alt="MasterCard" className="h-6 " />
            </div>
            <div className="border-[#DEDEDE] p-1 border-1 rounded-[3px]">
              <img src="/western.png" alt="MasterCard" className="h-6 " />
            </div>
            <div className="border-[#DEDEDE] p-1 border-1 rounded-[3px]">
              <img src="/amex.png" alt="Amex" className="h-6 " />
            </div>
            <div className="border-[#DEDEDE] p-1 border-1 rounded-[3px]">
              <img src="/cirrus.png" alt="Cirrus" className="h-6 " />
            </div>
            <div className="border-[#DEDEDE] p-1 border-1 rounded-[3px]">
              <img src="/paypal.png" alt="PayPal" className="h-6 " />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
