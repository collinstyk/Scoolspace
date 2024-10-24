import Button from "../components/Button";

function Navbar({ navItems, type }) {
  return (
    <nav className="mx-auto flex h-[42px] w-full items-center justify-between">
      <div className="h-[40px] items-center">
        <img
          src="images/Scoolspace-logo.svg"
          alt="Scoolspace logo"
          className="h-full w-full"
        />
      </div>
      <div className="flex items-center gap-x-6 text-base font-normal">
        <div className="w-fit rounded-xl bg-gradient-to-r from-transparent to-white/20 p-[1px]">
          <ul className="flex list-none gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-white/20 to-blue-950 text-white">
            {navItems.map((el, index) => (
              <li
                key={`${index}`}
                className="h-[40px] rounded-xl hover:backdrop-blur-xl"
              >
                <a
                  href="#"
                  className="inline-block px-4 py-2 transition hover:text-opacity-80"
                >
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Button
          variant={`${type === "dark" ? "primary" : "secondary"}`} // | outlined-light | outlined-dark
          size="medium"
          to="#"
        >
          Join our waitlist
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;

// ${type === "dark" ? "bg-gradient-to-r from-white/10 to-transparent text-white" : "bg-[#00ADE6A3]/35 text-[#1E1E1E]"}
