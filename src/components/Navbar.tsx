import { navLinks } from "@/constants";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <nav className="relative p-6 mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="pt-2">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="hidden space-x-6 md:flex">
          {navLinks.map(({ link, path }) => (
            <a
              href={path}
              className="text-sm text-darkGrayishBlue hover:text-black"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="md:hidden" onClick={showMenu}>
          <FaHamburger />
        </div>
      </div>

      {menu && (
        <div
          id="menu"
          className="absolute flex flex-col gap-4 py-4 pl-4 pr-8 border top-16 border-primary right-6"
        >
          <h2 className="ml-2 text-base font-semibold text-white/90">Menu</h2>
          {navLinks.map(({ link, path }) => (
            <a
              href={path}
              className="text-sm text-darkGrayishBlue hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
