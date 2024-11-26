import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";

export function ProductFeaturesSection() {
  const featuresData = [
    {
      label: "Stay in the loop with ",
      id: "Real-Time updates",
      highlightColor: "text-blue-one",
      info: "Scoolspace keeps everyone connected and informed. Our platform delivers instant updates to make education easier and more accessible for all stakeholders.",
      illustrationFlow: "row-reverse",
      accordionData: [
        {
          id: 0,
          head: " Real-Time Feature",
          content:
            "Get instant updates on academic progress, announcements, and activities across the platform. Never miss an important moment again.",
        },
        {
          id: 1,
          head: "Efficient realtime grading",
          content:
            "Teachers can grade assignments and tests instantly, saving hours of work while providing students and parents with immediate feedback.",
        },
        {
          id: 2,
          head: "Dark mode support",
          content:
            "Enjoy a seamless, comfortable experience on any device, day or night, with dark mode functionality.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Schools.",
      highlightColor: "text-elegant-purple",
      info: "Empowering administrators to manage smarter, not harder.\n\n Scoolspace simplifies school operations, making it easy to oversee performance, manage data, and improve outcomes.",
      illustrationFlow: "row-reverse",
      accordionData: [
        {
          id: 0,
          head: "Real-Time Feature",
          content:
            "Administrators can monitor classroom activity, teacher performance, and student progress with up-to-the-minute updates.",
        },
        {
          id: 1,
          head: " Online School Management System",
          content:
            "A single platform to handle school finances, inventory, and fee collection, ensuring everything runs smoothly",
        },
        {
          id: 2,
          head: "Organisational analytics",
          content:
            "A single platform to handle school finances, inventory, and fee collection, ensuring everything runs smoothly.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Parents.",
      highlightColor: "text-passion-red",
      info: "Stay connected, save time, and support your child like never before.\n\nWith Scoolspace, parents have the tools they need to stay involved in their children’s education without disrupting their busy schedules.",
      illustrationFlow: "row",
      accordionData: [
        {
          id: 0,
          head: " Real-Time Feature",
          content:
            "Get immediate updates on your child’s progress, grades, and school announcements—all in one place.",
        },
        {
          id: 1,
          head: "Easy Fee Management",
          content:
            "Pay school fees online with just a few clicks. No more bank runs or paperwork.",
        },
        {
          id: 2,
          head: " Communication Channels",
          content:
            "Connect directly with teachers and school staff for updates, emergencies, or to discuss your child’s progress.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Teachers.",
      highlightColor: "text-blue-one",
      info: "Simplify your workload and focus on what matters most: teaching. Scoolspace provides innovative tools to help teachers save time, reduce stress, and engage students in more meaningful ways.",
      illustrationFlow: "row-reverse",
      accordionData: [
        {
          id: 0,
          head: "Real-Time Feature",
          content:
            "Keep track of student performance, attendance, and assignments in real-time, all from one dashboard.",
        },
        {
          id: 1,
          head: " Introducing: Lesson Notes",
          content:
            "Prepare, share, and update lesson notes effortlessly, ensuring all students have access to class materials.",
        },
        {
          id: 2,
          head: "Class Management",
          content:
            "Organize classroom activities and student records seamlessly to improve productivity and focus on teaching.",
        },
        {
          id: 3,
          head: "Auto-Graded CAs and Assignments",
          content:
            "Say goodbye to hours of grading. Scoolspace automates it, so you can spend more time inspiring your students.",
        },
      ],
    },
    {
      label: "Scoolspace for ",
      id: "Students.",
      highlightColor: "text-blue-one",
      info: "Learning has never been this engaging, accessible, and fun. Scoolspace empowers students with tools to stay organized, engaged, and on track with their academic goals.",
      illustrationFlow: "row-reverse",
      accordionData: [
        {
          id: 0,
          head: "Real-Time Feature",
          content:
            "Access assignments, test results, and class updates in real-time, ensuring you never miss an important task.",
        },
        {
          id: 1,
          head: "Introducing: Lesson notes",
          content:
            "View, download, and study class notes at your convenience—no more rushing to copy down every word.",
        },
        {
          id: 2,
          head: "AI Recommendations",
          content:
            "Receive personalized recommendations for studying, improving performance, and mastering key concepts.",
        },
        {
          id: 3,
          head: "Calendars",
          content:
            "Keep track of assignments, tests, and school events with an intuitive calendar feature that helps students stay organized",
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
          <p className="w-full text-base font-medium leading-5 text-pitch-black/60 sm:w-[400px] lg:text-lg">
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
