import Button from "../components/Button";
import Navbar from "../ui/Navbar";
import { FeaturesSection } from "../ui/FeaturesSection";

function Product() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Platforms />
    </>
  );
}

function HeroSection() {
  const navItems = ["Product", "Resources", "About us"];
  return (
    <section className="h-full min-h-dvh min-w-[1280px] bg-light-linear-blue pb-32">
      <div className="bg-grid pb-[69px] pt-16">
        <Navbar navItems={navItems} type="light" />
        <div className="mx-auto mt-[168px] flex w-[960px] justify-between">
          <div className="flex w-[412px] flex-col gap-6">
            <div className="flex flex-col gap-2 text-base">
              <p className="w-fit rounded-xl bg-blue-one/20 p-2 font-normal text-pitch-black/70">
                The product
              </p>
              <h1 className="text-[64px] font-bold leading-tight text-pitch-black">
                Welcome to the future of education
              </h1>
              <p className="font-medium">
                Sed ut perspiciatis unde omnis iste natus error sit rem
                voluptatem accusantius doloremque laudantium, totam.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" to="">
                Join our waitlist
              </Button>
              <Button variant="outlined-dark" to="">
                Contact us
              </Button>
            </div>
          </div>
          <div className="flex h-full w-[412px] flex-col gap-[69px]">
            {/*PLACEHOLDERS */}
            <div className="mr-auto h-[204px] w-[341px] rounded-xl bg-[#D9D9D9]"></div>
            <div className="ml-auto h-[136px] w-[341px] rounded-xl bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <main className="mx-auto my-40 flex w-[960px] flex-col gap-16">
      <section className="flex w-full items-center justify-between">
        <article className="flex w-[540px] flex-col gap-4 text-pitch-black">
          <h2 className="text-[52px] font-medium leading-[66px]">
            Your school, anytime and anywhere
          </h2>
          <p className="text-lg">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos.
          </p>
        </article>
        <div className="flex gap-7">
          <Button to="">Join our waitlist</Button>
          <Button to="" variant="secondary">
            Contact us
          </Button>
        </div>
      </section>
      <div className="flex w-full justify-between text-pitch-black">
        <div className="justfy-between flex cursor-pointer items-center gap-4 px-6 py-3">
          <div>
            <img
              src="src/assets/images/icon-googlePlaystore.svg"
              alt="google-playstore"
            />
          </div>
          <div>
            <p className="text-sm">Get it on</p>
            <h4 className="text-2xl">Google Play</h4>
          </div>
        </div>
        <div className="justfy-between flex cursor-pointer items-center gap-4 px-6 py-3">
          <div>
            <img src="src/assets/images/icon-apple.svg" alt="apple" />
          </div>
          <div>
            <p className="text-sm">Available on the</p>
            <h4 className="text-2xl">App Store</h4>
          </div>
        </div>
        <div className="flex cursor-pointer items-center justify-between gap-4 px-6 py-3">
          <div>
            <img src="src/assets/images/icon-apple.svg" alt="apple" />
          </div>
          <div>
            <h4 className="text-2xl">Web app</h4>
            <p className="text-sm">Available</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
