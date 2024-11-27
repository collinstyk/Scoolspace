import Button from "../components/Button";
import Navbar from "../ui/Navbar";
import FinalCTA from "../components/FinalCta";
import { ProductFeaturesSection } from "../ui/ProductFeaturesSection";
import SEO from "../Seo";

function Product() {
  const navItems = [
    { label: "Product", to: "/product" },
    { label: "Resources", to: "#" },
    { label: "About us", to: "#" },
  ];
  return (
    <div id="product" className="bg-white">
      <SEO path={window.location.pathname} />
      <Navbar
        navItems={navItems}
        type="light"
        btnText="Join our waitlist"
        btnTo="/waitlist"
        btnSize="normal"
        position="absolute"
      />
      <HeroSection />
      <ProductFeaturesSection />
      <Platforms />
      <FinalCTA />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="h-fit w-screen bg-grid1 bg-repeat-x pb-8">
      <div className="mx-auto pt-16">
        <div className="mx-auto mt-[132px] flex w-full justify-center gap-y-10 sm:w-[91.7%] sm:flex-col sm:items-center sm:justify-between lg:w-[960px] lg:flex-row lg:px-4 xl:mb-[296px] xl:w-[1200px] xl:px-[52px] xl:py-8">
          <div className="flex w-[85%] flex-col gap-6 text-center smMobile:w-[412px] lg:text-left">
            <div className="flex flex-col gap-2 text-base">
              <p className="mx-auto w-fit rounded-xl bg-blue-one/20 p-2 text-xs font-medium text-pitch-black/70 sm:hidden">
                The product
              </p>
              <h1 className="text-[32px] font-bold leading-tight text-pitch-black sm:text-[40px] lg:text-5xl">
                Where Teaching and Learning Come Together | A new environment to
                foster impactful learning
              </h1>
              <p className="text-base font-medium text-pitch-black sm:text-sm lg:text-base">
                Simplifying education systems and connecting school stakeholders
                through real time updates.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <Button
                className="px-4 py-[10px] text-xs font-semibold tablet:px-6 tablet:text-sm laptop:px-8 laptop:text-base"
                variant="secondary"
                to="/waitlist"
              >
                Join our waitlist
              </Button>
              <Button
                className="px-4 py-[10px] text-xs font-semibold tablet:px-6 tablet:text-sm laptop:px-8 laptop:text-base"
                variant="outlined-dark"
                to="/contact-us"
              >
                Contact us
              </Button>
            </div>
          </div>
          <div className="hidden h-full w-[412px] flex-col gap-[69px] sm:flex">
            {/*PLACEHOLDERS */}
            <div className="mx-auto h-[176px] w-[348px] rounded-xl bg-[#D9D9D9] lg:ml-auto lg:mr-0"></div>
            <div className="mx-auto h-[80px] w-[348px] rounded-xl bg-[#D9D9D9] lg:ml-auto lg:mr-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section className="mx-auto my-40 flex w-[91%] flex-col gap-4 smMobile:w-[90.2%] md:w-[704px] lg:w-[960px]">
      <h2 className="text-center text-2xl font-bold leading-[30px] text-pitch-black sm:text-[32px] lg:text-5xl">
        Never miss another class with{" "}
        <span className="text-blue-one">Scoolspace</span>.
      </h2>
      {/* <section className="flex w-full items-center justify-between">
        <article className="flex w-[540px] flex-col gap-4 text-pitch-black">
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
      </section> */}
      <div className="mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 text-pitch-black smMobile:w-[89.1%] smMobile:justify-between smMobile:gap-0 sm:w-[77.8%] lg:w-[548px]">
        <div className="flex cursor-pointer items-center gap-4">
          <div className="h-6 w-6">
            <img
              src="images/icon-googlePlaystore.svg"
              alt="google playstore"
              className="h-full w-full"
            />
          </div>
          <div>
            <p className="text-[10px] sm:text-sm">Get it on</p>
            <h4 className="text-xs font-semibold sm:text-lg">Google Play</h4>
          </div>
        </div>
        <div className="flex cursor-pointer items-center gap-4">
          <div className="h-6 w-6">
            <img
              src="images/icon-apple.svg"
              alt="apple store"
              className="h-full w-full"
            />
          </div>
          <div>
            <p className="text-[10px] sm:text-sm">Available on the</p>
            <h4 className="text-sm font-semibold sm:text-xl">App Store</h4>
          </div>
        </div>
        <div className="flex cursor-pointer items-center gap-4">
          <div className="h-6 w-6">
            <img
              src="images/icon-webapp.svg"
              alt="web app"
              className="h-full w-full"
            />
          </div>
          <div>
            <h4 className="text-xs font-semibold sm:text-lg">Web app</h4>
            <p className="text-[10px] sm:text-xs">Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
