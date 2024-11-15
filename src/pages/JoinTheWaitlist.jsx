import { useState } from "react";
import BaseForm from "../components/BaseForm";
import Button from "../components/Button";
import {
  FormErrorMessage,
  FormElementContainer,
  Input,
  Label,
  PhoneInput,
} from "../components/FormComponents";
import Select from "../components/Select";
import FormLayout from "../ui/FormLayout";
import Navbar from "../ui/Navbar";
import { Controller, useForm } from "react-hook-form";

function JoinTheWaitlist() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navItems = ["Product", "Resources", "About us"];
  const options = [
    [
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
    [
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
  ];

  return (
    <div className="min-h-dvh w-dvw bg-white bg-grid3 bg-repeat-x font-plus-jakarta-sans">
      <section className="mx-auto custom:w-[900px] laptop:w-[960px] desktop:w-[992px]">
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
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="flex w-full flex-col gap-6"
          >
            <FormElementContainer variant="dual-elements">
              <FormElementContainer>
                <Label required>First name*</Label>
                <Input
                  type="text"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <FormErrorMessage message="Please enter your firstname" />
                )}
              </FormElementContainer>
              <FormElementContainer>
                <Label required>Last name*</Label>
                <Input
                  type="text"
                  {...register("lastName", { required: true })}
                />
                {errors.firstName && (
                  <FormErrorMessage message="Please enter your lastname" />
                )}
              </FormElementContainer>
            </FormElementContainer>

            <FormElementContainer>
              <Label>Email*</Label>
              <Input type="email" {...register("email", { required: true })} />
              {errors.firstName && (
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
                  name="whichBestDescribesYou"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Please choose an option" }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      {error && <FormErrorMessage message={error.message} />}
                      <Select
                        {...field}
                        variant="text"
                        text="Select an Option"
                        options={options[0]}
                      />
                    </>
                  )}
                />
              </FormElementContainer>

              <FormElementContainer>
                <Label>Number of students enrolled</Label>
                <Controller
                  name="numberOfStudentEnrolled"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      {...field}
                      variant="text"
                      text="Select an Option"
                      options={options[1]}
                    />
                  )}
                />
              </FormElementContainer>
            </FormElementContainer>

            <Button
              variant="primary"
              size="full-big"
              // className={isSubmitting || !isFormValid ? "cursor-not-allowed" : ""}
              // disabled={isSubmitting || !isFormValid}
            >
              {/* {isSubmitting && page === "join-our-waitlist" && "Joining..."}
              {isSubmitting && page === "contact-us" && "Submitting..."}
              {!isSubmitting && buttonText} */}
              Join our waitlist
            </Button>

            <p className="mt-[26px] text-center text-xs font-medium text-[#1E1E1E]">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </form>
        </FormLayout>

        <p className="mx-auto mb-6 w-fit text-xs font-medium text-pitch-black">
          Copyright © 2024, Scoolspace. All rights reserved.
        </p>
      </section>
    </div>
  );
}

export default JoinTheWaitlist;
