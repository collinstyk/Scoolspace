import Navbar from "../ui/Navbar";
import BaseForm from "../components/BaseForm";
import FormLayout from "../ui/FormLayout";
import {
  FormErrorMessage,
  FormElementContainer,
  Input,
  Label,
  PhoneInput,
} from "../components/FormComponents";
import Button from "../components/Button";
import Select from "../components/Select";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

function ContactUs() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navItems = ["Product", "Resources", "About us"];
  const options = [
    [
      { label: "Product Inquiry", value: "product inquiry" },
      { label: "Report an issue", value: "report an issue" },
      {
        label: "Sales Inquiry (Contact sales)",
        value: "sales inquiry (contact sales)",
      },
      { label: "I’m not sure (Other)", value: "other" },
    ],
    [
      { label: "School (Owner or Admin)", value: "school" },
      { label: "Teacher", value: "teacher" },
      { label: "Parent", value: "parent" },
    ],
    [
      { label: "50 or less", value: "50 or less" },
      { label: "51 - 200", value: "51 - 200" },
      { label: "201 - 500", value: "201 - 500" },
      { label: "501 - 1000", value: "501 - 1000" },
      { label: "Greater than 1000", value: ">1000" },
    ],
  ];

  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    if (selectedInquiry) {
      console.log("Selected Inquiry:", selectedInquiry); // Log the new value when it changes
    }
  }, [selectedInquiry]);

  const handleSelectChange = (option) => {
    setSelectedInquiry(() => option);
    console.log(option);
  };

  return (
    <div className="min-w-vw min-h-dvh bg-white bg-grid3 bg-repeat-x font-plus-jakarta-sans">
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
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="flex w-full flex-col gap-6"
          >
            <FormElementContainer>
              <Label required>What can we help you with?*</Label>
              <Controller
                name="whatCanWeHelpWith"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    {...field}
                    variant="text"
                    options={options[0]}
                    required
                    text="Select an Option"
                  />
                )}
              />
            </FormElementContainer>

            <FormElementContainer>
              <Label required>Full name*</Label>
              <Input
                type="text"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <FormErrorMessage message="Please enter your Fullname" />
              )}
            </FormElementContainer>

            <FormElementContainer>
              <Label required>Email address*</Label>
              <Input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <FormErrorMessage message="Please enter a valid email address" />
              )}
            </FormElementContainer>

            <PhoneInput />

            <FormElementContainer>
              <Label>Name of school / institution</Label>
              <Input type="text" {...register("institution")} />
            </FormElementContainer>

            <FormElementContainer>
              <Label>School location</Label>
              <Input type="text" {...register("location")} />
            </FormElementContainer>

            <FormElementContainer variant="dual-elements">
              <FormElementContainer>
                <Label required>Which best describes you*</Label>
                <Controller
                  name="whatBestDescribesYou"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Please choose an option" }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Select
                        {...field}
                        variant="text"
                        text="Select an Option"
                        required
                        options={options[1]}
                      />
                      {error && <FormErrorMessage message={error.message} />}
                    </>
                  )}
                />
              </FormElementContainer>

              <FormElementContainer>
                <Label>Number of students enrolled</Label>
                <Controller
                  name="numberOfStudentsEnrolled"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      {...field}
                      variant="text"
                      text="Select an Option"
                      options={options[2]}
                    />
                  )}
                />
              </FormElementContainer>
            </FormElementContainer>

            <FormElementContainer>
              <Label required>Your message to us*</Label>
              {errors.message && (
                <FormErrorMessage message="Please enter your message" />
              )}
              <Input
                type="textarea"
                {...register("message", { required: true })}
              />
            </FormElementContainer>

            <Button
              variant="secondary"
              size="full-big"
              // className={isSubmitting || !isFormValid ? "cursor-not-allowed" : ""}
              // disabled={isSubmitting || !isFormValid}
            >
              {/* {isSubmitting && page === "join-our-waitlist" && "Joining..."}
              {isSubmitting && page === "contact-us" && "Submitting..."}
              {!isSubmitting && buttonText} */}
              Submit
            </Button>
          </form>
        </FormLayout>

        <p className="mx-auto mb-6 w-fit text-center text-xs font-medium text-pitch-black">
          Copyright © 2024, Scoolspace. All rights reserved.
        </p>
      </section>
    </div>
  );
}

export default ContactUs;
