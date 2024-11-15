import { useEffect, useState } from "react";
import Button from "../components/Button";
import { FormElementContainer, Input, Label } from "./FormComponents";
import Select from "./Select";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BaseForm = ({ formFields, buttonText, submitText, page, route }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("+234");
  const [formData, setFormData] = useState({
    phone: "+234",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFieldChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  // Form validation logic
  const validateForm = () => {
    const allRequiredFieldsFilled = formFields.every((field) => {
      const fieldValue = formData[field.name];

      // Check if the field is required
      if (field.required) {
        // // If it's a select element with a default value, ensure it's not the default anymore
        // if (field.type === "select") {
        //   return fieldValue !== "Select an option";
        // }
        // // For other required fields, ensure they are not empty or only contain whitespace
        // return fieldValue && fieldValue.trim() !== "";
      }

      // If the field is not required, skip it
      return true;
    });

    setIsFormValid(allRequiredFieldsFilled);
  };

  useEffect(() => {
    validateForm(); // Validate form whenever formData changes
  }, [formData]);

  const navigate = useNavigate();
  const delayNavigation = (sec) =>
    setTimeout(() => {
      navigate("/");
    }, sec * 1000);

  const notify = (page) => {
    if (page === "join-our-waitlist") {
      toast("Thanks for Joining 👍", {
        style: { backgroundColor: "#00ADE6", color: "white" },
      });
      delayNavigation(5);
    }
    if (page === "contact-us") {
      toast("Message sent successfully 👍", {
        style: { backgroundColor: "#00ADE6", color: "white" },
      });
      delayNavigation(5);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, isFormValid);

    const url = `https://api.scoolspace.com/api/v1/website-api/${route}`;
    setIsSubmitting(true);
    try {
      // Handle form submission with formData state
      const res = await axios({
        method: "POST",
        url,
        data: formData,
      });
      console.log(formData);
      console.log("Form submitted successfully!", res.data);
      notify(page);
    } catch (err) {
      console.error("Error submitting form:", err);
      toast("Error submitting form!", {
        style: { backgroundColor: "#FF3333", color: "white" },
      });
      console.log(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
      <Toaster />
      {formFields.map((field, index) => {
        const {
          label,
          name,
          required,
          type,
          variant,
          isDual,
          hasDualElement,
          subFields,
          options,
          text,
          specialSelect,
        } = field;

        if (isDual) {
          return (
            <FormElementContainer key={index} variant="dual">
              <Select
                variant="region"
                options={options}
                required={required}
                value={formData[name] || ""}
                onChange={(selectedPrefix) => {
                  setPhonePrefix(selectedPrefix);
                  handleFieldChange(
                    "phone",
                    `${selectedPrefix}${formData.phone.slice(phonePrefix.length)}`,
                  );
                }}
              />
              <Input
                type={type || "text"}
                required={required}
                min="7"
                max="13"
                value={formData.phone}
                onChange={(e) => {
                  const inputVal = e.target.value;
                  if (inputVal.startsWith(phonePrefix)) {
                    handleFieldChange("phone", inputVal);
                  } else {
                    const newPhoneNumber = inputVal.slice(phonePrefix.length);
                    handleFieldChange(
                      "phone",
                      `${phonePrefix}${newPhoneNumber}`,
                    );
                  }
                }}
                onInput={(e) => {
                  if (!e.target.value.startsWith(phonePrefix)) {
                    handleFieldChange("phone", phonePrefix);
                  }
                }}
              />
            </FormElementContainer>
          );
        }

        if (hasDualElement) {
          return (
            <FormElementContainer key={index} variant="dual-elements">
              {subFields.map((el, idx) => (
                <FormElementContainer key={idx}>
                  <Label required={el.required}>{el.label}</Label>
                  {type === "input" ? (
                    <Input
                      type={el.type || "text"}
                      required={required}
                      value={formData[el.name] || ""}
                      onChange={(e) =>
                        handleFieldChange(el.name, e.target.value)
                      }
                    />
                  ) : (
                    <Select
                      variant={el.variant}
                      text={el.text || "Select an option"}
                      required={required}
                      options={el.options}
                      value={formData[el.name] || "Select an option"}
                      onChange={(selectedOption) => {
                        handleFieldChange(el.name, selectedOption);
                        if (required) {
                          validateForm();
                        }
                      }}
                    />
                  )}
                </FormElementContainer>
              ))}
            </FormElementContainer>
          );
        }

        if (specialSelect) {
          return (
            <FormElementContainer
              key={index}
              variant={selectedRole === "school" ? "dual-elements" : "single"}
            >
              <FormElementContainer>
                <Label required={subFields[0].required}>
                  {subFields[0].label}
                </Label>
                <Select
                  variant={subFields[0].variant}
                  text={subFields[0].text || "School"}
                  required={required}
                  options={subFields[0].options}
                  value={formData[subFields[0].name] || "Select an option"}
                  onChange={(selectedOption) => {
                    handleFieldChange(subFields[0].name, selectedOption);
                    setSelectedRole(selectedOption);
                    if (required) {
                      validateForm();
                    }
                  }}
                />
              </FormElementContainer>
              {selectedRole === "school" && (
                <FormElementContainer>
                  <Label required={subFields[1].required}>
                    {subFields[1].label}
                  </Label>
                  <Select
                    variant={subFields[1].variant}
                    text={subFields[1].text || "School"}
                    required={required}
                    value={formData[subFields[1].name] || "Select an option"}
                    options={subFields[1].options}
                    onChange={(selectedOption) => {
                      handleFieldChange(subFields[1].name, selectedOption);
                      if (required) {
                        validateForm();
                      }
                    }}
                  />
                </FormElementContainer>
              )}
            </FormElementContainer>
          );
        }

        return (
          <FormElementContainer key={index}>
            <Label required={required}>{label}</Label>
            {type === "select" ? (
              <Select
                variant={variant}
                text={text || "Select an option"}
                required={required}
                options={options}
                value={formData[name] || "Select an option"}
                onChange={(selectedOption) => {
                  handleFieldChange(name, selectedOption);
                  console.log(name);

                  if (required) {
                    validateForm();
                  }
                }}
              />
            ) : type === "textarea" ? (
              <Input
                type="textarea"
                required={required}
                value={formData[name] || ""}
                isTextarea
                onChange={(e) => handleFieldChange(name, e.target.value)}
              />
            ) : (
              <Input
                type={type || "text"}
                required={required}
                value={formData[name] || ""}
                onChange={(e) => handleFieldChange(name, e.target.value)}
              />
            )}
          </FormElementContainer>
        );
      })}

      <Button
        variant={page === "contact-us" ? "secondary" : "primary"}
        size="full-big"
        className={isSubmitting || !isFormValid ? "cursor-not-allowed" : ""}
        disabled={isSubmitting || !isFormValid}
      >
        {isSubmitting && page === "join-our-waitlist" && "Joining..."}
        {isSubmitting && page === "contact-us" && "Submitting..."}
        {!isSubmitting && buttonText}
      </Button>

      {submitText && (
        <p className="mt-[26px] text-center text-xs font-medium text-[#1E1E1E]">
          {submitText}
        </p>
      )}
    </form>
  );
};

export default BaseForm;
