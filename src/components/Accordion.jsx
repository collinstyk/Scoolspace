import { useState } from "react";

function Accordion({ inputs }) {
  const [isCurOpen, setIsCurOpen] = useState(0);

  const toogleIsOpen = (id) => {
    setIsCurOpen(id);
  };

  return (
    <div className="h-fit w-full lg:w-[390px] xl:w-[470px]">
      {inputs.map((input) => (
        <div
          key={input.id}
          className="flex w-full flex-col gap-2 px-2 py-6 text-pitch-black"
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
            className={`overflow-hidden transition-all duration-300 ease-in ${isCurOpen === input.id ? "max-h-96" : "max-h-0"}`}
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
