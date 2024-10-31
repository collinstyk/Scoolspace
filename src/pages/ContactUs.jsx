import Button from "../components/Button";
import Select from "../components/Select";
import Navbar from "../ui/Navbar";

function ContactUs() {
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
        <main className="mb-[135.86px] mt-40 flex w-full justify-between">
          <section className="flex w-[394px] flex-col gap-4">
            <h1 className="text-[40px] font-bold leading-[50.4px] text-dark-blue">
              Contact us
            </h1>
            <p className="text-base font-medium leading-5 text-pitch-black">
              Need to get in touch with us? Fill out the form to reach out to
              our team, to learn more about Scoolspace.
            </p>
          </section>

          <div className="w-[480px]">
            <form className="flex w-full flex-col gap-6">
              <FormElementContainer>
                <Label required>What can we help you with?*</Label>
                <Select variant="text" text="Sales Inquiry (Contact sales)" />
              </FormElementContainer>

              <FormElementContainer>
                <Label htmlFor="fullname" required>
                  Full name*
                </Label>
                <Input id="fullname" />
              </FormElementContainer>

              <FormElementContainer>
                <Label required>Email address*</Label>
                <Input />
              </FormElementContainer>

              <FormElementContainer>
                <Label>Phone number</Label>
                <FormElementContainer variant="dual">
                  <Select variant="region" />
                  <Input />
                </FormElementContainer>
              </FormElementContainer>

              <FormElementContainer>
                <Label>Which best describes you*</Label>
                <Select variant="text" text="Select an option" />
              </FormElementContainer>

              <FormElementContainer>
                <Label>Name of school / institution</Label>
                <Input />
              </FormElementContainer>

              <FormElementContainer>
                <Label>School location</Label>
                <Input />
              </FormElementContainer>

              <FormElementContainer>
                <Label required>Your message to us*</Label>
                {/*font-style will be changed for the inputs and the textarea*/}
                <textarea className="h-60 w-full rounded-lg border-[1px] border-dark-blue/20 p-4 outline-none" />
              </FormElementContainer>

              <Button size="full">Continue</Button>
            </form>
            <p className="mt-[26px] text-center text-xs font-medium text-[#1E1E1E]">
              By submitting, you agree to our Terms of Service and Privacy
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

const FormElementContainer = ({ children, variant = "single" }) => {
  return (
    <div
      className={`flex w-full ${variant === "single" ? "flex-col gap-1" : "gap-2"} `}
    >
      {children}
    </div>
  );
};

const Label = ({ children, required, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="text-xs font-medium text-pitch-black">
      {children}
      {required && <span className="opacity-60">{` (Required)`}</span>}
    </label>
  );
};

const Input = ({ id = "", type = "text" }) => {
  return (
    <input
      id={id}
      type={type}
      className={`h-[60px] w-full rounded-lg border-[1px] border-dark-blue/20`}
    />
  );
};

/*<div className="flex w-full justify-between">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-xs font-medium text-pitch-black"
                  >
                    First name*
                  </label>
                  <input
                    type="text"
                    className="h-[60px] w-[224px] rounded-lg border-[1px] border-dark-blue/20"
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
                    className="h-[60px] w-[224px] rounded-lg border-[1px] border-dark-blue/20"
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
                  type="email"
                  className="h-[60px] rounded-lg border-[1px] border-dark-blue/20"
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
                  <Select variant="region" />
                  <input
                    type="text"
                    className="h-[60px] w-full rounded-lg border-[1px] border-dark-blue/20"
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
                  className="h-[60px] rounded-lg border-[1px] border-dark-blue/20"
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
                  className="h-[60px] rounded-lg border-[1px] border-dark-blue/20"
                />
              </div>

              <div className="flex w-full justify-between gap-[31px]">
                <div className="flex w-full flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-xs font-medium text-pitch-black"
                  >
                    Which best describes you*
                  </label>
                  <Select variant="text" text="School" />
                </div>

                <div className="flex w-full flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-xs font-medium text-pitch-black"
                  >
                    Number of students enrolled
                  </label>
                  <Select variant="text" text="Select an option" />
                </div>
              </div>*/

export default ContactUs;
