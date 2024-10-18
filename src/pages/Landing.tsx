import Button from "../components/Button";
import Navbar from "../ui/Navbar";

export default function Landing() {
  return (
    <>
      <HeroSection />
      <LandingSection2 />
    </>
  );
}

function HeroSection() {
  const navItems = ["Product", "Resources", "About us"];
  return (
    <section className="bg-radial-blue max-h-fit min-h-dvh w-full min-w-[1280px] pt-16 text-white">
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
          <div>
            <img
              src="src/assets/images/Hero image.svg"
              alt="hero-image"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LandingSection2() {
  return (
    <section className="h-[939px] bg-white">
      <div className="bg-grid h-[70%] pt-32">
        <div className="mx-auto mb-32 flex w-[960px] items-center justify-between">
          <h3 className="text-pitch-black w-[400px] text-5xl font-bold">
            Big text for short section{" "}
            <span className="text-blue-one">header</span>.
          </h3>
          <p className="text-pitch-black w-[400px] text-[22px] font-normal">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum
          </p>
        </div>
        <div className="bg-blue-one relative mx-auto h-[584px] max-w-[1088px] overflow-hidden rounded-2xl pt-10 text-white">
          <div className="mx-auto mb-6 flex w-[896px] justify-between">
            <div className="w-[200px]">
              <div className="flex items-center gap-4">
                <img src="src/assets/images/icon-book.svg" alt="" />
                <h5 className="text-lg font-medium">Schools</h5>
              </div>
              <p className="font-montserat text-sm font-medium">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo velit, sed quia non
              </p>
            </div>
            <div className="w-[200px]">
              <div className="flex items-center gap-4">
                <img src="src/assets/images/icon-heart.svg" alt="" />
                <h5 className="text-lg font-medium">Parents</h5>
              </div>
              <p className="font-montserat text-sm font-medium">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo velit, sed quia non
              </p>
            </div>
            <div className="w-[200px]">
              <div className="flex items-center gap-4">
                <img src="src/assets/images/icon-chalkboard.svg" alt="" />
                <h5 className="text-lg font-medium">Teachers</h5>
              </div>
              <p className="font-montserat text-sm font-medium">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo velit, sed quia non
              </p>
            </div>
            <div className="w-[200px]">
              <div className="flex items-center gap-4">
                <img src="src/assets/images/icon-person.svg" alt="" />
                <h5 className="text-lg font-medium">Students</h5>
              </div>
              <p className="font-montserat text-sm font-medium">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo velit, sed quia non
              </p>
            </div>
          </div>
          <div className="mx-auto h-[420px] w-[896px] rounded-t-2xl bg-white"></div>
        </div>
      </div>
    </section>
  );
}

//bg-[#00A6DF1A]
