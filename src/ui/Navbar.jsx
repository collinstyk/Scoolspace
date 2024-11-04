import { cva } from "class-variance-authority";
import Button from "../components/Button";

function Navbar({ navItems, btnText, type, btnSize }) {
  return (
    <nav className="desktop:w-[1200px] laptop:w-[960px] custom:w-[800px] tablet:w-[704px] sticky top-6 z-10 mx-auto -mt-[42px] flex h-[42px] w-[91%] items-center justify-between">
      <div className="h-[40px] items-center">
        <img
          src={`${type === "light" ? "images/Scoolspace-logo-dark.svg" : "images/Scoolspace-logo.svg"}`}
          alt="Scoolspace logo"
          className="h-full w-full"
        />
      </div>

      <div className="custom:hidden h-[40px] w-[40px] cursor-pointer">
        <img
          src="images/icon-harmburger.svg"
          alt="hamburger icon"
          className="h-full w-full"
        />
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
            className={`flex list-none gap-2 overflow-hidden rounded-xl ${type === "oceanic" ? "bg-gradient-to-r from-white/10 to-blue-950 text-white" : type === "foggy" ? "border-[1px] border-white/20 bg-gradient-to-r from-white/15 to-white/5" : "bg-gradient-to-br from-[#D0edf8] to-[#b8e6f6] text-[#1E1E1E]"}`}
          >
            {navItems.map((el, index) => (
              <li
                key={`${index}`}
                className="h-[40px] justify-center rounded-xl hover:backdrop-blur-xl"
              >
                <a
                  href="#"
                  className="inline-block h-full px-4 py-2 text-center align-middle text-lg font-medium transition hover:text-opacity-80"
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
          to="#"
          className="font-semibold"
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
