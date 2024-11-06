import Button from "../components/Button";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

export default function Landing() {
  const navItems = ["Product", "Resources", "About us"];
  return (
    <div className="w-full font-plus-jakarta-sans">
      <Navbar
        navItems={navItems}
        btnText="Join our waitlist"
        btnTo="join-the-waitlist"
        type="foggy"
        btnSize="normal"
        position="sticky"
      />
      <HeroSection />
      <LandingSection2 />
      <Features />
      <LandingSection3 />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative w-full">
      <div className="bg-hero-pattern1 bg-cover bg-[50%_0%] bg-no-repeat bg-blend-multiply">
        <section className="desktop:w-[1200px] laptop:w-[960px] tablet:w-[704px] z-10 mx-auto max-h-fit min-h-dvh w-[91%] pt-8 text-white">
          <div className="flex w-full justify-center pb-48">
            <div className="mt-32 flex w-full items-center justify-between">
              <div className="flex w-[460px] flex-col gap-4">
                <h1 className="desktop:text-[48px] laptop:text-[48px] tablet:text-[40px] text-[32px] font-bold leading-tight">
                  Lorem ipsum dolor sit amet consectetur
                </h1>
                <p className="desktop:text-base laptop:text-base tablet:text-sm text-base font-medium">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
                <div className="mt-6 flex gap-4">
                  <Button
                    className="tablet:px-6 laptop:px-8 tablet:text-sm laptop:text-base px-4 py-[10px] text-xs font-semibold"
                    to=""
                  >
                    Join our waitlist
                  </Button>
                  <Button
                    className="tablet:px-6 laptop:px-8 tablet:text-sm laptop:text-base px-4 py-[10px] text-xs font-semibold"
                    variant="outlined-light"
                    to=""
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
      className="tablet:py-[177px] h-fit bg-white bg-grid1 py-[84px]"
    >
      <div className="desktop:w-[1200px] laptop:w-[960px] tablet:w-[640px] tablet:flex-row tablet:gap-0 tablet:items-center mx-auto flex w-[91%] flex-col items-start justify-between gap-2">
        <h3 className="tablet:text-[32px] desktop:text-[40px] laptop:text-[40px] tablet:w-[400px] w-[264px] text-2xl font-bold text-pitch-black">
          Big text for short section{" "}
          <span className="text-blue-one">header</span>.
        </h3>
        <p className="laptop:text-lg w-[400px] text-sm font-normal text-pitch-black">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum
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
      subHeading: "Feature for Sub-heading",
      heading: "Some big text for feature header.",
      body: "At vero eos et accusamus et iusto tui odio ducimus dignissimos qui blanditiis se latino praesentium potenta voluptatum.",
      variant: "fill",
      btnVariant: "secondary",
      flow: null,
      contrast: "dark",
      btnText: "Learn more",
      userTypeImg: null,
      bgImage: null,
      iconSrc: null,
    },
    {
      id: 2,
      bgColor: "bg-gradient-to-br from-[#AA79d3] to-[#cb9bef]",
      subHeading: "Feature for Sub-heading",
      heading: "Some big text for feature header.",
      body: "At vero eos et accusamus et iusto tui odio ducimus dignissimos qui blanditiis se latino praesentium potenta voluptatum.",
      variant: "dual",
      btnVariant: "light",
      flow: "right",
      contrast: "light",
      btnText: "Join our waitlist",
      userTypeImg: null,
      bgImage:
        "url('images/management-1.png'), linear-gradient(#662D914D, #D9D9D900)",
      featureName: "management",
      iconSrc: "images/icon-schools.png",
    },
    {
      id: 3,
      bgColor: "bg-gradient-to-br from-[#6fd1f8] to-[#9ce6fe]",
      subHeading: "Feature for Sub-heading",
      heading: "Some big text for feature header.",
      body: "At vero eos et accusamus et iusto tui odio ducimus dignissimos qui blanditiis se latino praesentium potenta voluptatum.",
      variant: "dual",
      btnVariant: "secondary",
      flow: "left",
      contrast: "dark",
      btnText: "Join our waitlist",
      userTypeImg: null,
      bgImage:
        "url('images/teacher-1.png'), radial-gradient(circle, #D9D9D900, #662D914D)",
      featureName: "Teaching",
      iconSrc: "images/icon-teachers.png",
    },
    {
      id: 4,
      bgColor: "bg-gradient-to-br from-[#F44552] to-[#F55967]/70",
      subHeading: "Feature for Sub-heading",
      heading: "Some big text for feature header.",
      body: "At vero eos et accusamus et iusto tui odio ducimus dignissimos qui blanditiis se latino praesentium potenta voluptatum.",
      variant: "fill",
      btnVariant: "secondary",
      flow: null,
      contrast: "light",
      btnText: "Learn more",
      userTypeImg: null,
      featureName: null,
      iconSrc: null,
    },
    {
      id: 5,
      bgColor: "bg-gradient-to-br from-[#6fd1f8] to-[#9ce6fe]/30",
      subHeading: "Feature for Sub-heading",
      heading: "Some big text for feature header.",
      body: "At vero eos et accusamus et iusto tui odio ducimus dignissimos qui blanditiis se latino praesentium potenta voluptatum.",
      variant: "dual",
      btnVariant: "secondary",
      flow: "right",
      contrast: "dark",
      btnText: "Learn more",
      userTypeImg: null,
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
      className="desktop:w-[1200px] laptop:w-[960px] tablet:w-[704px] mx-auto mb-[200px] mt-8 flex w-[91%] flex-col gap-8"
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
            userTypeImg={input.userTypeImg}
            bgImage={input.bgImage}
            featureName={input.featureName}
            iconSrc={input.iconSrc}
          />
        ))}
      </div>

      <div className="flex items-center justify-between font-medium">
        <h3 className="desktop:text-[32px] laptop:text-[30px] text-lg text-pitch-black">
          Something for everyone with{" "}
          <span className="text-blue-one">Scoolspace</span>
        </h3>
        <Button
          className="laptop:px-6 desktop:px-8 laptop:text-base h-fit text-nowrap px-4 py-[10px] text-xs"
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
  userTypeImg,
  bgImage,
  featureName,
  iconSrc,
}) {
  return (
    <div
      className={`w-full justify-between gap-4 rounded-lg ${variant === "fill" ? "" : flow === "right" ? "flex" : "flex flex-row-reverse"}`}
    >
      {variant === "dual" && (
        <div
          style={{
            backgroundImage: bgImage,
          }}
          className={`desktop:w-[481px] laptop:w-[391px] tablet:w-[270px] tablet:flex relative hidden h-[560px] items-end rounded-2xl bg-cover bg-[55%] p-8 bg-blend-multiply`}
        >
          <div className="z-10 flex w-full flex-col gap-2">
            <h3 className="desktop:text-2xl laptop:text-[22px] tablet:text-base font-semibold text-white">
              Designed for {featureName}
            </h3>
            <img src={iconSrc} alt="" className="h-[20px] w-[100px]" />
          </div>
        </div>
      )}
      <div
        className={`w-auto rounded-2xl px-12 ${variant === "fill" ? "py-8" : "desktop:w-[687px] laptop:w-[553px] desktop:h-[600px] laptop:h-[560px] h-[504px] w-full py-12"} ${bgColor}`}
      >
        <section className="flex flex-col gap-6">
          <h6 className="desktop:text-sm text-xs text-white">{subHeading}</h6>
          <div
            className={`flex flex-col gap-4 ${contrast === "dark" ? "text-pitch-black" : "text-white"}`}
          >
            <h2 className="desktop:text-[40px] laptop:text-[32px] text-2xl font-bold leading-[50.4px]">
              {heading}
            </h2>
            <p className="desktop:text-base laptop:text-sm tablet:text-xs text-sm font-medium">
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
          className={`laptop:text-sm shadow-custom-shadow desktop:px-6 px-4 py-[10px] text-xs font-semibold ${variant === "fill" ? "mt-[223px]" : "mt-8"}`}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
}

function LandingSection3() {
  return (
    <section
      id="landing-3"
      className="desktop:pb-[242px] laptop:py-[120px] tablet:py-20 tablet:px-6 min-h-dvh w-full bg-pitch-black bg-grid2 py-[72px]"
    >
      <div className="desktop:w-[1200px] laptop:w-[960px] tablet:w-[704px] tablet:flex-row mx-auto flex w-[91%] flex-col justify-between gap-6">
        <h1 className="desktop:text-[40px] laptop:text-[32px] tablet:text-[32px] laptop:font-bold w-[368px] text-[22px] font-semibold text-white">
          Anyway, we’re just getting started
        </h1>
        <section className="tablet:gap-[18px] laptop:gap-[22px] desktop:gap-8 flex h-[120px] w-[400px] flex-col gap-4">
          <p className="desktop:text-lg laptop:text-base text-sm font-medium leading-[22.68px] text-white">
            At vero eos et accusamus et iusto tui odio na se tu latino
            praesentium voluptatum.
          </p>
          <Button
            variant="outlined-light"
            className="laptop:text-sm laptop:px-6 w-fit px-4 py-[10px] text-xs"
          >
            Contact us
          </Button>
        </section>
      </div>

      <div className="desktop:w-[1200px] laptop:w-[960px] desktop:h-[790px] laptop:h-[633px] laptop:grid-cols-3 tablet:grid-cols-2 laptop:grid-rows-2 tablet:grid-rows-3 tablet:gap-4 laptop:gap-[21px] desktop:gap-[30px] tablet:h-[1064px] tablet:w-[704px] tablet:mt-[96px] laptop:mt-[142px] desktop:mt-[128px] mx-auto mt-[72px] grid h-[1928px] w-[91%] grid-cols-1 grid-rows-5 flex-col justify-between gap-8">
        <div className="tablet:col-start-1 tablet:col-end-2 bg-dark col-span-1 flex flex-col items-center rounded-2xl bg-dark-blue px-8 pt-[31px]">
          <div>
            <div className="mb-[10px] h-[208px]">
              <img src="images/managed-access.png" alt="" />
            </div>
            <div className="relative flex">
              <p className="desktop:text-[22px] w-[90%] text-lg font-bold leading-[22.68px] text-white">
                Properly managed access control
              </p>
              <span className="absolute bottom-0 right-0 text-xs font-semibold text-white">
                01
              </span>
            </div>
          </div>
        </div>

        <div className="tablet:col-start-2 tablet:col-end-3 col-span-1 flex flex-col items-center rounded-2xl bg-dark-blue px-8 pt-[31px]">
          <div>
            <div className="mb-[10px] h-[208px]">
              <img src="images/functionality-access.png" alt="" />
            </div>
            <div className="relative flex">
              <p className="desktop:text-[22px] w-[90%] text-lg font-bold leading-[22.68px] text-white">
                Seamless functionality access
              </p>
              <span className="absolute bottom-0 right-0 text-xs font-semibold text-white">
                02
              </span>
            </div>
          </div>
        </div>

        <div className="laptop:col-start-3 tablet:col-start-1 tablet:col-end-2 laptop:col-end-4 col-span-1 flex flex-col items-center rounded-2xl bg-dark-blue px-8 pt-[31px]">
          <div>
            <div className="mb-[10px] h-[208px]">
              <img src="images/realtime-update.png" alt="" />
            </div>
            <div className="relative flex">
              <p className="desktop:text-[22px] w-[90%] text-lg font-bold leading-[22.68px] text-white">
                Realtime updates via notifications
              </p>
              <span className="absolute bottom-0 right-0 text-xs font-semibold text-white">
                03
              </span>
            </div>
          </div>
        </div>

        <div className="laptop:col-start-1 laptop:col-end-2 tablet:col-start-2 tablet:col-end-3 col-span-1 flex flex-col items-center rounded-2xl bg-dark-blue px-8 pt-[31px]">
          <div>
            <div className="mb-[10px] h-[208px]">
              <img src="images/analytics.png" alt="" />
            </div>
            <div className="relative flex">
              <p className="desktop:text-[22px] w-[90%] text-lg font-bold leading-[22.68px] text-white">
                Realtime dashboard analytics
              </p>
              <span className="absolute bottom-0 right-0 text-xs font-semibold text-white">
                04
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage:
              "url('images/platforms2.png'), linear-gradient(#00223A00, 70%,#00223A)",
          }}
          className="laptop:col-start-2 tablet:col-start-1 tablet:col-span-2 tablet:bg-[length:100%_125%] tablet:bg-[100%_55%] col-span-1 flex flex-col justify-between rounded-2xl bg-cover bg-[50%] px-6 py-[31px] bg-blend-multiply"
        >
          <div className="relative w-full text-white">
            <h5 className="text-lg font-bold">Available on every platform</h5>
            <span className="absolute right-0 top-0 text-xs font-semibold text-white">
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

function FinalCTA() {
  return (
    <section
      id="cta"
      className="desktop:py-[100px] laptop:py-[110px] tablet:py-[98px] bg-gradient-to-br from-[#8cc5eb] to-[#9de7ff] px-12 py-8"
    >
      <section className="desktop:w-[1200px] laptop:w-[960px] tablet:w-[704px] tablet:flex-row tablet:items-center tablet:gap-0 mx-auto flex flex-col items-start justify-between gap-6">
        <h1 className="desktop:text-[48px] laptop:text-[40px] tablet:text-2xl laptop:w-[451px] tablet:w-[408px] text-[22px] font-semibold text-pitch-black">
          Ready to transform your school?
        </h1>
        <div className="flex gap-4">
          <Button
            variant="secondary"
            className="desktop:text-base laptop:text-sm desktop:px-6 h-fit text-nowrap px-4 py-[10px] text-xs shadow-md-dark-blue"
          >
            Join our waitlist
          </Button>
          <Button
            variant="primary"
            className="desktop:text-base laptop:text-sm desktop:px-6 h-fit text-nowrap px-4 py-[10px] text-xs shadow-md-light-blue"
          >
            Contact us
          </Button>
        </div>
      </section>
    </section>
  );
}

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
