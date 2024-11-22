import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Navbar({ navItems, btnText, btnTo, type, btnSize, position }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [newType, setNewType] = useState(type);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [isTop, setIsTop] = useState(window.scrollY === 0);
  const [opacity, setOpacity] = useState(0);
  const [headerBg, setHeaderBg] = useState("bg-transparent");
  const isHomePage = document.getElementById("home") !== null;
  const [bgContainerClass, setbgContainerClass] = useState("");

  const toogleMobileNav = () => {
    setShowMobileNav((value) => !value);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    // Handle scroll to change navbar background
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTop(window.scrollY === 0);
      else setIsTop(window.scrollY === 0);
      const landingSection3 = document.getElementById("landing-3");
      if (!landingSection3) return;
      const landing3Top = Math.max(
        0 + landingSection3.getBoundingClientRect().top / 82,
        0,
      );
      const scrollRatio = Math.min(0 + window.scrollY / 500, 1);

      if (landing3Top > 1) {
        setOpacity(scrollRatio);
        setHeaderBg("bg-transparent");
      } else {
        setOpacity(landing3Top);
        setHeaderBg("bg-pitch-black");
      }

      if (opacity > 0.99) {
        setNewType("light");
      } else {
        setNewType("foggy");
      }
    };

    // Add scroll listener for the home page

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      setbgContainerClass("absolute h-full w-full bg-white");
    } else {
      setbgContainerClass("hidden");
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    window.scrollY,
    opacity,
    setOpacity,
    isHomePage,
    showMobileNav,
    isMobile,
  ]);

  return (
    <header
      id="header"
      className={`flex h-[82px] w-full items-center justify-center will-change-bgColor ${
        position === "fixed"
          ? "fixed top-0 z-10"
          : position === "absolute"
            ? "absolute top-0"
            : ""
      } ${showMobileNav ? "border-b border-pitch-black/20 bg-white" : ""} ${headerBg} ${showMobileNav ? "fixed top-0 z-10" : ""}`}
    >
      <div style={{ opacity }} className={bgContainerClass}></div>
      <nav
        id="navbar"
        className={`z-10 mx-auto flex w-[91%] items-center justify-between tablet:w-[704px] lg:w-[960px] desktop:w-[1200px]`}
      >
        <div>
          <Link to="/" className="flex items-center space-x-[10px]">
            <img
              src="images/Logomark.svg"
              alt="Scoolspace logo"
              className="h-10 w-10"
              // className={`h-10 ${showMobileNav ? "w-[154px]" : "w-[178px]"}`}
            />
            <h2
              className={`text-[22px] font-bold ${opacity === 1 || showMobileNav || !isHomePage ? "text-pitch-black" : "text-white"} ${showMobileNav ? "mt-[1px]" : "hidden sm:block"}`}
            >
              Scoolspace
            </h2>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`flex h-[40px] w-[40px] cursor-pointer items-center justify-center custom:hidden`}
          onClick={toogleMobileNav}
        >
          <div className="group relative flex h-8 w-8 cursor-pointer flex-col items-center justify-center">
            <span
              className={`block h-1 w-8 transition-transform duration-300 ease-in-out ${showMobileNav ? "translate-y-2.5 -rotate-45 bg-pitch-black" : opacity > 0.99 || !isHomePage ? "bg-pitch-black" : "bg-white"}`}
            ></span>

            <span
              className={`mb-1.5 mt-1.5 block h-1 w-8 transition-all duration-300 ease-in-out ${showMobileNav ? "scale-x-0 bg-pitch-black" : opacity > 0.99 || !isHomePage ? "bg-pitch-black" : "bg-white"}`}
            ></span>

            <span
              className={`block h-1 w-8 transition-transform duration-300 ease-in-out ${showMobileNav ? "-translate-y-2.5 rotate-45 bg-pitch-black" : opacity > 0.99 || !isHomePage ? "bg-pitch-black" : "bg-white"}`}
            ></span>
          </div>

          {/* <img
              src={
                newType === "dark-contrast" || newType === "light"
                  ? "images/icon-hamburger-dark.svg"
                  : "images/icon-harmburger.svg"
              }
              alt="hamburger icon"
              className="h-full w-full"
            /> */}
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bottom-0 top-[82px] z-20 flex flex-col justify-between bg-white p-8 text-pitch-black transition-all duration-500 ease-out ${
            showMobileNav
              ? "max-h-full max-w-full"
              : "max-h-0 overflow-hidden py-0 opacity-0"
          }`}
        >
          <div>
            <ul
              className={`mt-8 flex flex-col space-y-4 pl-6 pr-12 ${showMobileNav ? "" : ""}`}
            >
              {navItems.map((el, index) => (
                <li key={index}>
                  <Link to={el.to} className="block text-xl font-semibold">
                    {el.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Button
              variant="primary"
              size="full-medium"
              to="/join-the-waitlist"
            >
              Join our waitlist
            </Button>
            <Button variant="secondary" size="full-medium" to="/contact-us">
              Contact us
            </Button>
          </div>
        </div>

        <div className="hidden items-center gap-x-6 text-base font-normal custom:flex">
          <ul
            className={`flex list-none gap-2 overflow-hidden rounded-xl ${
              newType === "dark"
                ? "bg-gradient-to-r from-white/15 to-white/5 text-white"
                : newType === "foggy"
                  ? "border border-white/20 bg-gradient-to-r from-white/15 to-white/5 text-white"
                  : "bg-[#D0edf8] to-[#b8e6f6] text-[#1E1E1E]"
            }`}
          >
            {navItems.map((el, index) => (
              <li
                key={index}
                className="flex h-[40px] items-center justify-center rounded-xl hover:backdrop-blur-xl"
              >
                <a
                  href={el.to}
                  className="flex h-full items-center justify-center px-4 py-2 text-center text-sm font-medium transition hover:text-opacity-80"
                >
                  {el.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            variant={`${
              newType === "light-contrast" ||
              newType === "foggy" ||
              newType === "blur"
                ? "primary"
                : "secondary"
            }`}
            size={btnSize}
            to={btnTo}
            className="h-full text-sm font-semibold"
          >
            {btnText}
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

// ${type === "dark" ? "bg-gradient-to-r from-white/10 to-transparent text-white" : "bg-[#00ADE6A3]/35 text-[#1E1E1E]"}
