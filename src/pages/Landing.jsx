import Button from "../components/Button";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

export default function Landing() {
  return (
    <div className="w-full font-plus-jakarta-sans">
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
  const navItems = ["Product", "Resources", "About us"];
  return (
    <div className="relative w-full">
      <div className="tablet:bg-[length:120%_120%] laptop:bg-[length:100%_110%] bg-hero-pattern1 bg-[100%_5%] bg-no-repeat bg-blend-multiply">
        <section className="desktop:w-[1200px] laptop:w-[960px] w-962px z-10 mx-auto max-h-fit min-h-dvh pt-8 text-white">
          <Navbar
            navItems={navItems}
            btnText="Join our waitlist"
            type="foggy"
            btnSize="medium"
          />
          <div className="flex w-full justify-center pb-48">
            <div className="mt-32 flex w-full items-center justify-between">
              <div className="w-[460px]">
                <h1 className="desktop:text-[48px] laptop:text-[48px] tablet:text-[40px] font-bold leading-tight">
                  Lorem ipsum dolor sit amet consectetur
                </h1>
                <p className="desktop:text-base laptop:text-base tablet:text-sm font-medium">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
                <div className="mt-6 flex gap-4">
                  <Button className="text-sm" to="">
                    Join our waitlist
                  </Button>
                  <Button className="text-sm" variant="outlined-light" to="">
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function LandingSection2() {
  return (
    <section className="h-fit bg-white bg-grid1 py-[170px]">
      <div className="desktop:w-[1200px] laptop:w-[960px] tablet:w-[640px] mx-auto flex items-center justify-between">
        <h3 className="tablet:text-[32px] desktop:text-[40px] laptop:text-[40px] w-[400px] font-bold text-pitch-black">
          Big text for short section{" "}
          <span className="text-blue-one">header</span>.
        </h3>
        <p className="tablet:text-sm desktop:text-lg laptop:text-lg w-[400px] font-normal text-pitch-black">
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
    <div className="desktop:w-[1200px] laptop:w-[960px] tablet:min-w-[864px] mx-auto mb-[200px] mt-8 flex flex-col gap-8">
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

      <div className="flex justify-between font-medium">
        <h3 className="desktop:text-[32px] laptop:text-[30px]">
          Something for everyone with{" "}
          <span className="text-blue-one">Scoolspace</span>
        </h3>
        <Button size="spread" variant="secondary">
          Explore all features
        </Button>
      </div>
    </div>
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
      className={`w-full justify-between rounded-lg ${variant === "fill" ? "" : flow === "right" ? "flex" : "flex flex-row-reverse"}`}
    >
      {variant === "dual" && (
        <div
          style={{
            backgroundImage: bgImage,
          }}
          className={`desktop:w-[481px] laptop:w-[391px] tablet:w-[307px] relative flex h-[560px] items-end rounded-2xl bg-cover bg-[82%] p-8 bg-blend-multiply`}
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
        className={`w-auto rounded-2xl px-12 ${variant === "fill" ? "py-8" : "desktop:min-w-[687px] laptop:min-w-[553px] tablet:min-w-[541px] py-12"} ${bgColor}`}
      >
        <section className="flex w-[400px] flex-col gap-6">
          <h6 className="desktop:text-sm text-xs text-white">{subHeading}</h6>
          <div
            className={`${contrast === "dark" ? "text-pitch-black" : "text-white"}`}
          >
            <h2 className="desktop:text-[40px] laptop:text-[32px] tablet:text-2xl font-bold leading-[50.4px]">
              {heading}
            </h2>
            <p className="desktop:text-base laptop:text-sm tablet:text-xs font-medium">
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
          size="normal"
          className={`laptop:text-sm tablet:text-xs ${variant === "fill" ? "mt-[132px]" : "mt-8"}`}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
}

function LandingSection3() {
  return (
    <div className="desktop:pb-[242px] laptop:pb-[120px] min-h-dvh w-full bg-pitch-black bg-grid2 pt-[120px]">
      <div className="desktop:w-[1200px] laptop:w-[960px] mx-auto flex justify-between">
        <h1 className="desktop:text-[40px] laptop:text-[32px] tablet:text-[32px] w-[368px] font-bold leading-[50.4px] text-white">
          Anyway, we’re just getting started
        </h1>
        <section className="flex h-[120px] w-[400px] flex-col gap-8">
          <p className="desktop:text-lg laptop:text-base font-medium leading-[22.68px] text-white">
            At vero eos et accusamus et iusto tui odio na se tu latino
            praesentium voluptatum.
          </p>
          <Button variant="outlined-light" size="normal" className="w-fit">
            Contact us
          </Button>
        </section>
      </div>

      <div className="desktop:w-[1200px] laptop:w-[960px] desktop:h-[790px] laptop:h-[633px] laptop:grid-cols-3 tablet:grid-cols-2 laptop:grid-rows-2 tablet:grid-rows-3 laptop:gap-4 tablet:gap-6 mx-auto mt-[104px] grid h-[656px] w-[992px]">
        <div className="col-start-1 col-end-2 rounded-2xl bg-dark-blue px-6 pt-[31px]">
          <div>
            <div className="mb-[10px] h-[208px]">
              <img src="images/managed-access.png" alt="" />
            </div>
            <div className="relative flex">
              <p className="w-[90%] text-lg font-bold leading-[22.68px] text-white">
                Properly managed access control
              </p>
              <span className="absolute bottom-0 right-0 text-xs font-semibold text-white">
                01
              </span>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-3 rounded-2xl bg-dark-blue px-6 pt-[31px]">
          <div>
            <div className="mb-[10px] h-[208px]">
              <img src="images/functionality-access.png" alt="" />
            </div>
            <div className="relative flex">
              <p className="w-[90%] text-lg font-bold leading-[22.68px] text-white">
                Seamless functionality access
              </p>
              <span className="absolute bottom-0 right-0 text-xs font-semibold text-white">
                01
              </span>
            </div>
          </div>
        </div>
        <div className="laptop:col-start-3 tablet:col-start-1 tablet:col-end-2 laptop:col-end-4 rounded-2xl bg-dark-blue px-6 pt-[31px]">
          <div>
            <div className="mb-[10px] h-[208px]">
              <img src="images/realtime-update.png" alt="" />
            </div>
            <div className="relative flex">
              <p className="w-[90%] text-lg font-bold leading-[22.68px] text-white">
                Realtime updates via notifications
              </p>
              <span className="absolute bottom-0 right-0 text-xs font-semibold text-white">
                01
              </span>
            </div>
          </div>
        </div>
        <div className="laptop:col-start-1 laptop:col-end-2 tablet:col-start-2 tablet:col-end-3 rounded-2xl bg-dark-blue px-6 pt-[31px]">
          <div>
            <div className="mb-[10px] h-[208px]">
              <img src="images/analytics.png" alt="" />
            </div>
            <div className="relative flex">
              <p className="w-[90%] text-lg font-bold leading-[22.68px] text-white">
                Realtime dashboard analytics
              </p>
              <span className="absolute bottom-0 right-0 text-xs font-semibold text-white">
                01
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url('images/platforms2.png'), linear-gradient(#00223A00, 80%,#00223A)",
          }}
          className="laptop:col-start-2 tablet:col-start-1 col-span-2 flex flex-col justify-between rounded-2xl bg-[length:100%_125%] bg-[100%_55%] px-6 py-[31px] bg-blend-multiply"
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
    </div>
  );
}

function FinalCTA() {
  return (
    <div className="desktop:px-[120px] laptop:px-[40px] bg-gradient-to-br from-[#8cc5eb] to-[#9de7ff] px-[120px] py-[100px]">
      <section className="flex items-center justify-between">
        <h1 className="desktop:text-5xl laptop:text-[40px] w-[451px] text-[32px] font-semibold text-pitch-black">
          Ready to transform your school?
        </h1>
        <div className="flex gap-4">
          <Button
            variant="secondary"
            size="normal"
            className="h-fit text-nowrap text-base shadow-md-dark-blue"
          >
            Join our waitlist
          </Button>
          <Button
            variant="primary"
            size="normal"
            className="h-fit text-nowrap text-base shadow-md-light-blue"
          >
            Contact us
          </Button>
        </div>
      </section>
    </div>
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
