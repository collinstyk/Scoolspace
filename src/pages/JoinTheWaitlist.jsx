import BaseForm from "../components/BaseForm";
import FormLayout from "../ui/FormLayout";
import Navbar from "../ui/Navbar";

function JoinTheWaitlist() {
  const navItems = ["Product", "Resources", "About us"];
  const formFields = [
    {
      label: "First name*",
      required: true,
    },
    {
      label: "Last name*",
      required: true,
    },
    {
      label: "Email*",
      required: true,
      type: "email",
    },
    {
      label: "Phone number",
      isDual: true, // Phone number input with region select
      options: [
        {
          flag: "images/countryFlags/ngn-flag.png",
          countryName: "Nigeria",
          countryCode: "+234",
        },
        {
          flag: "images/countryFlags/united-states.png",
          countryName: "USA",
          countryCode: "+1",
        },
        // {
        //   flag: "images/countryFlags/ngn-flag.png",
        //   countryName: "Nigeria",
        //   countryCode: "+236",
        // },
        // {
        //   flag: "images/countryFlags/ngn-flag.png",
        //   countryName: "Nigeria",
        //   countryCode: "+237",
        // },
      ],
    },
    {
      label: "Name of school / institution",
    },
    {
      label: "School location",
    },
    {
      label: "Which best describes you*",
      required: true,
      type: "select",
      variant: "text",
      text: "School",
      options: [
        {
          label: "School (Owner or Admin)",
          value: "school",
        },
        {
          label: "Teacher",
          value: "teacher",
        },
        {
          label: "Parent",
          value: "parent",
        },
      ],
    },
    {
      label: "Number of students enrolled",
      type: "select",
      variant: "text",
      text: "Select an option",
      options: [
        {
          label: "50 or less",
          value: "50 or less",
        },
        {
          label: "51 - 200",
          value: "51 - 200",
        },
        {
          label: "201 - 500",
          value: "201 - 500",
        },
        {
          label: "501 - 1000",
          value: "501 - 1000",
        },
        {
          label: "Greater than 1000",
          value: ">1000",
        },
      ],
    },
  ];

  return (
    <div className="w-dvw bg-grid3 bg-repeat-x">
      <section className="desktop:w-[992px] laptop:w-[960px] custom:w-[900px] mx-auto">
        <Navbar
          navItems={navItems}
          btnText="Contact us"
          type="light"
          btnSize="large"
          btnTo="/contact-us"
        />
        <FormLayout
          heading="Lorem ipsum sit amet iusto a secte consectetur ni."
          description="Join the waitlist. Be among the first to try a beta of our
              upcoming app that will be available on all devices as soon as we
              go live."
        >
          <BaseForm
            formFields={formFields}
            buttonText="Join the waitlist"
            submitText="By continuing, you agree to our Terms of Service and Privacy Policy."
          />
        </FormLayout>

        <p className="mx-auto mb-6 w-fit text-xs font-medium text-pitch-black">
          Copyright © 2024, Scoolspace. All rights reserved.
        </p>
      </section>
    </div>
  );
}

export default JoinTheWaitlist;

{
  /* <main className="custom:flex-row mb-[135.86px] mt-40 flex w-full flex-col justify-between">
          <section className="flex w-[400px] flex-col gap-4">
            <h1 className="text-[40px] font-bold leading-[50.4px] text-dark-blue">
              Lorem ipsum sit amet iusto a secte consectetur ni.
            </h1>
            <p className="text-base font-medium leading-5 text-pitch-black">
              Join the waitlist. Be among the first to try a beta of our
              upcoming app that will be available on all devices as soon as we
              go live.
            </p>
          </section>

          <div className="w-[480px]">
            <BaseForm
              formFields={formFields}
              buttonText="Join the waitlist"
              submitText="By continuing, you agree to our Terms of Service and Privacy Policy."
            />
          </div>
        </main> */
}

// import Button from "../components/Button";
// import {
//   FormElementContainer,
//   Input,
//   Label,
// } from "../components/FormComponents";
// import Select from "../components/Select";
// import Navbar from "../ui/Navbar";

// function JoinTheWaitlist() {
//   const navItems = ["Product", "Resources", "About us"];

//   return (
//     <div className="w-full bg-grid3 bg-no-repeat">
//       <section className="desktop:w-[992px] laptop:w-[960px] custom:w-[900px] mx-auto">
//         <Navbar
//           navItems={navItems}
//           btnText="Contact us"
//           type="light"
//           btnSize="large"
//           btnTo="/contact-us"
//         />
//         <main className="custom:flex-row mb-[135.86px] mt-40 flex w-full flex-col justify-between">
//           <section className="flex w-[400px] flex-col gap-4">
//             <h1 className="text-[40px] font-bold leading-[50.4px] text-dark-blue">
//               Lorem ipsum sit amet iusto a secte consectetur ni.
//             </h1>
//             <p className="text-base font-medium leading-5 text-pitch-black">
//               Join the waitlist. Be among the first to try a beta of our
//               upcoming app that will be available on all devices as soon as we
//               go live.
//             </p>
//           </section>

//           <div className="w-[480px]">
//             <form className="flex w-full flex-col gap-6">
//               {/* First Name and Last Name */}
//               <div className="flex w-full justify-between gap-8">
//                 <FormElementContainer>
//                   <Label required>First name*</Label>
//                   <Input />
//                 </FormElementContainer>

//                 <FormElementContainer>
//                   <Label required>Last name*</Label>
//                   <Input />
//                 </FormElementContainer>
//               </div>

//               {/* Email */}
//               <FormElementContainer>
//                 <Label required>Email*</Label>
//                 <Input type="email" />
//               </FormElementContainer>

//               {/* Phone Number */}
//               <FormElementContainer>
//                 <Label>Phone number</Label>
//                 <FormElementContainer variant="dual">
//                   <Select variant="region" />
//                   <Input />
//                 </FormElementContainer>
//               </FormElementContainer>

//               {/* Name of School / Institution */}
//               <FormElementContainer>
//                 <Label>Name of school / institution</Label>
//                 <Input />
//               </FormElementContainer>

//               {/* School Location */}
//               <FormElementContainer>
//                 <Label>School location</Label>
//                 <Input />
//               </FormElementContainer>

//               {/* Which Best Describes You and Number of Students */}
//               <div className="flex w-full justify-between gap-[31px]">
//                 <FormElementContainer>
//                   <Label required>Which best describes you*</Label>
//                   <Select variant="text" text="School" />
//                 </FormElementContainer>

//                 <FormElementContainer>
//                   <Label>Number of students enrolled</Label>
//                   <Select variant="text" text="Select an option" />
//                 </FormElementContainer>
//               </div>

//               {/* Join the Waitlist Button */}
//               <Button size="full-big">Join the waitlist</Button>
//             </form>

//             <p className="mt-[26px] text-center text-xs font-medium text-[#1E1E1E]">
//               By continuing, you agree to our{" "}
//               <a href="#">Terms of Service and Privacy Policy.</a>
//             </p>
//           </div>
//         </main>

//         <p className="mx-auto w-fit text-xs font-medium text-pitch-black">
//           Copyright © 2024, Scoolspace. All rights reserved.
//         </p>
//       </section>
//     </div>
//   );
// }

// export default JoinTheWaitlist;
