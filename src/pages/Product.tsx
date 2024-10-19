import { useEffect, useState } from "react";
import Accordion, { Inputs } from "../components/Accordion";
import Button from "../components/Button";
import Navbar from "../ui/Navbar";

function Product() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}

function HeroSection() {
  const navItems = ["Product", "Resources", "About us"];
  return (
    <section className="bg-light-linear-blue h-full min-h-dvh min-w-[1280px] pb-32">
      <div className="bg-grid pb-[69px] pt-16">
        <Navbar navItems={navItems} type="light" />
        <div className="mx-auto mt-[168px] flex w-[960px] justify-between">
          <div className="flex w-[412px] flex-col gap-6">
            <div className="flex flex-col gap-2 text-base">
              <p className="bg-blue-one/20 text-pitch-black/70 w-fit rounded-xl p-2 font-normal">
                The product
              </p>
              <h1 className="text-pitch-black text-[64px] font-bold leading-tight">
                Welcome to the future of education
              </h1>
              <p className="font-medium">
                Sed ut perspiciatis unde omnis iste natus error sit rem
                voluptatem accusantius doloremque laudantium, totam.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" to="">
                Join our waitlist
              </Button>
              <Button variant="outlined-dark" to="">
                Contact us
              </Button>
            </div>
          </div>
          <div className="flex h-full w-[412px] flex-col gap-[69px]">
            {/*PLACEHOLDERS */}
            <div className="mr-auto h-[204px] w-[341px] rounded-xl bg-[#D9D9D9]"></div>
            <div className="ml-auto h-[136px] w-[341px] rounded-xl bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
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
    <section className="mx-auto flex w-[960px] flex-col gap-[200px]">
      {featuresData.map((data) => (
        <Feature featureData={data} key={data.id} />
      ))}
    </section>
  );
}

interface FeatureProp {
  featureData: {
    label: boolean;
    id: string;
    highlightColor: string;
    info: string;
    illustrationFlow: string;
    accordionData: Inputs[];
  };
}

function Feature({ featureData }: FeatureProp) {
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
          <span className="bg-blue-one/20 text-pitch-black/70 w-fit rounded-xl p-2 text-base">
            Feature for {featureData.id}
          </span>
        )}
        <section className="text-pitch-black flex items-center justify-between">
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

export default Product;
