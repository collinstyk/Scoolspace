import { forwardRef, useState } from "react";
import Select from "./Select";

export const FormElementContainer = ({ children, variant = "single" }) => {
  return (
    <div
      className={`flex w-full ${variant === "single" ? "flex-col gap-1" : variant === "dual-elements" ? "flex-col items-end gap-8 sm:flex-row" : "gap-2"} `}
    >
      {children}
    </div>
  );
};

export const Label = ({ children, required, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="text-xs font-medium text-pitch-black">
      {children}
      {required && <span className="opacity-60">{` (Required)`}</span>}
    </label>
  );
};

export const Input = forwardRef(
  (
    {
      id = "",
      type = "text",
      onChange,
      onBlur,
      name,
      onInput,
      value,
      required,
    },
    ref,
  ) => {
    return (
      <>
        {type === "textarea" ? (
          <textarea
            id={id}
            className={`h-60 w-full resize-none text-wrap rounded-lg border-[1px] border-dark-blue/20 bg-white px-6 py-5 align-top text-sm font-medium leading-normal text-pitch-black outline-none`}
            onChange={onChange}
            onInput={onInput}
            value={value}
            required={required}
            ref={ref}
          />
        ) : (
          <input
            id={id}
            type={type}
            className={`h-[60px] w-full rounded-lg border-[1px] border-dark-blue/20 bg-white px-4 font-plus-jakarta-sans text-sm font-medium text-pitch-black`}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            onInput={onInput}
            value={value}
            required={required}
            ref={ref}
          />
        )}
      </>
    );
  },
);

export const FormErrorMessage = ({ message }) => (
  <p className="w-fit rounded-md bg-red-100 p-1 font-plus-jakarta-sans text-xs text-passion-red">
    {message}
  </p>
);

export function PhoneInput({ register, errors }) {
  const phoneOptions = [
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
  ];
  // Handle prefix selection from the dropdown
  const handlePrefixChange = (selectedPrefix) => {
    setPhonePrefix(selectedPrefix);
    setPhoneNumber(selectedPrefix); // Reset the phone number with new prefix
  };
  const [phonePrefix, setPhonePrefix] = useState("+234");
  const [phoneNumber, setPhoneNumber] = useState("+234"); // Initialize with prefix

  // Handle phone number input change
  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;

    // Ensure the value always starts with the phonePrefix
    if (!inputValue.startsWith(phonePrefix)) {
      setPhoneNumber(phonePrefix); // Reset to prefix if user tries to modify it
    } else {
      setPhoneNumber(inputValue);
    }
  };
  return (
    <FormElementContainer>
      {errors.phone && <FormErrorMessage message={errors.phone.message} />}
      <FormElementContainer variant="dual">
        <Select
          variant="region"
          options={phoneOptions}
          onChange={(selectedPrefix) => {
            handlePrefixChange(selectedPrefix);
          }}
        />
        <Input
          type="tel"
          value={phoneNumber || ""}
          {...register("phone", {
            validate: (value) => {
              // Check if the input value is more than just the prefix
              const trimmedValue = value.replace(phonePrefix, "").trim();
              if (
                trimmedValue &&
                (trimmedValue.length < 7 || trimmedValue.length > 15)
              ) {
                return "Phone number must be between 7 and 15 digits";
              }
              return true; // Valid if empty or if a valid number is entered
            },
            onChange: handlePhoneNumberChange,
          })}
          onKeyDown={(e) => {
            // Prevent user from deleting the prefix
            const cursorPosition = e.target.selectionStart;
            if (cursorPosition <= phonePrefix.length && e.key === "Backspace") {
              e.preventDefault(); // Block backspace if cursor is within the prefix
            }
          }}
        />
      </FormElementContainer>
    </FormElementContainer>
  );
}
