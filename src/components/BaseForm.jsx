import { useState } from "react";
import Button from "../components/Button";
import { FormElementContainer, Input, Label } from "./FormComponents";
import Select from "./Select";

const BaseForm = ({ formFields, buttonText, submitText }) => {
  const [phonePrefix, setPhonePrefix] = useState("+234");
  const [phoneNumber, setPhoneNumber] = useState(phonePrefix); // Ensure input includes prefix

  return (
    <form className="flex w-full flex-col gap-6">
      {formFields.map((field, index) => {
        const { label, required, type, variant, isDual, options, text } = field;

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

        return (
          <FormElementContainer key={index}>
            <Label required={required}>{label}</Label>
            {type === "select" ? (
              <Select
                variant={variant}
                text={text || "Select an option"}
                options={options}
              />
            ) : (
              <Input type={type || "text"} />
            )}
          </FormElementContainer>
        );
      })}

      <Button size="full-big">{buttonText}</Button>

      {submitText && (
        <p className="mt-[26px] text-center text-xs font-medium text-[#1E1E1E]">
          {submitText}
        </p>
      )}
    </form>
  );
};

export default BaseForm;
