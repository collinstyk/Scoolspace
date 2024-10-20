import Button from "../components/Button";

interface NavbarProps {
  navItems: String[];
  type: String;
}

function Navbar({ navItems, type }: NavbarProps) {
  return (
    <nav className="mx-auto flex h-[42px] w-[68rem] items-center justify-between">
      <div className="flex h-[40px] items-center gap-x-2.5">
        <img
          src="src/assets/images/icon-logomark.svg"
          alt="Scoolspace logo"
          className="h-10 w-10"
        />
        <h1
          className={`text-[22px] font-medium ${type === "dark" ? "text-white" : "text-[#00223A]"}`}
        >
          Scoolspace
        </h1>
      </div>
      <div className="flex items-center gap-x-6 text-base font-normal">
        <ul
          className={`flex list-none gap-2 overflow-hidden rounded-xl backdrop-blur-lg ${type === "dark" ? "bg-white/5 text-white" : "bg-[#00ADE6A3]/35 text-[#1E1E1E]"}`}
        >
          {navItems.map((el, index) => (
            <li
              key={`${index}`}
              className="h-[40px] rounded-xl hover:backdrop-blur-md"
            >
              <a href="#" className="inline-block px-4 py-2">
                {el}
              </a>
            </li>
          ))}
        </ul>
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
