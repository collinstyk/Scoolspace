export const FormElementContainer = ({ children, variant = "single" }) => {
  return (
    <div
      className={`flex w-full ${variant === "single" ? "flex-col gap-1" : variant === "dual-elements" ? "gap-8" : "gap-2"} `}
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

export const Input = ({
  id = "",
  type = "text",
  onChange,
  onInput,
  value,
  isTextarea,
}) => {
  return (
    <>
      {isTextarea ? (
        <textarea
          id={id}
          className={`h-60 w-full resize-none text-wrap rounded-lg border-[1px] border-dark-blue/20 px-6 py-5 align-top leading-normal outline-none`}
          onChange={onChange}
          onInput={onInput}
          value={value}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={`h-[60px] w-full rounded-lg border-[1px] border-dark-blue/20`}
          onChange={onChange}
          onInput={onInput}
          value={value}
        />
      )}
    </>
  );
};
