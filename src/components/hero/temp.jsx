import React from "react";
import capturaDeEcranDin20250805La1954122 from "./captura-de-ecran-din-2025-08-05-la-19-54-12-2.png";
import capturaDeEcranDin20250805La1954332 from "./captura-de-ecran-din-2025-08-05-la-19-54-33-2.png";
import capturaDeEcranDin20250805La2000593 from "./captura-de-ecran-din-2025-08-05-la-20-00-59-3.png";
import capturaDeEcranDin20250806La1249231 from "./captura-de-ecran-din-2025-08-06-la-12-49-23-1.png";
const technologiesData = [
  {
    id: 1,
    title: "Blockchain",
    description:
      "Integrating blockchain into our digital services—design, development, SEO, SMM, AI—ensures secure, transparent operations, boosts efficiency, and drives smarter business decisions.",
    image: capturaDeEcranDin20250805La1954122,
    imageClasses: "absolute w-44 h-[195px] top-0 left-[238px] aspect-[0.99]",
  },
  {
    id: 2,
    title: "Cryptocurrencies",
    description:
      "We build and manage crypto platforms that support secure trading, wallet integration, and real-time data – empowering users in the decentralized finance space.",
    image: capturaDeEcranDin20250805La2000593,
    imageClasses:
      "w-[247px] h-[223px] left-[167px] aspect-[1.66] absolute top-0",
  },
  {
    id: 3,
    title: "AI",
    description:
      "Using advanced AI, we automate processes, personalize user experiences, and deliver intelligent insights that drive smarter decisions and greater efficiency.",
    image: capturaDeEcranDin20250805La1954332,
    imageClasses:
      "w-[299px] h-[267px] left-[115px] aspect-[1.3] absolute top-0",
  },
  {
    id: 4,
    title: "Apps",
    description:
      "Our mobile and web apps are user-friendly, scalable, and built to solve real-world problems with intuitive design and seamless performance across platforms.",
    image: capturaDeEcranDin20250806La1249231,
    imageClasses: "w-[414px] h-[458px] left-0 object-cover absolute top-0",
  },
];
export const OurTechnologis = () => {
  return (
    <section className="inline-flex flex-col items-start gap-[18px] px-[73px] py-24 relative bg-white">
      {" "}
      <div className="inline-flex items-start justify-center gap-4 relative flex-[0_0_auto]">
        {" "}
        <div className="inline-flex flex-col items-start gap-5 pt-0 pb-[26px] px-0 relative flex-[0_0_auto]">
          {" "}
          <div className="flex flex-col w-[434px] items-start gap-[17px] relative flex-[0_0_auto]">
            {" "}
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              {" "}
              <div className="relative w-1.5 h-1.5 bg-[#0050ff] rounded-[3px]" />{" "}
              <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#405370] text-sm tracking-[0] leading-[normal]">
                {" "}
                Our Technologies{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {technologiesData.slice(0, 2).map((tech) => (
          <article
            key={tech.id}
            className="inline-flex flex-col items-start gap-5 pt-[314px] pb-[26px] px-12 bg-[#eff1f4] rounded-[50px] overflow-hidden relative flex-[0_0_auto]"
          >
            {" "}
            <header className="inline-flex items-center justify-center relative flex-[0_0_auto]">
              {" "}
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#021940] text-[32.8px] tracking-[0] leading-[normal]">
                {" "}
                {tech.title}{" "}
              </h2>{" "}
            </header>{" "}
            <div className="flex items-center justify-center self-stretch w-full relative flex-[0_0_auto]">
              {" "}
              <p className="relative w-[318px] mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#405370] text-base tracking-[0] leading-[normal]">
                {" "}
                {tech.description}{" "}
              </p>{" "}
            </div>{" "}
            <img
              className={tech.imageClasses}
              alt={`${tech.title} technology illustration`}
              src={tech.image}
            />{" "}
          </article>
        ))}{" "}
      </div>{" "}
      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
        {" "}
        {technologiesData.slice(2, 4).map((tech) => (
          <article
            key={tech.id}
            className="inline-flex flex-col items-start gap-5 pt-[314px] pb-[26px] px-12 bg-[#eff1f4] rounded-[50px] overflow-hidden relative flex-[0_0_auto]"
          >
            {" "}
            <header className="inline-flex items-center justify-center relative flex-[0_0_auto]">
              {" "}
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#021940] text-[32.8px] tracking-[0] leading-[normal]">
                {" "}
                {tech.title}{" "}
              </h2>{" "}
            </header>{" "}
            <div className="flex items-center justify-center self-stretch w-full relative flex-[0_0_auto]">
              {" "}
              <p className="relative w-[318px] mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#405370] text-base tracking-[0] leading-[normal]">
                {" "}
                {tech.description}{" "}
              </p>{" "}
            </div>{" "}
            <img
              className={tech.imageClasses}
              alt={`${tech.title} technology illustration`}
              src={tech.image}
            />{" "}
          </article>
        ))}{" "}
        <div className="relative w-[434px] h-[493px] rounded-[50px] bg-[url(/frame-2147227324.png)] bg-cover bg-[50%_50%]" />{" "}
      </div>{" "}
    </section>
  );
};
