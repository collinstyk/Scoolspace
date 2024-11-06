import { cva } from "class-variance-authority";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ navItems, btnText, btnTo, type, btnSize, position }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toogleMobileNav = () => {
    setShowMobileNav((value) => !value);
  };

  return (
    <nav
      className={`desktop:w-[1200px] laptop:w-[960px] custom:w-[800px] tablet:w-[704px] top-6 z-10 mx-auto flex h-[42px] w-[91%] items-center justify-between ${position === "sticky" ? "sticky -mt-[42px]" : ""}`}
    >
      {!showMobileNav && (
        <div className="h-[40px] items-center">
          <img
            src={`${type === "light" ? "images/Scoolspace-logo-dark.svg" : "images/Scoolspace-logo.svg"}`}
            alt="Scoolspace logo"
            className="h-full w-full"
          />
        </div>
      )}

      {!showMobileNav && (
        <div
          className="custom:hidden h-[40px] w-[40px] cursor-pointer"
          onClick={toogleMobileNav}
        >
          <img
            src="images/icon-harmburger.svg"
            alt="hamburger icon"
            className="h-full w-full"
          />
        </div>
      )}

      {/* {showMobileNav && (
        <div className="fixed h-dvh w-dvw bg-white px-8 pb-8 pt-6 text-pitch-black">
          <div className="flex w-full justify-between">
            <div>
              <img src="images/Scoolspace-logo-dark.svg" alt="" />
            </div>
            <div>
              <img src="images/icon-close.svg" alt="close icon" />
            </div>
          </div>
          <ul className="flex flex-col">
            <li>
              <a href="" className="h-full w-full">
                Product
              </a>
            </li>
            <li>
              <a href="" className="h-full w-full">
                Resources
              </a>
            </li>
            <li>
              <a href="" className="h-full w-full">
                About us
              </a>
            </li>
          </ul>
        </div>
      )} */}

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-20 flex flex-col justify-between bg-white p-8 text-pitch-black transition-transform duration-300 ${
          showMobileNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Close Icon */}
          <div className="flex justify-between">
            <div>
              <img src="images/Scoolspace-logo-dark.svg" alt="Logo" />
            </div>
            <div className="cursor-pointer" onClick={toogleMobileNav}>
              <img src="images/icon-close.svg" alt="close icon" />
            </div>
          </div>

          {/* Mobile Navigation Items */}
          <ul className="mt-16 flex flex-col space-y-8 px-12">
            {navItems.map((el, index) => (
              <li key={index}>
                <a href="#" className="block text-sm font-semibold">
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <Button variant="primary" size="full-medium">
            Join our waitlist
          </Button>
          <Button variant="secondary" size="full-medium">
            Contact us
          </Button>
        </div>
      </div>

      <div className="custom:flex hidden items-center gap-x-6 text-base font-normal">
        <div
          className={
            type === "oceanic"
              ? "h-[42px] w-fit rounded-xl bg-gradient-to-r from-transparent to-white/20 p-[1px]"
              : type === "foggy"
                ? ""
                : ""
          }
        >
          <ul
            className={`flex list-none gap-2 overflow-hidden rounded-xl ${type === "oceanic" ? "bg-gradient-to-r from-white/10 to-blue-950 text-white" : type === "foggy" ? "border-[1px] border-white/20 bg-gradient-to-r from-white/15 to-white/5 text-white" : "bg-gradient-to-br from-[#D0edf8] to-[#b8e6f6] text-[#1E1E1E]"}`}
          >
            {navItems.map((el, index) => (
              <li
                key={`${index}`}
                className="h-[40px] justify-center rounded-xl hover:backdrop-blur-xl"
              >
                <a
                  href="#"
                  className="inline-block h-full px-4 py-2 text-center align-middle text-sm font-medium transition hover:text-opacity-80"
                >
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Button
          variant={`${type === "oceanic" ? "primary" : type === "foggy" ? "primary" : "secondary"}`}
          size={btnSize}
          to={btnTo}
          className="text-sm font-semibold"
        >
          {btnText}
        </Button>
      </div>
    </nav>
  );
}

const NavbarStyles = cva();

export default Navbar;

// ${type === "dark" ? "bg-gradient-to-r from-white/10 to-transparent text-white" : "bg-[#00ADE6A3]/35 text-[#1E1E1E]"}
