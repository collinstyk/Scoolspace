import Button from "../components/Button";
import Navbar from "../ui/Navbar";
import FinalCTA from "../components/FinalCta";
import { ProductFeaturesSection } from "../ui/ProductFeaturesSection";
import SEO from "../Seo";

function Product() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: "Scoolspace",

    url: "https://www.scoolspace.com/product",

    logo: "https://www.scoolspace.com/images/Scoolspace favicon.svg",
  };
  const navItems = [
    { label: "Product", to: "/product" },
    { label: "Resources", to: "#" },
    { label: "About us", to: "#" },
  ];
  return (
    <div className="bg-grid1 bg-repeat-x">
      <SEO
        title="Scoolspace | About the Product"
        schema={schema}
        description="product"
      />
      <Navbar
        navItems={navItems}
        type="light"
        btnText="Join our waitlist"
        btnTo="/join-the-waitlist"
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
    <section className="h-full min-h-dvh w-screen bg-light-linear-blue pb-32">
      <div className="pb-[69px] pt-16">
        <div className="mx-auto mt-[168px] flex w-full justify-center sm:justify-between">
          <div className="smMobile:w-[412px] flex w-[85%] flex-col gap-6 text-center">
            <div className="flex flex-col gap-2 text-base">
              <p className="mx-auto w-fit rounded-xl bg-blue-one/20 p-2 font-normal text-pitch-black/70 sm:hidden">
                The product
              </p>
              <h1 className="text-[32px] font-bold leading-tight text-pitch-black sm:text-[40px] lg:text-5xl">
                Where teaching and learning come together
              </h1>
              <p className="text-base font-medium sm:text-sm lg:text-base">
                Sed ut perspiciatis unde omnis iste natus error sit rem
                voluptatem accusantius doloremque laudantium, totam.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button
                className="px-4 py-[10px] text-xs font-semibold tablet:px-6 tablet:text-sm laptop:px-8 laptop:text-base"
                variant="secondary"
                to="/join-the-waitlist"
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
    <main className="smMobile:w-[442px] mx-auto my-40 flex w-[91%] flex-col gap-16 lg:w-[960px]">
      <section className="flex w-full items-center justify-between">
        <article className="flex w-[540px] flex-col gap-4 text-pitch-black">
          <h2 className="text-center text-2xl font-bold leading-[30px] sm:text-[32px] lg:text-5xl">
            Never miss another class with{" "}
            <span className="text-blue-one">Scoolspace</span>.
          </h2>
          {/* <p className="text-lg">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos.
          </p> */}
        </article>
        <div className="flex gap-7">
          {/* <Button to="">Join our waitlist</Button>
          <Button to="" variant="secondary">
            Contact us
          </Button> */}
        </div>
      </section>
      <div className="mx-auto flex w-[394px] justify-between text-pitch-black">
        <div className="flex w-[118px] cursor-pointer items-center gap-4">
          <div className="h-6 w-6">
            <img src="images/icon-googlePlaystore.svg" alt="google-playstore" />
          </div>
          <div>
            <p className="text-[10px] sm:text-sm">Get it on</p>
            <h4 className="text-xs font-semibold sm:text-lg">Google Play</h4>
          </div>
        </div>
        <div className="flex w-[118px] cursor-pointer items-center gap-4">
          <div className="h-6 w-6">
            <img src="images/icon-apple.svg" alt="apple" />
          </div>
          <div>
            <p className="text-[10px] sm:text-sm">Available on the</p>
            <h4 className="text-sm font-semibold sm:text-xl">App Store</h4>
          </div>
        </div>
        <div className="flex w-[118px] cursor-pointer items-center gap-4">
          <div className="h-6 w-6">
            <img src="images/icon-webapp.svg" alt="apple" />
          </div>
          <div>
            <h4 className="text-xs font-semibold sm:text-lg">Web app</h4>
            <p className="text-[10px] sm:text-xs">Available</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
