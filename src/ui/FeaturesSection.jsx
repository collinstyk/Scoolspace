import { useEffect, useState } from "react";
import Accordion from "../../Accordion";

export function FeaturesSection() {
  const featuresData = [
    {
      label: false,
      id: "Realtime updates",
      highlightColor: "",
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
      label: true,
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
      label: true,
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
      label: true,
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
      label: true,
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
    <section className="mx-auto mb-40 flex w-[960px] flex-col gap-[200px]">
      {featuresData.map((data) => (
        <Feature featureData={data} key={data.id} />
      ))}
    </section>
  );
}

function Feature({ featureData }) {
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
    <div className="flex w-full flex-col gap-[104px]">
      <div className="flex flex-col gap-[10px]">
        {featureData.label && (
          <span className="w-fit rounded-xl bg-blue-one/20 p-2 text-base text-pitch-black/70">
            Feature for {featureData.id}
          </span>
        )}
        <section className="flex items-center justify-between text-pitch-black">
          <h1 className="w-[400px] text-5xl font-bold leading-[60.72px]">
            {featureData.label ? "Scoolspace for " : "Stay in the loop with "}
            <span
              className={`transition-colors duration-1000 ${featureData.label ? featureData.highlightColor : changingColor}`}
            >
              {featureData.id}
            </span>
          </h1>
          <p className="w-[400px] text-[22px] leading-7">
            Sed ut perspiciatis unde omnis iste nat error sit voluptatem
            accusan, tamus remdoloremque laudantium.
          </p>
        </section>
      </div>
      <div
        className={`flex gap-[83px] ${featureData.illustrationFlow === "row" ? "flex-row" : "flex-row-reverse"}`}
      >
        <div className="flex h-[440px] w-[496px] items-center rounded-2xl bg-[#F4F4F4]">
          <div className="mx-auto h-[336px] w-[400px] rounded-2xl bg-white"></div>
        </div>

        <Accordion inputs={featureData.accordionData} />
      </div>
    </div>
  );
}
