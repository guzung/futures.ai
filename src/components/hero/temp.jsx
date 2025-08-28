import React from "react";
import { Grid03 } from "./Grid03";
import IMAGE202508081052222 from "./IMAGE-2025-08-08-10-52-22-2.png";
import IMAGE202508081052223 from "./IMAGE-2025-08-08-10-52-22-3.png";
import IMAGE202508081052224 from "./IMAGE-2025-08-08-10-52-22-4.png";
import IMAGE20250808105222 from "./IMAGE-2025-08-08-10-52-22.png";
import { LayoutAlt01 } from "./LayoutAlt01";
import { LineChartUp02 } from "./LineChartUp02";
import image from "./image.svg";
import vector from "./vector.svg";
export const MaxWidthStack = () => {
  const workflowSteps = [
    {
      id: 1,
      icon: <Grid03 className="!relative !w-[18px] !h-[18px] !aspect-[1]" />,
      title: "Discovery",
      description:
        "We start by understanding your vision, goals, and users. Every great product begins with a clear purpose.",
    },
    {
      id: 2,
      icon: (
        <div className="flex flex-col w-[18px] items-start relative">
          {" "}
          <div className="relative w-[18.29px] h-[18.29px] mr-[-0.29px]">
            {" "}
            <div className="w-[18px] h-[18px]">
              {" "}
              <div className="relative w-3 h-[15px] top-0.5 left-[3px]">
                {" "}
                <img
                  className="absolute w-[11px] h-3 top-[3px] left-px"
                  alt="Vector"
                  src={vector}
                />{" "}
                <img
                  className="absolute w-[11px] h-[7px] top-0 left-0"
                  alt="Vector"
                  src={image}
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      ),
      title: "Strategy & Design",
      description:
        "We craft smart, intuitive interfaces with scalable architecture, built to convert and engage.",
    },
    {
      id: 3,
      icon: (
        <LayoutAlt01 className="!relative !w-[25px] !h-[25px] !aspect-[1]" />
      ),
      title: "Build & Integrate",
      description:
        "Using cutting-edge technologies from Al to blockchain-we develop fast, secure, and flexible digital products.",
    },
    {
      id: 4,
      icon: (
        <LineChartUp02 className="!relative !w-[26px] !h-[26px] !aspect-[1]" />
      ),
      title: "Launch & Scale",
      description:
        "We don't stop at launch. We monitor, refine, and grow your product to match evolving user needs and business goals.",
    },
  ];
  return (
    <section className="inline-flex flex-col items-center justify-center gap-[72px] px-[246px] py-12 relative rounded-2xl overflow-hidden [background:radial-gradient(50%_50%_at_51%_100%,rgba(39,39,42,1)_0%,rgba(0,0,0,1)_100%)]">
      {" "}
      <div className="absolute w-[1440px] h-[351px] top-0 left-0 mix-blend-lighten opacity-[0.04] bg-[url(/image.png)] bg-[100%_100%]" />{" "}
      <header className="inline-flex flex-col items-start justify-center gap-3 pl-0 pr-[368.58px] py-0 relative flex-[0_0_auto]">
        {" "}
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          {" "}
          <div className="items-center flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            {" "}
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-zinc-300 text-sm text-center tracking-[0] leading-[18px] whitespace-nowrap">
              {" "}
              How We Work{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          {" "}
          <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            {" "}
            <h1 className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[28px] tracking-[-0.56px] leading-9 whitespace-nowrap">
              {" "}
              Let's explain step-by-step{" "}
            </h1>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      <div className="inline-flex items-start justify-center gap-8 relative flex-[0_0_auto]">
        {" "}
        {workflowSteps.map((step, index) => (
          <article
            key={step.id}
            className={`relative ${
              index === 0
                ? "self-stretch w-[213px]"
                : index === 2
                ? "w-[213px] h-[117px]"
                : index === 3
                ? "w-[213px] h-[117px]"
                : "w-[213px] h-[117px]"
            } overflow-hidden`}
          >
            {" "}
            <div
              className={`${
                index === 3 ? "w-[216px]" : "w-[213px]"
              } flex flex-col items-start relative top-1.5`}
            >
              {" "}
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                {" "}
                {index === 2 ? (
                  <>
                    {" "}
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      {" "}
                      <div className="items-start pt-0 pb-[0.59px] px-0 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                        {" "}
                        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-base tracking-[-0.32px] leading-[25.6px] whitespace-nowrap">
                          {" "}
                          {step.title}{" "}
                        </h2>{" "}
                      </div>{" "}
                    </div>{" "}
                    {step.icon}{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    {step.icon}{" "}
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      {" "}
                      <div className="items-start pt-0 pb-[0.59px] px-0 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                        {" "}
                        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-base tracking-[-0.32px] leading-[25.6px] whitespace-nowrap">
                          {" "}
                          {step.title}{" "}
                        </h2>{" "}
                      </div>{" "}
                    </div>{" "}
                  </>
                )}{" "}
              </div>{" "}
              <div
                className={`${
                  index === 0
                    ? "flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
                    : index === 3
                    ? "h-[67px] flex flex-col items-start relative self-stretch w-full"
                    : "flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full"
                }`}
              >
                {" "}
                <div
                  className={`${
                    index === 3
                      ? "mb-[-5.00px] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
                      : "flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
                  }`}
                >
                  {" "}
                  <p
                    className={`relative ${
                      index === 0 ? "self-stretch h-[70px]" : "self-stretch"
                    } mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-zinc-400 text-sm tracking-[-0.32px] leading-[18px]`}
                  >
                    {" "}
                    {step.description}{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </article>
        ))}{" "}
      </div>{" "}
      <img
        className="absolute w-[589px] h-[351px] top-0 left-[851px] aspect-[1.23] object-cover"
        alt="Background decoration"
        src={IMAGE20250808105222}
      />{" "}
      <img
        className="w-[373px] left-0 absolute h-[351px] top-0 aspect-[1.23] object-cover"
        alt="Background decoration"
        src={IMAGE202508081052222}
      />{" "}
      <img
        className="w-[424px] left-[1016px] absolute h-[351px] top-0 aspect-[1.23] object-cover"
        alt="Background decoration"
        src={IMAGE202508081052223}
      />{" "}
      <img
        className="w-[570px] left-0 absolute h-[351px] top-0 aspect-[1.23] object-cover"
        alt="Background decoration"
        src={IMAGE202508081052224}
      />{" "}
    </section>
  );
};
