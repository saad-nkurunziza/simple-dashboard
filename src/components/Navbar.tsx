import { navLinks } from "@/constants";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <nav className="relative mx-auto p-6">
      <div className="flex items-center justify-between w-full">
        <div className="pt-2">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="hidden space-x-6 md:flex">
          {navLinks.map(({ link, path }) => (
            <a
              href={path}
              className="text-darkGrayishBlue hover:text-white text-sm"
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
          className="absolute flex flex-col  py-4 pl-4 pr-8 top-16 border border-primary right-6 gap-4"
        >
          <h2 className="font-semibold text-base ml-2 text-white/90">Menu</h2>
          {navLinks.map(({ link, path }) => (
            <a
              href={path}
              className="text-darkGrayishBlue hover:text-white text-sm"
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
