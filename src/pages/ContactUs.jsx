import Navbar from "../ui/Navbar";
import BaseForm from "../components/BaseForm";
import FormLayout from "../ui/FormLayout";

function ContactUs() {
  const navItems = ["Product", "Resources", "About us"];
  const formFields = [
    {
      label: "What can we help you with?*",
      required: true,
      type: "select",
      variant: "text",
      text: "Sales Inquiry (Contact sales)",
      options: [
        {
          label: "Product Inquiry",
          value: "product inquiry",
        },
        {
          label: "Report an issue",
          value: "report an issue",
        },
        {
          label: "Sales Inquiry (Contact sales)",
          value: "sales inquiry (contact sales)",
        },
        {
          label: "I’m not sure (Other)",
          value: "other",
        },
      ],
    },
    {
      label: "Full name*",
      required: true,
    },
    {
      label: "Email address*",
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
      ],
    },
    {
      label: "Name of school / institution",
    },
    {
      label: "School location",
    },
    {
      specialSelect: true,
      subFields: [
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
      ],
    },
    {
      label: "Your message to us*",
      required: true,
      type: "textarea",
    },
  ];

  return (
    <div className="min-w-vw bg-grid3 bg-repeat-x">
      <section className="mx-auto w-full px-6 tablet:w-[480px] custom:w-[900px] laptop:w-[960px] desktop:w-[992px]">
        <Navbar
          navItems={navItems}
          btnText="Join our waitlist"
          type="light"
          btnSize="large"
          btnTo="/join-the-waitlist"
        />

        <FormLayout
          heading="Contact us"
          description="Need to get in touch with us? Fill out the form to reach out to
              our team, to learn more about Scoolspace."
        >
          <BaseForm
            formFields={formFields}
            buttonText="Submit"
            submitText="By submitting, you agree to our Terms of Service and Privacy Policy."
            page="contact-us"
          />
        </FormLayout>

        <p className="mx-auto mb-6 w-fit text-xs font-medium text-pitch-black">
          Copyright © 2024, Scoolspace. All rights reserved.
        </p>
      </section>
    </div>
  );
}

export default ContactUs;

{
  /* <main className="tablet:flex-row mb-[135.86px] mt-40 flex w-full justify-between">
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
            <BaseForm
              formFields={formFields}
              buttonText="Submit"
              submitText="By submitting, you agree to our Terms of Service and Privacy Policy."
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

// function ContactUs() {
//   const navItems = ["Product", "Resources", "About us"];
//   return (
//     <div className="w-full bg-grid3 bg-no-repeat">
//       <section className="desktop:w-[992px] laptop:w-[960px] custom:w-[900px] mx-auto">
//         <Navbar
//           navItems={navItems}
//           btnText="Join our waitlist"
//           type="light"
//           btnSize="large"
//           btnTo="/join-the-waitlist"
//         />
//         <main className="tablet:flex-row mb-[135.86px] mt-40 flex w-full justify-between">
//           <section className="flex w-[394px] flex-col gap-4">
//             <h1 className="text-[40px] font-bold leading-[50.4px] text-dark-blue">
//               Contact us
//             </h1>
//             <p className="text-base font-medium leading-5 text-pitch-black">
//               Need to get in touch with us? Fill out the form to reach out to
//               our team, to learn more about Scoolspace.
//             </p>
//           </section>

//           <div className="w-[480px]">
//             <form className="flex w-full flex-col gap-6">
//               <FormElementContainer>
//                 <Label required>What can we help you with?*</Label>
//                 <Select variant="text" text="Sales Inquiry (Contact sales)" />
//               </FormElementContainer>

//               <FormElementContainer>
//                 <Label htmlFor="fullname" required>
//                   Full name*
//                 </Label>
//                 <Input id="fullname" />
//               </FormElementContainer>

//               <FormElementContainer>
//                 <Label required>Email address*</Label>
//                 <Input />
//               </FormElementContainer>

//               <FormElementContainer>
//                 <Label>Phone number</Label>
//                 <FormElementContainer variant="dual">
//                   <Select variant="region" />
//                   <Input />
//                 </FormElementContainer>
//               </FormElementContainer>

//               <FormElementContainer>
//                 <Label>Which best describes you*</Label>
//                 <Select variant="text" text="Select an option" />
//               </FormElementContainer>

//               <FormElementContainer>
//                 <Label>Name of school / institution</Label>
//                 <Input />
//               </FormElementContainer>

//               <FormElementContainer>
//                 <Label>School location</Label>
//                 <Input />
//               </FormElementContainer>

//               <FormElementContainer>
//                 <Label required>Your message to us*</Label>
//                 {/*font-style will be changed for the inputs and the textarea*/}
//                 <textarea className="h-60 w-full rounded-lg border-[1px] border-dark-blue/20 p-4 outline-none" />
//               </FormElementContainer>

//               <Button size="full-big" variant="secondary">
//                 Submit
//               </Button>
//             </form>
//             <p className="mt-[26px] text-center text-xs font-medium text-[#1E1E1E]">
//               By submitting, you agree to our Terms of Service and Privacy
//               Policy.
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

// export default ContactUs;
