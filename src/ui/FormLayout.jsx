// src/components/FormLayout.js
import React from "react";

function FormLayout({ heading, description, children }) {
  return (
    <main className="mx-auto mb-[135.86px] mt-20 flex w-full flex-col justify-between gap-[94px] tablet:mt-40 tablet:w-[480px] custom:w-full custom:flex-row custom:gap-0">
      <section className="mx-auto flex w-[91%] flex-col gap-4 tablet:w-[394px] custom:w-[400px]">
        <h1 className="text-[40px] font-bold leading-[50.4px] text-dark-blue">
          {heading}
        </h1>
        <p className="text-base font-medium leading-5 text-pitch-black">
          {description}
        </p>
      </section>

      <div className="mx-auto w-[91%] tablet:w-[480px]">{children}</div>
    </main>
  );
}

export default FormLayout;
