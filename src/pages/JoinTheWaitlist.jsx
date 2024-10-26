import Button from "../components/Button";
import CustomSelect from "../components/CustomSelect";
import Navbar from "../ui/Navbar";

function JoinTheWaitlist() {
  const navItems = ["Product", "Resources", "About us"];
  return (
    <div className="w-full bg-grid3 bg-no-repeat pt-[40px]">
      <section className="mx-auto w-[992px]">
        <Navbar
          navItems={navItems}
          btnText="Contact us"
          type="light"
          btnSize="large"
        />
        <main className="mt-40 flex w-full justify-between">
          <section className="flex w-[400px] flex-col gap-4">
            <h1 className="text-[40px] font-bold leading-[50.4px] text-dark-blue">
              Lorem ipsum sit amet iusto a secte consectetur ni.
            </h1>
            <p className="text-base font-medium leading-5 text-pitch-black">
              Join the waitlist. Be among the first to try a beta of our
              upcoming app that will be available all devices as soon as we goes
              live.
            </p>
          </section>

          <div className="w-[480px]">
            <form className="flex w-full flex-col gap-6">
              <div className="flex w-full justify-between">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-xs font-medium text-pitch-black"
                  >
                    First name*
                  </label>
                  <input
                    type="text"
                    className="border-dark-blue/20 h-[60px] w-[224px] rounded-lg border-[1px]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-xs font-medium text-pitch-black"
                  >
                    Last name*
                  </label>
                  <input
                    type="text"
                    className="border-dark-blue/20 h-[60px] w-[224px] rounded-lg border-[1px]"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-xs font-medium text-pitch-black"
                >
                  Email*
                </label>
                <input
                  type="text"
                  className="border-dark-blue/20 h-[60px] rounded-lg border-[1px]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="text-xs font-medium text-pitch-black"
                >
                  Phone number
                </label>
                <div className="flex gap-2">
                  <CustomSelect />
                  <input
                    type="text"
                    className="border-dark-blue/20 h-[60px] w-full rounded-lg border-[1px]"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-xs font-medium text-pitch-black"
                >
                  Name of school / institution
                </label>
                <input
                  type="text"
                  className="border-dark-blue/20 h-[60px] rounded-lg border-[1px]"
                />
              </div>

              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-xs font-medium text-pitch-black"
                >
                  School location
                </label>
                <input
                  type="text"
                  className="border-dark-blue/20 h-[60px] rounded-lg border-[1px]"
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-xs font-medium text-pitch-black"
                >
                  Which best describes you*
                </label>
                <select name="" id=""></select>
                <label
                  htmlFor=""
                  className="text-xs font-medium text-pitch-black"
                >
                  Number of students enrolled
                </label>
                <select name="" id=""></select>
              </div>
              <Button size="full">Continue</Button>
            </form>
            <p className="mt-[26px] text-center text-xs font-medium text-[#1E1E1E]">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </main>
        <p className="mx-auto w-fit text-xs font-medium text-pitch-black">
          Copyright © 2024, Scoolspace. All rights reserved.
        </p>
      </section>
    </div>
  );
}

export default JoinTheWaitlist;
