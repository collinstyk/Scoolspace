import { useRef, useState } from "react";
import Button from "../components/Button";
import FinalCTA from "../components/FinalCta";
import SEO from "../Seo";
import Navbar from "../ui/Navbar";

export default function Landing() {
  const navItems = [
    { label: "Product", to: "product" },
    { label: "Resources", to: "#" },
    { label: "About us", to: "#" },
  ];
  return (
    <div id="home" className="w-full bg-white">
      <SEO path={window.location.pathname} />
      <Navbar
        navItems={navItems}
        btnText="Join our waitlist"
        btnTo="waitlist"
        type="foggy"
        btnSize="normal"
        position="fixed"
      />
      <HeroSection />
      <LandingSection2 />
      <Features />
      <LandingSection3 />
      <FinalCTA />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative w-full bg-white">
      <div className="bg-hero-pattern1 bg-cover bg-[50%_0%] bg-no-repeat bg-blend-multiply">
        <section className="z-10 mx-auto max-h-fit min-h-dvh w-[91%] pt-8 text-white tablet:w-[704px] laptop:w-[960px] desktop:w-[1200px]">
          <div className="flex w-full justify-center pb-48">
            <div className="mt-32 flex w-full items-center justify-between desktop:mt-[20vh]">
              <div className="flex w-full flex-col gap-4 tablet:w-1/2">
                <h1 className="text-[32px] font-bold leading-tight tracking-tight tablet:text-[40px] laptop:text-[48px] desktop:text-[64px]">
                  A Simpler Way
                  <br /> to Teach, Learn,
                  <br /> and Love
                </h1>
                <p className="text-base font-medium tablet:text-sm laptop:text-base desktop:text-xl">
                  Unlock a connected, engaging, and efficient education
                  experience for parents, students, teachers, and school
                  administrators.
                </p>
                <div className="mt-6 flex gap-4">
                  <Button
                    className="px-4 py-[10px] text-xs font-semibold tablet:px-6 tablet:text-sm laptop:px-8 laptop:text-base"
                    to="/waitlist"
                  >
                    Join the waitlist
                  </Button>
                  <Button
                    className="px-4 py-[10px] text-xs font-semibold tablet:px-6 tablet:text-sm laptop:px-8 laptop:text-base"
                    variant="outlined-light"
                    to="/contact-us"
                  >
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function LandingSection2() {
  return (
    <section
      id="landing-2"
      className="h-fit bg-white bg-grid1 py-[84px] tablet:py-[177px]"
    >
      <div className="mx-auto flex w-[91%] flex-col items-start justify-between gap-2 tablet:w-[640px] tablet:flex-row tablet:items-center tablet:gap-0 laptop:w-[960px] desktop:w-[1200px]">
        <h3 className="w-[264px] text-2xl font-bold text-pitch-black tablet:w-[400px] tablet:text-[32px] tablet:leading-10 laptop:text-[40px] laptop:leading-[48px]">
          The technology for <span className="text-blue-one">Education</span>.
        </h3>
        <p className="w-full text-sm font-normal text-pitch-black tablet:w-[400px] laptop:text-lg">
          Scoolspace is packed with features designed to make learning easy,
          teaching efficient, and school management seamless.
        </p>
      </div>
    </section>
  );
}

function Features() {
  const featuresInput = [
    {
      id: 1,
      bgColor: "bg-gradient-to-br from-[#6fd1f8] to-[#9ce6fe]",
      subHeading: "Why Scoolspace?",
      heading: "Seamless, Smart, Connected",
      body: "Access real time updates, communicate effortlessly, and create a community dedicated to impacting knowledge all from a single platform.",
      variant: "fill",
      btnVariant: "secondary",
      flow: null,
      contrast: "dark",
      btnText: "Learn more",
      btnTo: "/product",
      bgImage2: null,
      userTypeImg: null,
      bgImage: null,
      iconSrc: null,
    },
    {
      id: 2,
      bgColor: "bg-gradient-to-br from-[#AA79d3] to-[#cb9bef]",
      subHeading: "For Schools",
      heading: "Full control, Real insights",
      body: "Monitor performances, manage school operations, resources, curriculum and more in a collaborative environment with ease.",
      variant: "dual",
      btnVariant: "light",
      flow: "right",
      contrast: "light",
      btnText: "Join our waitlist",
      btnTo: "/waitlist",
      userTypeImg: null,
      bgImage2: null,
      bgImage:
        "url('images/management-1.png'), linear-gradient(#662D914D, #D9D9D900)",
      featureName: "management",
      iconSrc: "images/icon-schools.png",
    },
    {
      id: 3,
      bgColor: "bg-gradient-to-br from-[#6fd1f8] to-[#9ce6fe]",
      subHeading: "For Teachers",
      heading: "Teach smarter, Not harder",
      body: "Focus on more impactful teaching activities. Prepare lessons, assign and grade quizzes, and keep students engaged with interactive classes with Scoolspace.",
      variant: "dual",
      btnVariant: "secondary",
      flow: "left",
      contrast: "dark",
      btnText: "Join our waitlist",
      btnTo: "/waitlist",
      userTypeImg: null,
      bgImage:
        "url('images/teacher-1.png'), radial-gradient(circle, #D9D9D900, #662D914D)",
      bgImage2: null,
      featureName: "Teaching",
      iconSrc: "images/icon-teachers.png",
    },
    {
      id: 4,
      bgColor: "bg-gradient-to-br from-[#F44552] to-[#F55967]/70",
      subHeading: "For Parents",
      heading: "Stay connected, Always",
      body: "Stay up to date with your child’s school activities. Be connected and empowered to support your child’s academic growth.",
      variant: "fill",
      btnVariant: "secondary",
      flow: null,
      contrast: "light",
      btnText: "Learn more",
      btnTo: "/product",
      bgImage2: "url('images/parent-image1.svg')",
      userTypeImg: null,
      featureName: null,
      iconSrc: null,
    },
    {
      id: 5,
      bgColor: "bg-gradient-to-br from-[#6fd1f8] to-[#9ce6fe]/30",
      subHeading: "For Students",
      heading: "Fun, Engaging Learning",
      body: "With access to class materials, interactive classes and assignments, and the option to take assessments from anywhere, become the best student you can be.",
      variant: "dual",
      btnVariant: "secondary",
      flow: "right",
      contrast: "dark",
      btnText: "Learn more",
      btnTo: "/product",
      userTypeImg: null,
      bgImage2: null,
      bgImage:
        "url('images/student-2.png'), radial-gradient(circle, #D9D9D900, #9DE7FF99)",
      //"radial-gradient(circle, #D9D9D900, #9DE7FF99), url('images/student-1.png')"
      featureName: "Learning",
      iconSrc: "images/icon-students.png",
    },
  ];
  return (
    <section
      id="features"
      className="mx-auto mb-[200px] mt-8 flex w-[91%] flex-col gap-8 tablet:w-[704px] laptop:w-[960px] desktop:w-[1200px]"
    >
      <div className="flex w-full flex-col gap-4">
        {featuresInput.map((input) => (
          <Feature
            key={input.id}
            bgColor={input.bgColor}
            subHeading={input.subHeading}
            heading={input.heading}
            body={input.body}
            variant={input.variant}
            btnVariant={input.btnVariant}
            flow={input.flow}
            contrast={input.contrast}
            btnText={input.btnText}
            btnTo={input.btnTo}
            bgImage2={input.bgImage2}
            userTypeImg={input.userTypeImg}
            bgImage={input.bgImage}
            featureName={input.featureName}
            iconSrc={input.iconSrc}
          />
        ))}
      </div>

      <div className="flex items-center justify-between font-medium">
        <h3 className="text-lg text-pitch-black laptop:text-[30px] desktop:text-[32px]">
          Something for everyone with{" "}
          <span className="text-blue-one">Scoolspace</span>
        </h3>
        <Button
          className="h-fit text-nowrap px-4 py-[10px] text-xs laptop:px-6 laptop:text-base desktop:px-8"
          variant="secondary"
        >
          Explore all features
        </Button>
      </div>
    </section>
  );
}

function Feature({
  bgColor,
  subHeading,
  heading,
  body,
  variant,
  btnVariant,
  flow,
  contrast,
  btnText,
  btnTo,
  userTypeImg,
  bgImage2,
  bgImage,
  featureName,
  iconSrc,
}) {
  const interactiveDivRef = useRef(null);
  // const [isMobile, setIsMobile] = useState();

  const handleMouseMove = (e) => {
    const rect = interactiveDivRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = (x - centerX) / centerX;
    const offsetY = (y - centerY) / centerY;

    if (window.innerWidth >= 640) {
      interactiveDivRef.current.style.transform = `
      scale(1.01)
      translate(${offsetX * 10}px, ${offsetY * 10}px)
      `;
    }
  };

  const handleMouseLeave = () => {
    interactiveDivRef.current.style.transform = `
    scale(1)
    `;
  };

  return (
    <div
      className={`w-full justify-between gap-4 rounded-lg ${variant === "fill" ? "" : flow === "right" ? "flex" : "flex flex-row-reverse"}`}
    >
      {variant === "dual" && (
        <div
          style={{
            backgroundImage: bgImage,
          }}
          className={`relative hidden h-[504px] items-end rounded-2xl bg-cover bg-[55%] p-8 bg-blend-multiply tablet:flex tablet:w-[270px] laptop:h-[640px] laptop:w-[391px] desktop:h-[720px] desktop:w-[481px]`}
        >
          <div className="flex w-full flex-col gap-2">
            <h3 className="font-semibold text-white tablet:text-base laptop:text-[22px] desktop:text-2xl">
              Designed for {featureName}
            </h3>
            <img src={iconSrc} alt="" className="h-[20px] w-[100px]" />
          </div>
        </div>
      )}
      <div
        ref={interactiveDivRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative h-[504px] w-auto rounded-2xl transition-transform duration-200 ease-linear tablet:min-h-max ${bgColor} ${variant === "fill" ? "laptop:h-[560px] desktop:h-[600px]" : "w-full laptop:h-[640px] laptop:w-[553px] desktop:h-[720px] desktop:w-[687px]"}`}
      >
        <div
          className={`h-full gap-8 rounded-2xl px-8 py-8 sm:gap-0 sm:px-12 tablet:min-h-max ${variant === "fill" ? "sm:flex sm:flex-col sm:justify-between" : "sm:py-12"}`}
        >
          <section className="flex flex-col gap-6">
            <h6 className="text-xs text-white desktop:text-sm">{subHeading}</h6>
            <div
              className={`flex flex-col gap-4 ${contrast === "dark" ? "text-pitch-black" : "text-white"} ${variant === "fill" ? "w-full tablet:w-[57%]" : ""}`}
            >
              <h2 className="text-2xl font-bold leading-normal laptop:text-[32px] desktop:text-[40px]">
                {heading}
              </h2>
              <p className="text-sm font-medium tablet:text-xs laptop:text-sm desktop:text-base">
                {body}
              </p>
            </div>
            {userTypeImg && (
              <img
                src={`images/${userTypeImg}.png`}
                alt=""
                className="w-[87px]"
              />
            )}
          </section>

          <Button
            variant={btnVariant}
            to={btnTo}
            className={`mt-8 px-4 py-[10px] text-xs font-semibold shadow-custom-shadow laptop:text-sm desktop:px-6 ${variant === "fill" ? "w-fit tablet:mt-0" : ""}`}
          >
            {btnText}
          </Button>
        </div>

        {variant !== "dual" && (
          <div
            className={`absolute bottom-0 right-[83px] -z-10 hidden h-[90%] w-[41.41%] bg-no-repeat custom:bg-[length:100%_130%] lg:bg-[length:100%_115%] desktop:bg-[length:100%_100%] ${bgImage2 ? "custom:block" : ""}`}
            style={{
              backgroundImage: bgImage2,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

function LandingSection3() {
  return (
    <section
      id="landing-3"
      className="min-h-dvh w-full bg-pitch-black bg-grid2 py-[72px] tablet:px-6 tablet:py-20 laptop:py-[120px] desktop:pb-[242px]"
    >
      <div className="mx-auto flex w-[91%] flex-col justify-between gap-6 tablet:w-[704px] tablet:flex-row laptop:w-[960px] desktop:w-[1200px]">
        <h1 className="w-full text-[22px] font-semibold text-white tablet:w-[368px] tablet:text-[32px] laptop:text-[32px] laptop:font-bold desktop:text-[40px]">
          The Future of Education Starts Here
        </h1>
        <section className="flex h-[120px] w-full flex-col gap-4 tablet:w-[400px] tablet:gap-[18px] laptop:gap-[22px] desktop:gap-8">
          <p className="font-medium leading-[22.68px] text-white laptop:text-base desktop:text-lg">
            We’re just getting started. Join a community committed to
            transforming education and making learning accessible, enjoyable,
            and effective for everyone involved.
          </p>
          <Button
            variant="outlined-light"
            className="w-fit px-4 py-[10px] text-xs laptop:px-6 laptop:text-sm"
            to="/contact-us"
          >
            Contact us
          </Button>
        </section>
      </div>

      <div className="mx-auto mt-[72px] grid h-[1928px] w-[91%] grid-cols-1 grid-rows-5 flex-col justify-between gap-8 tablet:mt-[96px] tablet:h-[1064px] tablet:w-[704px] tablet:grid-cols-2 tablet:grid-rows-3 tablet:gap-4 laptop:mt-[142px] laptop:h-[633px] laptop:w-[960px] laptop:grid-cols-3 laptop:grid-rows-2 laptop:gap-[21px] desktop:mt-[128px] desktop:h-[790px] desktop:w-[1200px] desktop:gap-[30px]">
        <Section3Cards
          extraClass="tablet:col-start-1 tablet:col-end-2"
          imageSrc="images/managed-access.svg"
          alt="managed access"
          message="Properly managed access control"
          serialNum="01"
        />

        <Section3Cards
          extraClass="tablet:col-start-2 tablet:col-end-3"
          imageSrc="images/functionality-access.svg"
          alt="functionality access"
          message="Seamless functionality access"
          serialNum="02"
        />

        <Section3Cards
          extraClass="tablet:col-start-1 tablet:col-end-2 laptop:col-start-3 laptop:col-end-4"
          imageSrc="images/realtime-update.svg"
          alt="realtime update"
          message="Realtime updates via notifications"
          serialNum="03"
        />

        <Section3Cards
          extraClass="tablet:col-start-2 tablet:col-end-3 laptop:col-start-1 laptop:col-end-2"
          imageSrc="images/analytics.svg"
          alt="analytics"
          message="Realtime dashboard analytics"
          serialNum="04"
        />

        <div
          style={{
            backgroundImage:
              "url('images/platforms2.png'), linear-gradient(#00223A00, 70%,#00223A)",
          }}
          className="col-span-1 flex flex-col justify-between rounded-2xl bg-cover bg-[50%] px-6 py-[31px] bg-blend-multiply tablet:col-span-2 tablet:col-start-1 laptop:col-start-2"
        >
          <div className="relative w-full text-white">
            <h5 className="w-11/12 text-lg font-bold sm:w-auto">
              Available on every platform
            </h5>
            <span className="absolute right-0 top-2 text-base font-semibold text-white/60">
              05
            </span>
          </div>
          <div className="flex gap-4">
            <img src="images/Windows-white.svg" alt="" className="h-6 w-6" />
            <img src="images/Google-white.svg" alt="" className="h-6 w-6" />
            <img src="images/AppleFilled.svg" alt="" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

const Section3Cards = ({ extraClass, imageSrc, alt, message, serialNum }) => {
  const interactiveContainerRef = useRef(null);
  const firstChildRef = useRef(null);
  const strokeFollowRef = useRef(null);
  const imageContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    // const rect = interactiveContainerRef.current.getBoundingClientRect();
    const rect = firstChildRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = (x - centerX) / centerX;
    const offsetY = (y - centerY) / centerY;

    if (window.innerWidth >= 640) {
      interactiveContainerRef.current.style.transform = "scale(1.01)";
      strokeFollowRef.current.style.transform = `translate(${offsetX * 100}%, ${offsetY * 100}%)`;
      // imageRef should zoom faster (not snappy) and follow mouse subtly
      imageContainerRef.current.style.transform = `
      
      scale3d(1.1,1.1,1.1)
      translate(${offsetX * 5}px, ${offsetY * 5}px)
      `;
    }
  };

  const handleMouseLeave = () => {
    interactiveContainerRef.current.style.transform = "scale(1)";
    firstChildRef.current.style.transform = "scale(1)";
    strokeFollowRef.current.style.transform = "translate(0,0)";
    imageContainerRef.current.style.transform =
      "scale3d(1,1,1) rotateX(0deg) rotateY(0deg)";
  };
  // perspective(1000px)
  return (
    <div
      className="relative h-fit overflow-hidden rounded-2xl p-[1px]"
      ref={interactiveContainerRef}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          filter: "blur(40px)",
        }}
        className="absolute inset-0 left-1/4 top-1/4 h-1/2 w-1/2 bg-[#9DE7FF99] transition-transform duration-150 ease-linear"
        ref={strokeFollowRef}
      ></div>
      <div
        className={`relative col-span-1 flex items-center rounded-2xl bg-dark-blue px-8 py-[31px] ${extraClass} transition-transform duration-500 ease-linear`}
        ref={firstChildRef}
      >
        <div className="mx-auto flex flex-col gap-5 bg-dark-blue desktop:gap-10">
          <div
            className="h-[208px] transition-transform duration-150 ease-linear laptop:h-[174px] desktop:h-[208px]"
            ref={imageContainerRef}
          >
            <img src={imageSrc} alt={alt} className="h-full w-full" />
          </div>
          <div className="relative flex">
            <p className="w-[90%] text-lg font-bold leading-[22.68px] text-white desktop:text-[22px]">
              {message}
            </p>
            <span className="absolute bottom-0 right-0 text-base font-semibold text-white/60">
              {serialNum}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/*<section className="z-10 mx-auto max-h-fit min-h-dvh w-[992px] pt-8 text-white">
          <Navbar
            navItems={navItems}
            btnText="Join our waitlist"
            type="oceanic"
            btnSize="medium"
          />
          <div className="flex w-full justify-center pb-48">
            <div className="mt-32 flex w-full items-center justify-between">
              <div className="w-[460px]">
                <h1 className="text-[48px] font-bold leading-tight">
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
              <div className="relative h-[400px] w-[400px]">
                <img
                  src="images/bg-hero-1.png"
                  alt=""
                  className="h-full w-full"
                />
                <img
                  src="images/Hero-image.png"
                  alt="hero-image"
                  className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
                />
              </div>
            </div>
          </div>
        </section> */

/*desktop:px-[120px] laptop:px-[40px] px-[120px]*/
