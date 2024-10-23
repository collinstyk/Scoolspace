import Button from "../components/Button";
import Navbar from "../ui/Navbar";

export default function Landing() {
  return (
    <>
      <HeroSection />
      <LandingSection2 />
      <Features />
    </>
  );
}

function HeroSection() {
  const navItems = ["Product", "Resources", "About us"];
  return (
    <section className="max-h-fit min-h-dvh w-full min-w-[1280px] bg-radial-blue pt-16 text-white">
      <Navbar navItems={navItems} type="dark" />
      <div className="flex justify-center pb-48">
        <div className="mt-32 flex items-center gap-[103px]">
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
              src="src/assets/images/bg-hero-1.png"
              alt=""
              className="h-full w-full"
            />
            <img
              src="src/assets/images/Hero-image.png"
              alt="hero-image"
              className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LandingSection2() {
  return (
    <section className="h-fit bg-white bg-grid py-[170px]">
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
      bgColor: "bg-gradient-to-r from-[#00ade6] to-[#00ade6]/30",
      subHeading: "Feature for Sub-heading",
      heading: "Some big text for feature header.",
      body: "At vero eos et accusamus et iusto tui odio ducimus dignissimos qui blanditiis se latino praesentium potenta voluptatum.",
      variant: "fill",
      btnVariant: "secondary",
      flow: null,
      contrast: "dark",
      btnText: "Learn more",
      userTypeImg: null,
      featureName: null,
    },
    {
      bgColor: "bg-gradient-to-r from-[#662D91] to-[#662D91]/30",
      subHeading: "Feature for Sub-heading",
      heading: "Some big text for feature header.",
      body: "At vero eos et accusamus et iusto tui odio ducimus dignissimos qui blanditiis se latino praesentium potenta voluptatum.",
      variant: "dual",
      btnVariant: "light",
      flow: "right",
      contrast: "light",
      btnText: "Join our waitlist",
      userTypeImg: null,
      featureName: "management",
    },
    {
      bgColor: "bg-gradient-to-r from-[#00ade6] to-[#00ade6]/30",
      subHeading: "Feature for Sub-heading",
      heading: "Some big text for feature header.",
      body: "At vero eos et accusamus et iusto tui odio ducimus dignissimos qui blanditiis se latino praesentium potenta voluptatum.",
      variant: "dual",
      btnVariant: "secondary",
      flow: "left",
      contrast: "dark",
      btnText: "Join our waitlist",
      userTypeImg: null,
      featureName: "teacher",
    },
    {
      bgColor: "bg-gradient-to-r from-[#F55967] to-[#F55967]/70",
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
    },
    {
      bgColor: "bg-gradient-to-r from-[#00ade6] to-[#00ade6]/30",
      subHeading: "Feature for Sub-heading",
      heading: "Some big text for feature header.",
      body: "At vero eos et accusamus et iusto tui odio ducimus dignissimos qui blanditiis se latino praesentium potenta voluptatum.",
      variant: "dual",
      btnVariant: "secondary",
      flow: "right",
      contrast: "dark",
      btnText: "Learn more",
      userTypeImg: null,
      featureName: "student",
    },
  ];
  return (
    <div className="mx-auto flex w-[962px] flex-col gap-8">
      <div className="flex w-full flex-col gap-4">
        {featuresInput.map((input) => (
          <Feature
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
            featureName={input.featureName}
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
  featureName,
}) {
  return (
    <div
      className={`w-full gap-4 rounded-lg ${variant === "fill" ? "" : flow === "right" ? "flex" : "flex flex-row-reverse"}`}
    >
      {variant === "dual" && (
        <div>
          <img src={`src/assets/images/${featureName}-1.png`} alt="" />
        </div>
      )}
      <div
        className={`w-auto rounded-lg px-12 ${variant === "fill" ? "py-8" : "min-w-[581px] py-12"} ${bgColor}`}
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
              src={`src/assets/images/${userTypeImg}.png`}
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
          {btnText || "Learn more"}
        </Button>
      </div>
    </div>
  );
}

/*
{
bgColor:,
subHeading: 'Feature for Sub-heading',
heading: 'Some big text for feature header.',
body: 'At vero eos et accusamus et iusto tui odio ducimus dignissimos qui blanditiis se latino praesentium potenta voluptatum.',
  variant: '',
  btnVariant: '',
  flow: '',
  contrast: '',
  btnText: 'Join our waitlist',
  userTypeImg: null,
  featureName: 'management',
}
*/
