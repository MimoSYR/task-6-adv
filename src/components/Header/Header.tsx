import type { HeaderProps } from "../../interfaces/interfaces";
import { Link, NavLink } from "react-router";
import { CiDark, CiLight } from "react-icons/ci";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = ({ logo, links, theme, toggleTheme }: HeaderProps) => {
  const [active, setActive] = useState<string>("blog");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLinkClicked = (link: string) => {
    setActive(link);
    setIsMenuOpen(false);
  };

  return (
    <header className="z-10 fixed top-0 left-0 right-0 px-28 pt-[30px] bg-white dark:bg-[#090D1F]">
      <div className="flex items-center justify-between py-2.5">
        {/* logo */}
        <div className="font-semibold text-xl ">
          <Link className="outline-none focus:outline-none" to={"/"}>
            {logo}
          </Link>
        </div>
        {/* Navbar */}
        <nav>
          {/* Desktop Navbar */}
          <div className="hidden lg:flex items-center">
            <div className="me-3.5 flex gap-3.5">
              {links.map((link) => (
                <NavLink
                  to={`/${link}`}
                  key={link}
                  onClick={() => handleLinkClicked(link)}
                  className={`p-2 text-xl hover:text-shadow-md text-shadow-amber-200 dark:text-shadow-amber-800 ${
                    active === link ? "text-blue-900 dark:text-blue-300" : ""
                  }`}>
                  {link}
                </NavLink>
              ))}
            </div>
            {/* theme btn */}
            <button
              onClick={toggleTheme}
              className={`py-2 px-2.5 hover:shadow-md shadow-amber-200 dark:shadow-amber-800 bg-[#090D1F] dark:bg-white rounded-full flex gap-4 items-center transition-all cursor-pointer ${
                theme === "light" ? "" : "flex-row-reverse"
              }`}>
              <span>
                {theme === "light" ? (
                  <CiLight color="white" size={"24px"} />
                ) : (
                  <CiDark color="#090D1F" size={"24px"} />
                )}
              </span>
              <div className="w-6 h-6 bg-white dark:bg-[#090D1F] rounded-full transition-all"></div>
            </button>
          </div>
          {/* Mobiles Navbar */}
          <div className="lg:hidden">
            {/* open menu btn */}
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
              <RxHamburgerMenu size={"32px"} />
            </button>

            {/* menu */}
            <div
              className={`absolute left-0 right-0 h-screen bg-white dark:bg-[#090D1F] z-10 flex items-center justify-center flex-col transition-all duration-400 ${
                isMenuOpen ? "top-0" : "-top-[200vh]"
              }`}>
              {/* logo */}
              <div className="font-semibold text-xl mb-[54px]">
                <Link onClick={() => setIsMenuOpen(false)} to={"/"}>{logo}</Link>
              </div>

              {/* links */}
              <div className="flex flex-col text-center gap-5">
                {links.map((link) => (
                  <NavLink
                    onClick={() => handleLinkClicked(link)}
                    to={`/${link}`}
                    key={link}
                    className={`p-2 ${
                      active === link ? "text-blue-900 dark:text-blue-300" : ""
                    }`}>
                    {link}
                  </NavLink>
                ))}
                {/* theme btn */}
                <button
                  onClick={toggleTheme}
                  className={`mt-5 py-2 px-2.5 hover:shadow-md bg-[#090D1F] dark:bg-white rounded-full flex gap-4 items-center transition-all cursor-pointer ${
                    theme === "light" ? "" : "flex-row-reverse"
                  }`}>
                  <span>
                    {theme === "light" ? (
                      <CiLight color="white" size={"24px"} />
                    ) : (
                      <CiDark color="#090D1F" size={"24px"} />
                    )}
                  </span>
                  <div className="w-6 h-6 bg-white dark:bg-[#090D1F] rounded-full transition-all"></div>
                </button>
              </div>

              {/* close btn */}
              <div
                onClick={() => setIsMenuOpen(false)}
                className="absolute bottom-5">
                <IoClose size={"32px"} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
