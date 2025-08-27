import React from "react";
import capturaDeEcranDin20250807La1904381 from "./captura-de-ecran-din-2025-08-07-la-19-04-38-1.png";
export const WhyUs = () => {
  const contentData = {
    mainText:
      "We blend smart UI/UX design, powerful development, strategic SMM, and cutting-edge AI integration to deliver tailored digital solutions.",
    highlightText: "Clients choose us",
    continuationText:
      "for our clarity, speed, and results-driven mindset that transforms ideas into scalable, high-performing products across industries.",
  };
  return (
    <section
      className="inline-flex items-center justify-center gap-[30px] px-[30px] py-24 relative bg-white"
      role="main"
      aria-labelledby="why-us-heading"
    >
      {" "}
      <div className="justify-center px-4 py-[22px] bg-[#f1f7ff] rounded-[31px] inline-flex items-center relative flex-[0_0_auto]">
        {" "}
        <div className="h-[486px] gap-2.5 px-[180px] py-[216px] inline-flex items-center relative flex-[0_0_auto]">
          {" "}
          <p className="absolute w-[661px] h-[486px] -top-px left-0 [font-family:'Manrope-Medium',Helvetica] font-medium text-black text-[38px] tracking-[0] leading-[54px]">
            {" "}
            {contentData.mainText}{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {contentData.continuationText}{" "}
          </p>{" "}
          <h2
            id="why-us-heading"
            className="relative w-fit mt-[-1.00px] bg-[linear-gradient(270deg,rgba(54,145,255,1)_0%,rgba(3,30,229,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope-Medium',Helvetica] font-medium text-transparent text-[38px] tracking-[0] leading-[54px] whitespace-nowrap"
          >
            {" "}
            {contentData.highlightText}{" "}
          </h2>{" "}
        </div>{" "}
      </div>{" "}
      <img
        className="relative w-[640px] h-[638px] aspect-[1] object-cover"
        alt="Professional team members showcasing our collaborative approach and expertise"
        src={capturaDeEcranDin20250807La1904381}
        loading="lazy"
      />{" "}
    </section>
  );
};
