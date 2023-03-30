import React, { useCallback, useState, useEffect } from "react";
import { BiChevronDownCircle, BiSearchAlt, BiBell } from "react-icons/bi";

import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggle = useCallback(() => {
    setToggleMenu((curr) => !curr);
  }, []);
  const toggleOpenAccount = useCallback(() => {
    setToggleAccount((curr) => !curr);
  }, []);

  return (
    <nav className="w-full fixed z-40 ">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        } `}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          onClick={toggle}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BiChevronDownCircle
            className={`w-6 text-white fill-white transition ${
              toggleMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={toggleMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BiSearchAlt />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BiBell />
          </div>

          <div
            onClick={toggleOpenAccount}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="profile image" />
            </div>
            <BiChevronDownCircle
              className={`w-6 text-white fill-white transition ${
                toggleAccount ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={toggleAccount} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
