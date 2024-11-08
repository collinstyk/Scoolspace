import { useState } from "react";
import Button from "../components/Button";
import { FormElementContainer, Input, Label } from "./FormComponents";
import Select from "./Select";

const BaseForm = ({ formFields, buttonText, submitText, page }) => {
  const [phonePrefix, setPhonePrefix] = useState("+234");
  const [phoneNumber, setPhoneNumber] = useState(phonePrefix);
  const [selectedRole, setSelectRole] = useState(null);

  return (
    <form className="flex w-full flex-col gap-6">
      {formFields.map((field, index) => {
        const {
          label,
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
                onChange={(selectedPrefix) => {
                  // Update prefix on select change and reflect it in the phone number
                  setPhonePrefix(selectedPrefix);
                  setPhoneNumber(
                    `${selectedPrefix}${phoneNumber.slice(phonePrefix.length)}`,
                  );
                }}
              />
              <Input
                type={type || "text"}
                value={phoneNumber || ""} // This reflects both prefix and number
                onChange={(e) => {
                  const inputVal = e.target.value;
                  // Strip out the current prefix and append the new number
                  if (inputVal.startsWith(phonePrefix)) {
                    setPhoneNumber(inputVal);
                  } else {
                    const newPhoneNumber = inputVal.slice(phonePrefix.length);
                    setPhoneNumber(`${phonePrefix}${newPhoneNumber}`);
                  }
                }}
                onInput={(e) => {
                  // Ensure prefix cannot be deleted
                  if (!e.target.value.startsWith(phonePrefix)) {
                    setPhoneNumber(phonePrefix);
                  }
                }}
              />
            </FormElementContainer>
          );
        }

        // if (isDual) {
        //   return (
        //     <FormElementContainer key={index} variant="dual">
        //       <Select variant="region" options={options} />
        //       <Input type={type || "text"} />
        //     </FormElementContainer>
        //   );
        // }

        if (hasDualElement) {
          return (
            <FormElementContainer key={index} variant="dual-elements">
              {subFields.map((el, index) => (
                <FormElementContainer key={index}>
                  <Label>{el.label}</Label>
                  {type === "input" ? (
                    <Input type={type || "text"} />
                  ) : (
                    <Select
                      variant={variant}
                      text={text || "Select an option"}
                      options={options}
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
                <Label>{subFields[0].label}</Label>
                <Select
                  variant={subFields[0].variant}
                  text={subFields[0].text || "School"}
                  options={subFields[0].options}
                  onChange={(selectedOption) => setSelectRole(selectedOption)}
                />
              </FormElementContainer>
              {selectedRole === "school" && (
                <FormElementContainer>
                  <Label>{subFields[1].label}</Label>
                  <Select
                    variant={subFields[1].variant}
                    text={subFields[1].text || "School"}
                    options={subFields[1].options}
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
                options={options}
              />
            ) : type === "textarea" ? (
              <Input type={type || "text"} isTextarea />
            ) : (
              <Input type={type || "text"} />
            )}
          </FormElementContainer>
        );
      })}

      <Button
        variant={page === "contact-us" ? "secondary" : "primary"}
        size="full-big"
      >
        {buttonText}
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
