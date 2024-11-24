import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";

export function ProductFeaturesSection() {
  const featuresData = [
    {
      label: "Stay in the loop with ",
      id: "Realtime updates",
      highlightColor: "text-blue-one",
      info: "Sed ut perspiciatis unde accusan,laudantium.",
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
          head: "Efficient realtime grading",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 2,
          head: "Dark mode support",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Schools.",
      highlightColor: "text-elegant-purple",
      info: "Sed ut perspiciatis unde accusan, laudan perspiciatis unde omnis iste nat error sitatium voluptatem accusan.",
      illustrationFlow: "row-reverse",
      accordionData: [
        {
          id: 0,
          head: "Realtime feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 1,
          head: "Online school management system",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 2,
          head: "Organisational analytics",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Teachers.",
      highlightColor: "text-blue-one",
      info: "Sed ut perspiciatis unde accusan, laudan perspiciatis unde omnis iste nat error sitatium voluptatem accusan.",
      illustrationFlow: "row",
      accordionData: [
        {
          id: 0,
          head: "Realtime feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 1,
          head: "Easy fee management",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 2,
          head: "Communication channels",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Parents.",
      highlightColor: "text-passion-red",
      info: "Sed ut perspiciatis unde accusan, laudan perspiciatis unde omnis iste nat error sitatium voluptatem accusan.",
      illustrationFlow: "row-reverse",
      accordionData: [
        {
          id: 0,
          head: "Realtime feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 1,
          head: "Introducing: Lesson notes",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 2,
          head: "Class management",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 3,
          head: "Auto graded CAs and assignments",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Students.",
      highlightColor: "text-blue-one",
      info: "Sed ut perspiciatis unde accusan, laudan perspiciatis unde omnis iste nat error sitatium voluptatem accusan.",
      illustrationFlow: "row",
      accordionData: [
        {
          id: 0,
          head: "Realtime feature",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 1,
          head: "Introducing: Lesson notes",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 2,
          head: "AI recommendations",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
        {
          id: 3,
          head: "Calendars",
          content:
            "Sed ut perspiciatis unde omnis iste nat error sit voluptatem accusan.",
        },
      ],
    },
  ];
  return (
    <section className="mx-auto mb-40 mt-24 flex w-full flex-col gap-[200px] xl:mt-0">
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
    <div className="mx-auto flex w-[87%] flex-col gap-20 smMobile:px-8 md:w-[704px] lg:w-[960px] xl:w-[1120px]">
      <div className="flex flex-col gap-[10px]">
        {/* {featureData.label && (
          <span className="w-fit rounded-xl bg-blue-one/20 p-2 text-base text-pitch-black/70">
            Feature for {featureData.id}
          </span>
        )} */}
        <section
          className={`flex flex-col gap-4 text-pitch-black ${featureData.id === "Realtime updates" ? "sm:items-center sm:text-center" : "lg:flex-row lg:justify-between"}`}
        >
          <h1
            className={`w-[253px] text-2xl font-bold leading-[30px] text-pitch-black sm:text-[32px] sm:leading-10 lg:text-[40px] ${featureData.id === "Realtime updates" ? "sm:w-[313px] lg:w-[396px]" : "lg:w-[296px]"}`}
          >
            {featureData.label}
            <span
              // className={`transition-colors duration-1000 ${featureData.label ? featureData.highlightColor : changingColor}`}
              className={featureData.highlightColor}
            >
              {featureData.id}
            </span>
          </h1>
          <p className="w-full text-base leading-5 text-pitch-black/60 sm:w-[400px] lg:text-lg">
            {featureData.info}
          </p>
        </section>
      </div>
      <div
        className={`flex flex-col gap-[83px] lg:items-start lg:justify-between ${featureData.illustrationFlow === "row" ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      >
        <div className="flex h-[296px] items-center rounded-2xl bg-[#F4F4F4] smMobile:w-[362px] sm:mx-auto sm:h-[480px] sm:w-[520px] lg:mx-0 lg:h-[520px]">
          <div className="mx-auto h-[232px] rounded-2xl bg-white smMobile:w-[298px] sm:h-[336px] sm:w-[400px]"></div>
        </div>

        <Accordion inputs={featureData.accordionData} />
      </div>
    </div>
  );
}
