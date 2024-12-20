import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

const Select = forwardRef(
  ({ value, onChange, variant, text, options, required }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
      variant === "region" ? options[0] : value || null,
    );

    const toggleIsOpen = () => setIsOpen(!isOpen);
    const dropdownRef = useRef(null);

    const selectOption = (option) => {
      setSelectedOption(option);
      onChange(option.value || option?.countryCode); // Pass selected option back to the parent
      setIsOpen(false);
    };

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    // useEffect(() => {
    //   if (onChange && selectedOption) {
    //     // console.log("selectedOption changed:", selectedOption); // Debug log
    //     onChange(selectedOption?.value || selectedOption?.countryCode);
    //   }
    // }, [selectedOption]);

    return (
      <>
        {variant === "region" && (
          <div
            className="relative w-fit cursor-pointer"
            ref={dropdownRef}
            onClick={toggleIsOpen}
          >
            <div className="flex h-[60px] w-[90px] items-center justify-center gap-2 rounded-lg bg-pitch-black/10">
              <img
                src={selectedOption.flag}
                alt="country flag"
                className="h-8 w-8"
              />
              <img
                src="images/icon-chevron.svg"
                alt="dropdown"
                className={`h-4 w-4 transition-all duration-300 ${
                  isOpen ? "-rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isOpen && (
              <div className="absolute z-10 mt-1 overflow-hidden overflow-y-auto rounded-md bg-white text-pitch-black shadow-md transition-all duration-300 scrollbar-hide">
                {options.map((option) => (
                  <div
                    key={option.countryCode}
                    className="flex w-48 cursor-pointer items-center gap-2 bg-white px-5 py-2 text-sm font-semibold hover:bg-pitch-black/10"
                    onClick={() => selectOption(option)}
                  >
                    <img src={option.flag} alt="" className="h-4 w-5" />
                    <p>{option.countryName}</p>
                    <span className="text-xs">{option.countryCode}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {variant === "text" && (
          <div
            className="relative w-full"
            ref={dropdownRef}
            onClick={toggleIsOpen}
          >
            <div className="flex h-[60px] items-center justify-between rounded-lg border border-dark-blue/20 bg-white px-4">
              <p className="text-sm font-medium text-pitch-black">
                {selectedOption?.value === "school"
                  ? "School"
                  : selectedOption?.label || text}
              </p>
              <img
                src="images/icon-chevron.svg"
                alt="chevron image"
                className={`h-6 w-6 transition-all duration-300 ${
                  isOpen ? "-rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`absolute z-10 mt-1 flex w-full flex-col gap-2 overflow-hidden overflow-y-auto rounded-lg border border-dark-blue/20 bg-white p-4 text-sm font-semibold text-pitch-black transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0 py-0 opacity-0"}`}
            >
              {options.map((option) => (
                <div
                  className="cursor-pointer rounded-md p-2 hover:bg-blue-one/10"
                  key={option.value}
                  onClick={() => selectOption(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  },
);

export default Select;

// function Select({ value, onChange, variant, text, options, required }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(
//     variant === "region" ? options[0] : null,
//   );

//   const toggleIsOpen = () => setIsOpen(!isOpen);

//   const dropdownref = useRef(null);

//   const selectOption = (option) => {
//     setSelectedOption(option);
//     // onChange(option.value || option.countryCode);
//     setIsOpen(false);
//   };

//   // const handleChange = useCallback(
//   //   (optionValue) => {
//   //     if (onChange) {
//   //       onChange(optionValue);
//   //     }
//   //   },
//   //   [onChange], // Depend on the stable onChange prop
//   // );

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownref.current && !dropdownref.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     if (onChange && selectedOption) {
//       // console.log("selectedOption changed:", selectedOption); // Debug log
//       onChange(selectedOption?.value || selectedOption?.countryCode);
//     }
//   }, [selectedOption]);

//   return (
//     <>
//       {variant === "region" && (
//         <div
//           className="relative w-fit cursor-pointer"
//           ref={dropdownref}
//           onClick={() => {
//             toggleIsOpen();
//           }}
//         >
//           <div className="flex h-[60px] w-[90px] items-center justify-center gap-2 rounded-lg bg-pitch-black/10">
//             <img
//               src={selectedOption.flag}
//               alt="country flag"
//               className="h-8 w-8"
//             />
//             <img
//               src="images/icon-chevron.svg"
//               alt="dropdown"
//               className={`h-4 w-4 transition-all duration-300 ${isOpen ? "-rotate-180" : "rotate-0"}`}
//             />
//           </div>
//           <div
//             className={`absolute z-10 mt-1 overflow-hidden overflow-y-auto rounded-md bg-white text-pitch-black shadow-md transition-all duration-300 scrollbar-hide ${isOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}
//           >
//             {options.map((option) => (
//               <div
//                 key={option.countryCode}
//                 className="flex w-48 cursor-pointer items-center gap-2 bg-white px-5 py-2 text-sm font-semibold hover:bg-pitch-black/10"
//                 onClick={() => selectOption(option)}
//               >
//                 <img src={option.flag} alt="" className="h-4 w-5" />
//                 <p>{option.countryName}</p>
//                 <span className="text-xs">{option.countryCode}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {variant === "text" && (
//         <div
//           className="relative w-full"
//           ref={dropdownref}
//           onClick={() => {
//             toggleIsOpen();
//           }}
//         >
//           <div className="flex h-[60px] items-center justify-between rounded-lg border border-dark-blue/20 bg-white px-4">
//             <p className="text-sm font-medium text-pitch-black">
//               {selectedOption?.value === "school"
//                 ? "School"
//                 : selectedOption?.label || text}
//             </p>
//             <img
//               src="images/icon-chevron.svg"
//               alt="chevron image"
//               className={`h-6 w-6 transition-all duration-300 ${isOpen ? "-rotate-180" : "rotate-0"}`}
//             />
//           </div>
//           <div
//             className={`absolute z-10 mt-1 flex w-full flex-col gap-2 overflow-hidden overflow-y-auto rounded-lg border border-dark-blue/20 bg-white p-4 text-sm font-semibold text-pitch-black transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0 border-0 py-0 opacity-0"}`}
//           >
//             {options.map((option) => (
//               <div
//                 className="cursor-pointer rounded-md p-2 hover:bg-blue-one/10"
//                 key={option.value}
//                 onClick={() => selectOption(option)}
//               >
//                 {option.label}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Select;
