import Button from "./Button";

function FinalCTA() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-br from-[#8cc5eb] to-[#9de7ff] px-12 py-8 tablet:py-[98px] laptop:py-[110px] desktop:py-[100px]"
    >
      <section className="mx-auto flex flex-col items-start justify-between gap-6 tablet:w-[704px] tablet:flex-row tablet:items-center tablet:gap-0 laptop:w-[960px] desktop:w-[1200px]">
        <h1
          // style={{ lineHeight: "3rem" }}
          className="text-[22px] font-semibold leading-tight text-pitch-black tablet:w-[350px] tablet:text-2xl tablet:leading-7 lg:w-[451px] lg:text-[40px] lg:leading-[48px] desktop:text-[48px]"
        >
          Ready to transform your school?
        </h1>
        <div className="flex gap-4">
          <Button
            variant="secondary"
            className="h-fit text-nowrap px-4 py-[10px] text-xs shadow-md-dark-blue laptop:text-sm desktop:px-6 desktop:text-base"
            to="/join-the-waitlist"
          >
            Join our waitlist
          </Button>
          <Button
            variant="primary"
            className="h-fit text-nowrap px-4 py-[10px] text-xs shadow-md-light-blue laptop:text-sm desktop:px-6 desktop:text-base"
            to="/contact-us"
          >
            Contact us
          </Button>
        </div>
      </section>
    </section>
  );
}

export default FinalCTA;
