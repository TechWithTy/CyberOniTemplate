"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Moon, Sun } from "lucide-react";
import { setCookie } from 'cookies-next';

export default function NavBar({ session, darkMode }: { session: Session | null, darkMode: boolean }) {
  const scrolled = useScroll(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  const toggleExploreDropdown = () => {
    setExploreDropdownOpen(!exploreDropdownOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 w-screen ${scrolled ? "hidden" : 'flex justify-center items-center'} justify-center backdrop-blur-sm border-b-2 border-white/50  z-50 lg:h-24`}
      >
        <div className="container flex h-16 items-center justify-between w-full text-black dark:text-white">

          <Link href="/" className="flex items-center font-display text-2xl w-fit">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <div>CyberOni</div>
          </Link>


          <div className={` ${!mobileMenuOpen ? 'hidden' : 'flex fixed right-0 h-screen w-screen pt-10 animate-slide-left-fade text-center z-[100]'}  bg-white dark:bg-zinc-950 gap-10  top-full h-screen w-full flex-col items-center justify-start lg:pt-0 lg:static lg:flex lg:flex-row lg:gap-5 lg:justify-center lg:h-full lg:bg-inherit lg:w-fit`}>

            <div className="relative group">
              <button
                onClick={toggleProductsDropdown}
                className="md:focus:outline-none hover:text-blue-500"
              >
                Products
                <ChevronDown className="text-blue-400 inline-block"></ChevronDown>
              </button>
              {productsDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-gray-700 text-white p-2 space-y-1">
                  <li>
                    <Link href="#">shop</Link>
                  </li>
                  <li>
                    <Link href="#">Cart</Link>
                  </li>

                </ul>
              )}
            </div>
            <Link href="#" className="hover:text-blue-500">
              Team
            </Link>
            <Link href="/enterprise" className="hover:text-blue-500">
              Enterprise
            </Link>
            <div className="relative group">
              <button

                className=" peer md:focus:outline-none hover:text-blue-500"
              >
                Explore
                <ChevronDown className="text-blue-400 inline-block"></ChevronDown>
              </button>
              {(
                <ul className="hidden peer-focus:block hover:block absolute left-0 mt-2 bg-gray-700 text-white p-2 space-y-1">
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/services">services</Link>
                  </li>
                  <li>
                    <Link href="#"></Link>
                  </li>
                </ul>
              )}
            </div>
            <Link href="#" className="hover:text-blue-500">
              Marketplace
            </Link>
            <Link href="#" className="hover:text-blue-500">
              Pricing
            </Link>

            <Link href={'/api/auth/signin'} className="ring-[#9E9C9C] ring-2 dark:text-white px-4 py-2 rounded-lg hover:shadow-md flex  lg:hidden" >Sign In</Link>
            <Link href={'/api/auth/signin'} className="ring-[#9E9C9C] ring-2 dark:text-white px-4 py-2 rounded-lg hover:shadow-md flex lg:hidden">
              Sign Up
            </Link>
          </div>
          <div className=" items-center flex gap-3 w-fit p-3">
            <div className="relative block">
              <input
                type="text"
                placeholder="Search"
                className="dark:bg-[#272F43] text-white rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              </button>
            </div>
            <Link href={'/api/auth/signin'} className="hover:text-blue-500 hidden lg:flex w-fit" ><p>Sign In</p></Link>
            <Link href={'/api/auth/signin'} className="ring-[#9E9C9C] ring-2 dark:text-white px-4 py-2 rounded-lg hover:shadow-md hidden lg:flex w-fit">
              <p>Sign Up</p>
            </Link>
            <ToggleDarkMode enabled={darkMode} />

          </div>

          <div className="block lg:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Navigation Options"
              className="peer/nav z-50"
            >
              <Menu></Menu>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


function ToggleDarkMode({ enabled }: { enabled: boolean }) {
  const [isToggled, setIsToggled] = useState(enabled);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {

      const root = document.getElementsByTagName('body')[0];
      if (isToggled) {

        setCookie('theme', 'dark')
        root.classList.add('dark')
      }
      else {
        // cookies().set('theme', 'light');
        setCookie('theme', 'light')

        root.classList.remove('dark')
      }

    }


  }, [isToggled]);

  return (
    <div className="container ">
      <label className="flex items-center cursor-pointer w-6 h-6">
        <div className="relative">
          <input
            type="checkbox"
            className="hidden"
            checked={isToggled}
            onChange={handleToggle}
          />
          <div className=" w-12 h-6 bg-gray-400 rounded-full shadow-inner"></div>
          <div
            className={`absolute w-6 h-6  flex justify-center items-center rounded-full shadow inset-y-0 left-0  bg-gray-300 ${isToggled ? 'transform translate-x-full bg-blue-500' : ''}`}
          >
            {isToggled ? <Moon className='p-1' /> : <Sun className='p-1' />}

          </div>
        </div>
      </label>
    </div>
  );
}
