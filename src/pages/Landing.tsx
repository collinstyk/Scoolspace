import Button from "../components/Button";
import Navbar from "../ui/Navbar";

export default function Landing() {
  const navItems = ["Product", "Resources", "About us"];
  return (
    <>
      <HeroSection navItems={navItems} />
    </>
  );
}

interface HeroSectionProps {
  navItems: String[];
}

function HeroSection({ navItems }: HeroSectionProps) {
  return (
    <div className="bg-radial-blue max-h-fit min-h-dvh w-full pt-16 text-white">
      <Navbar navItems={navItems} type="dark" />
      <div className="flex justify-center pb-48">
        <div className="mt-32 flex gap-[103px]">
          <div className="w-[460px]">
            <h1 className="text-[64px] font-bold leading-tight">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-base font-medium">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem.
            </p>
            <div className="mt-6 flex gap-4">
              <Button to="">Join our waitlist</Button>
              <Button variant="outlined-light" to="">
                Contact us
              </Button>
            </div>
          </div>
          <div className="h-full">
            <img
              src="src/assets/images/Hero-image.png"
              alt="hero-image"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

//bg-[#00A6DF1A]
