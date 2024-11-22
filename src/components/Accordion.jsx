import { useState } from "react";

function Accordion({ inputs }) {
  const [isCurOpen, setIsCurOpen] = useState(null);

  const toogleIsOpen = (id) => {
    setIsCurOpen(isCurOpen === id ? null : id);
  };

  return (
    <div className="h-fit w-full border-b-[1px] border-b-pitch-black/20 lg:w-[309px]">
      {inputs.map((input) => (
        <div
          key={input.id}
          className="flex w-full flex-col gap-2 border-t-[1px] border-t-pitch-black/20 px-2 py-[26px] text-pitch-black"
        >
          <div
            className="flex w-full cursor-pointer justify-between"
            onClick={() => toogleIsOpen(input.id)}
          >
            <h3 className="text-lg font-semibold">{input.head}</h3>
            <img
              src="images/icon-angle.svg"
              alt=""
              className={`transition-transform duration-300 ${isCurOpen === input.id ? "" : "rotate-180"}`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${isCurOpen === input.id ? "max-h-10" : "max-h-0"}`}
          >
            <p className="text-base font-medium leading-5 text-pitch-black/70">
              {input.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
