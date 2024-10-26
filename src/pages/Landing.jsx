import Button from "../components/Button";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

export default function Landing() {
  return (
    <div className="font-plus-jakarta-sans w-full">
      <HeroSection />
      <LandingSection2 />
      <Features />
      <Section3 />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function HeroSection() {
  const navItems = ["Product", "Resources", "About us"];
  return (
    <div className="relative w-full bg-radial-blue">
      {/* <img
        src="images/background-grid-design.png"
        alt=""
        className="absolute w-full"
      /> */}
      <div className="bg-grid1">
        <section className="z-10 mx-auto max-h-fit min-h-dvh w-[992px] pt-8 text-white">
          <Navbar
            navItems={navItems}
            btnText="Join our waitlist"
            type="dark"
            btnSize="medium"
          />
          <div className="flex w-full justify-center pb-48">
            <div className="mt-32 flex w-full items-center justify-between">
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
        </section>
      </div>
    </div>
  );
}

function LandingSection2() {
  return (
    <section className="bg-grid h-fit bg-white py-[170px]">
      <div className="mx-auto flex w-[960px] items-center justify-between">
        <h3 className="w-[400px] text-5xl font-bold text-pitch-black">
          Big text for short section{" "}
          <span className="text-blue-one">header</span>.
        </h3>
        <p className="w-[400px] text-[22px] font-normal text-pitch-black">
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
      bgImage: "bg-[url('images/management-1.png')]",
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
      bgImage: "bg-[url('images/teacher-1.png')]",
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
      bgImage: "bg-[url('images/student-1.png')]",
      featureName: "Learning",
      iconSrc: "images/icon-students.png",
    },
  ];
  return (
    <div className="mx-auto mb-[200px] mt-8 flex w-[962px] flex-col gap-8">
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
        <h3 className="text-[32px]">
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
      className={`w-full gap-4 rounded-lg ${variant === "fill" ? "" : flow === "right" ? "flex" : "flex flex-row-reverse"}`}
    >
      {variant === "dual" && (
        <div
          className={`relative flex h-[560px] w-[395px] items-end rounded-2xl p-8 ${bgImage} bg-cover bg-[82%]`}
        >
          <div className="z-10 flex w-full flex-col gap-2">
            <h3 className="text-2xl font-semibold text-white">
              Designed for {featureName}
            </h3>
            <img src={iconSrc} alt="" className="h-[20px] w-[100px]" />
          </div>
        </div>
      )}
      <div
        className={`w-auto rounded-2xl px-12 ${variant === "fill" ? "py-8" : "min-w-[581px] py-12"} ${bgColor}`}
      >
        <section className="flex w-[400px] flex-col gap-6">
          <h6 className="text-white">{subHeading}</h6>
          <div
            className={`${contrast === "dark" ? "text-pitch-black" : "text-white"}`}
          >
            <h2 className="text-[40px] font-bold leading-[50.4px]">
              {heading}
            </h2>
            <p className="text-base font-medium">{body}</p>
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
          className={`${variant === "fill" ? "mt-[132px]" : "mt-8"}`}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="min-h-dvh w-full bg-pitch-black bg-grid2 pb-[200px] pt-[102px]">
      <div className="mx-auto flex w-[992px] justify-between">
        <h1 className="text-[40px] font-bold leading-[50.4px] text-white">
          Anyway, we’re just getting started
        </h1>
        <section className="flex h-[120px] flex-col gap-8">
          <p className="text-lg font-medium leading-[22.68px] text-white">
            At vero eos et accusamus et iusto tui odio na se tu latino
            praesentium voluptatum.
          </p>
          <Button variant="outlined-light" size="normal" className="w-fit">
            Contact us
          </Button>
        </section>
      </div>

      <div className="mx-auto mt-[104px] grid h-[656px] w-[992px] grid-cols-3 grid-rows-2 gap-4">
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
        <div className="col-start-3 col-end-4 rounded-2xl bg-dark-blue px-6 pt-[31px]">
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
        <div className="col-start-1 col-end-2 rounded-2xl bg-dark-blue px-6 pt-[31px]">
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
        <div className="bg-50 col-start-2 col-end-4 flex flex-col justify-between rounded-2xl bg-[url('images/platforms.png')] bg-[18%_7%] px-6 py-[31px]">
          <div className="relative w-full text-white">
            <h5 className="text-lg font-bold">Available on every platform</h5>
            <span className="absolute right-0 top-0 text-xs font-semibold text-white">
              05
            </span>
          </div>
          <div className="flex gap-4">
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
    <div className="bg-gradient-to-br from-[#8cc5eb] to-[#9de7ff] px-[144px] py-[100px]">
      <section className="flex justify-between">
        <h1 className="text-5xl font-semibold text-pitch-black">
          Ready to transform your school?
        </h1>
        <div className="flex gap-4">
          <Button variant="secondary" className="shadow-md-dark-blue">
            Join our waitlist
          </Button>
          <Button variant="primary" className="shadow-md-light-blue">
            Contact us
          </Button>
        </div>
      </section>
    </div>
  );
}
