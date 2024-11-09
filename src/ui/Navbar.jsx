import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Navbar({ navItems, btnText, btnTo, type, btnSize, position }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [newType, setNewType] = useState(type);

  const toogleMobileNav = () => {
    setShowMobileNav((value) => !value);
  };

  // Handle scroll to change navbar background
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      // When back at the top, reset to "foggy"
      setNewType("foggy");
    } else {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust for navbar height
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition > sectionTop &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          if (sectionId === "hero") {
            setNewType("light-contrast");
          } else if (sectionId === "landing-2") {
            setNewType("dark-contrast");
          } else if (sectionId === "features") {
            setNewType("dark-contrast");
          } else if (sectionId === "landing-3") {
            setNewType("dark-contrast");
          }
        }
      });
    }
  };

  useEffect(() => {
    // Add scroll listener for the home page
    const isHomePage = document.getElementById("home") !== null;
    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, []);

  return (
    <header
      id="header"
      className={`flex h-[82px] w-full items-center justify-center ${
        position === "sticky" ? "sticky top-0 z-10 -mt-[82px]" : ""
      } ${
        newType === "light-contrast"
          ? "bg-pitch-black transition-colors duration-300"
          : newType === "dark-contrast"
            ? "bg-white transition-colors duration-300"
            : ""
      }`}
    >
      <nav
        id="navbar"
        className={`z-10 mx-auto flex w-[91%] items-center justify-between tablet:w-[704px] custom:w-[800px] laptop:w-[960px] desktop:w-[1200px]`}
      >
        {!showMobileNav && (
          <div className="h-[40px] items-center">
            <Link to="/">
              <img
                src={`${
                  newType === "light" || newType === "dark-contrast"
                    ? "images/Scoolspace-logo-dark.svg"
                    : "images/Scoolspace-logo.svg"
                }`}
                alt="Scoolspace logo"
                className="h-full w-full"
              />
            </Link>
          </div>
        )}

        {!showMobileNav && (
          <div
            className={`h-[40px] w-[40px] cursor-pointer custom:hidden`}
            onClick={toogleMobileNav}
          >
            <img
              src={
                newType === "dark-contrast" || newType === "light"
                  ? "images/icon-hamburger-dark.svg"
                  : "images/icon-harmburger.svg"
              }
              alt="hamburger icon"
              className="h-full w-full"
            />
          </div>
        )}

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-20 flex flex-col justify-between bg-white p-8 text-pitch-black transition-transform duration-500 ease-out ${
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
                  <a href="#" className="block text-lg font-semibold">
                    {el}
                  </a>
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
              newType === "light-contrast"
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
                  href="#"
                  className="flex h-full items-center justify-center px-4 py-2 text-center text-sm font-medium transition hover:text-opacity-80"
                >
                  {el}
                </a>
              </li>
            ))}
          </ul>

          <Button
            variant={`${
              newType === "light-contrast" || newType === "foggy"
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

// import { cva } from "class-variance-authority";
// import Button from "../components/Button";
// import { useEffect, useState } from "react";
// import { useNavigate, Link, useParams } from "react-router-dom";

// function Navbar({ navItems, btnText, btnTo, type, btnSize, position }) {
//   const [showMobileNav, setShowMobileNav] = useState(false);
//   const [newType, setNewType] = useState(type);

//   const toogleMobileNav = () => {
//     setShowMobileNav((value) => !value);
//   };

//   return (
//     <header
//       id="header"
//       className={`flex h-[82px] w-full items-center justify-center ${position === "sticky" ? "sticky top-0 z-10 -mt-[82px]" : ""} ${newType === "light-contrast" ? "bg-pitch-black" : newType === "dark-contrast" ? "bg-transparent" : ""}`}
//     >
//       <nav
//         id="navbar"
//         className={`desktop:w-[1200px] laptop:w-[960px] custom:w-[800px] tablet:w-[704px] z-10 mx-auto flex w-[91%] items-center justify-between`}
//       >
//         {!showMobileNav && (
//           <div className="h-[40px] items-center">
//             <Link to="/">
//               <img
//                 src={`${newType === "light" || newType === "dark-contrast" ? "images/Scoolspace-logo-dark.svg" : "images/Scoolspace-logo.svg"}`}
//                 alt="Scoolspace logo"
//                 className="h-full w-full"
//               />
//             </Link>
//           </div>
//         )}

//         {!showMobileNav && (
//           <div
//             className="custom:hidden h-[40px] w-[40px] cursor-pointer"
//             onClick={toogleMobileNav}
//           >
//             <img
//               src="images/icon-harmburger.svg"
//               alt="hamburger icon"
//               className="h-full w-full"
//             />
//           </div>
//         )}

//         {/* {showMobileNav && (
//         <div className="fixed h-dvh w-dvw bg-white px-8 pb-8 pt-6 text-pitch-black">
//           <div className="flex w-full justify-between">
//             <div>
//               <img src="images/Scoolspace-logo-dark.svg" alt="" />
//             </div>
//             <div>
//               <img src="images/icon-close.svg" alt="close icon" />
//             </div>
//           </div>
//           <ul className="flex flex-col">
//             <li>
//               <a href="" className="h-full w-full">
//                 Product
//               </a>
//             </li>
//             <li>
//               <a href="" className="h-full w-full">
//                 Resources
//               </a>
//             </li>
//             <li>
//               <a href="" className="h-full w-full">
//                 About us
//               </a>
//             </li>
//           </ul>
//         </div>
//       )} */}

//         {/* Mobile Navigation */}
//         <div
//           className={`fixed inset-0 z-20 flex flex-col justify-between bg-white p-8 text-pitch-black transition-transform duration-300 ${
//             showMobileNav ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div>
//             {/* Close Icon */}
//             <div className="flex justify-between">
//               <div>
//                 <img src="images/Scoolspace-logo-dark.svg" alt="Logo" />
//               </div>
//               <div className="cursor-pointer" onClick={toogleMobileNav}>
//                 <img src="images/icon-close.svg" alt="close icon" />
//               </div>
//             </div>

//             {/* Mobile Navigation Items */}
//             <ul className="mt-16 flex flex-col space-y-8 px-12">
//               {navItems.map((el, index) => (
//                 <li key={index}>
//                   <a href="#" className="block text-sm font-semibold">
//                     {el}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex flex-col gap-6">
//             <Button variant="primary" size="full-medium">
//               Join our waitlist
//             </Button>
//             <Button variant="secondary" size="full-medium">
//               Contact us
//             </Button>
//           </div>
//         </div>

//         <div className="custom:flex hidden items-center gap-x-6 text-base font-normal">
//           <div
//             className={
//               newType === "oceanic"
//                 ? "h-[42px] w-fit rounded-xl bg-gradient-to-r from-transparent to-white/20 p-[1px]"
//                 : newType === "foggy"
//                   ? ""
//                   : ""
//             }
//           >
//             <ul
//               className={`flex list-none gap-2 overflow-hidden rounded-xl ${newType === "oceanic" ? "bg-gradient-to-r from-white/10 to-blue-950 text-white" : newType === "light-contrast" || newType === "foggy" ? "border-[1px] border-white/20 bg-gradient-to-r from-white/15 to-white/5 text-white" : "bg-gradient-to-br from-[#D0edf8] to-[#b8e6f6] text-[#1E1E1E]"}`}
//             >
//               {navItems.map((el, index) => (
//                 <li
//                   key={`${index}`}
//                   className="h-[40px] justify-center rounded-xl hover:backdrop-blur-xl"
//                 >
//                   <a
//                     href="#"
//                     className="inline-block h-full px-4 py-2 text-center align-middle text-sm font-medium transition hover:text-opacity-80"
//                   >
//                     {el}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <Button
//             variant={`${newType === "oceanic" || newType === "light-contrast" || newType === "foggy" ? "primary" : "secondary"}`}
//             size={btnSize}
//             to={btnTo}
//             className="text-sm font-semibold"
//           >
//             {btnText}
//           </Button>
//         </div>
//       </nav>
//     </header>
//   );
// }

// const NavbarStyles = cva();

// export default Navbar;

// // ${type === "dark" ? "bg-gradient-to-r from-white/10 to-transparent text-white" : "bg-[#00ADE6A3]/35 text-[#1E1E1E]"}
