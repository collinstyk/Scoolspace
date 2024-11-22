import Navbar from "../ui/Navbar";
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
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SEO from "../Seo";
// import PhoneInput from "react-phone-input-2";

function ContactUs() {
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   name: "Scoolspace",
  //   url: "https://www.scoolspace.com/contact-us",
  //   logo: "https://www.scoolspace.com/assets/Scoolspace-favicon-B16jv-6R.png",
  // };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navItems = [
    { label: "Product", to: "/product" },
    { label: "Resources", to: "#" },
    { label: "About us", to: "#" },
  ];
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
  const selectedRole = watch("whichBestDescribesYou");
  const inquiry = watch("whatCanWeHelpWith");

  const navigate = useNavigate();
  const delayNavigation = (sec) =>
    setTimeout(() => {
      navigate("/");
    }, sec * 1000);

  const notify = () => {
    toast("Message sent successfully 👍", {
      style: { backgroundColor: "#00ADE6", color: "white" },
    });
    delayNavigation(5);
  };

  const uploadData = async (data) => {
    console.log(data);
    try {
      setIsSubmitting(true);
      const res = await axios({
        method: "POST",
        url: "https://api.scoolspace.com/api/v1/website-api/contact-us",
        data,
      });
      console.log("Form submitted successfully!", res.data);
      notify();
    } catch (error) {
      console.error("Error submitting form:", err);
      toast("Error submitting form!", {
        style: { backgroundColor: "#FF3333", color: "white" },
      });
      console.log(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-dvh w-dvw bg-white bg-grid3 bg-repeat-x pb-6 font-plus-jakarta-sans">
      {/* <SEO
        title="Scoolspace | Contact Us"
        schema={schema}
        description="Scoolspace Contact us page"
        route="/contact-us"
      /> */}
      <SEO />
      <section className="mx-auto w-full custom:w-[900px] laptop:w-[960px] desktop:w-[992px]">
        <Navbar
          navItems={navItems}
          btnText="Join our waitlist"
          type="light"
          btnSize="large"
          btnTo="/waitlist"
        />

        <FormLayout
          heading="Contact us"
          description="Need to get in touch with us? Fill out the form to reach out to
              our team, to learn more about Scoolspace."
        >
          <form
            onSubmit={handleSubmit((data) => {
              uploadData(data);
            })}
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

            <PhoneInput register={register} errors={errors} />

            <FormElementContainer>
              <Label>Name of school / institution</Label>
              <Input type="text" {...register("institution")} />
            </FormElementContainer>

            <FormElementContainer>
              <Label>School location</Label>
              <Input type="text" {...register("location")} />
            </FormElementContainer>

            {inquiry === "sales inquiry (contact sales)" && (
              <FormElementContainer variant="dual-elements">
                <FormElementContainer>
                  <Label required>Which best describes you*</Label>
                  <Controller
                    name="whichBestDescribesYou"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: inquiry === "sales inquiry (contact sales)",
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Select
                          {...field}
                          variant="text"
                          text="Select an Option"
                          required
                          options={options[1]}
                        />
                        {error && (
                          <FormErrorMessage message="Please choose an option" />
                        )}
                      </>
                    )}
                  />
                </FormElementContainer>

                {selectedRole === "school" && (
                  <FormElementContainer>
                    <Label>Number of students enrolled</Label>
                    <Controller
                      name="numberOfStudentsEnrolled"
                      control={control}
                      defaultValue=""
                      rules={{ required: selectedRole === "school" }}
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
                )}
              </FormElementContainer>
            )}

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
              className={isSubmitting ? "cursor-not-allowed" : ""}
              disabled={isSubmitting}
            >
              {isSubmitting && "Submitting..."}
              {!isSubmitting && "Submit"}
            </Button>
          </form>
        </FormLayout>

        <p className="mx-auto w-fit text-center text-xs font-medium text-pitch-black">
          Copyright © 2024, Scoolspace. All rights reserved.
        </p>
      </section>
    </div>
  );
}

export default ContactUs;
