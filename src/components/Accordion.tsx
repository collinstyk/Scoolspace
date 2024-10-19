import { useState } from "react";

export interface Inputs {
  id: number;
  head: string;
  content: string;
}

interface AccordionProps {
  inputs: Inputs[];
}

function Accordion({ inputs }: AccordionProps) {
  const [isCurOpen, setIsCurOpen] = useState<number | null>(null);

  const toogleIsOpen = (id: number) => {
    setIsCurOpen(isCurOpen === id ? null : id);
  };

  return (
    <div className="border-b-pitch-black/20 h-fit w-[381px] border-b-[1px]">
      {inputs.map((input) => (
        <div
          key={input.id}
          className="text-pitch-black border-t-pitch-black/20 flex w-full flex-col gap-2 border-t-[1px] px-2 py-[26px]"
        >
          <div
            className="flex w-full cursor-pointer justify-between"
            onClick={() => toogleIsOpen(input.id)}
          >
            <h3 className="text-[22px] font-medium">{input.head}</h3>
            <img
              src="src/assets/images/icon-angle.svg"
              alt=""
              className={`transition-transform duration-300 ${isCurOpen === input.id ? "" : "rotate-180"}`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${isCurOpen === input.id ? "max-h-10" : "max-h-0"}`}
          >
            <p className="text-base font-normal leading-5">{input.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
