import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";

export function ProductFeaturesSection() {
  const featuresData = [
    {
      label: "Stay in the loop with ",
      id: "Realtime updates",
      highlightColor: "text-blue-one",
      info: "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan, tamus remdoloremque laudantium.",
      illustrationFlow: "row",
      accordionData: [
        {
          id: 0,
          head: "Realtime Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 1,
          head: "Realtime Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 2,
          head: "Realtime Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Schools.",
      highlightColor: "text-elegant-purple",
      info: "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan, tamus remdoloremque laudantium.",
      illustrationFlow: "row-reverse",
      accordionData: [
        {
          id: 0,
          head: "School Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 1,
          head: "School Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 2,
          head: "School Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Teachers.",
      highlightColor: "text-blue-one",
      info: "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan, tamus remdoloremque laudantium.",
      illustrationFlow: "row",
      accordionData: [
        {
          id: 0,
          head: "Teacher Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 1,
          head: "Teacher Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 2,
          head: "Teacher Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Parents.",
      highlightColor: "text-passion-red",
      info: "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan, tamus remdoloremque laudantium.",
      illustrationFlow: "row-reverse",
      accordionData: [
        {
          id: 0,
          head: "Parent Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 1,
          head: "Parent Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 2,
          head: "Parent Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Students.",
      highlightColor: "text-blue-one",
      info: "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan, tamus remdoloremque laudantium.",
      illustrationFlow: "row",
      accordionData: [
        {
          id: 0,
          head: "Student Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 1,
          head: "Student Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 2,
          head: "Student Feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
      ],
    },
  ];
  return (
    <section className="mx-auto mb-40 mt-[140px] flex w-full flex-col gap-[200px]">
      {featuresData.map((data) => (
        <ProductFeature featureData={data} key={data.id} />
      ))}
    </section>
  );
}

function ProductFeature({ featureData }) {
  // Changing text color implementation
  const [curIndex, setCurIndex] = useState(0);

  const colors = ["text-blue-one", "text-passion-red", "text-elegant-purple"];

  useEffect(() => {
    setInterval(() => {
      setCurIndex((index) => (index + 1 === colors.length ? 0 : index + 1));
    }, 1000);
  }, []);

  const changingColor = colors[curIndex];

  return (
    <div className="smMobile:px-8 mx-auto flex w-[87%] flex-col gap-[104px]">
      <div className="flex flex-col gap-[10px]">
        {/* {featureData.label && (
          <span className="w-fit rounded-xl bg-blue-one/20 p-2 text-base text-pitch-black/70">
            Feature for {featureData.id}
          </span>
        )} */}
        <section className="flex flex-col gap-4 text-pitch-black lg:flex-row">
          <h1 className="w-[253px] text-2xl font-bold leading-[30px] text-pitch-black sm:text-[32px] lg:text-[40px]">
            {featureData.label}
            <span
              // className={`transition-colors duration-1000 ${featureData.label ? featureData.highlightColor : changingColor}`}
              className={featureData.highlightColor}
            >
              {featureData.id}
            </span>
          </h1>
          <p className="w-full text-base leading-5 text-pitch-black lg:text-lg">
            Sed ut perspiciatis unde omnis iste nat error sit voluptatem
            accusan, tamus remdoloremque laudantium.
          </p>
        </section>
      </div>
      <div
        className={`flex flex-col gap-[83px] ${featureData.illustrationFlow === "row" ? "laptop:flex-row" : "laptop:flex-row-reverse"}`}
      >
        <div className="smMobile:w-[362px] flex h-[296px] items-center rounded-2xl bg-[#F4F4F4]">
          <div className="smMobile:w-[298px] mx-auto h-[232px] rounded-2xl bg-white"></div>
        </div>

        <Accordion inputs={featureData.accordionData} />
      </div>
    </div>
  );
}
