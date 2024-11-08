// src/components/FormLayout.js
import React from "react";

function FormLayout({ heading, description, children }) {
  return (
    <main className="custom:flex-row custom:w-full custom:gap-0 mx-auto mb-[135.86px] mt-40 flex w-[480px] flex-col justify-between gap-[94px]">
      <section className="custom:w-[400px] flex w-[394px] flex-col gap-4">
        <h1 className="text-[40px] font-bold leading-[50.4px] text-dark-blue">
          {heading}
        </h1>
        <p className="text-base font-medium leading-5 text-pitch-black">
          {description}
        </p>
      </section>

      <div className="w-[480px]">{children}</div>
    </main>
  );
}

export default FormLayout;
