import React from "react";
import capturaDeEcranDin20250721La1419002 from "./captura-de-ecran-din-2025-07-21-la-14-19-00-2.png";
import capturaDeEcranDin20250807La1822021 from "./captura-de-ecran-din-2025-08-07-la-18-22-02-1.png";
import image from "./image.svg";
import wrap from "./wrap.svg";

export const Frame = () => {
  const portfolioItems = [
    {
      id: 1,
      image: {
        type: "background",
        src: "/captura-de-ecran-din-2025-07-21-la-14-19-29-1.png",
      },
      category: "Zippy AI",
      title: "Zippy AI website",
    },
    {
      id: 2,
      image: { type: "img", src: wrap, alt: "Wrap" },
      category: "CRM Logo Concept",
      title: "Perioly CRM",
    },
    {
      id: 3,
      image: { type: "img", src: image, alt: "Wrap" },
      category: "Vexperio tourist",
      title: "Vexperio",
    },
    {
      id: 4,
      image: {
        type: "img",
        src: capturaDeEcranDin20250721La1419002,
        alt: "Captura de ecran din",
        containerClass: "rounded-3xl overflow-hidden",
      },
      category: "Web3 Dash",
      title: "Web3 dashboard",
    },
    {
      id: 5,
      image: {
        type: "background",
        src: "/more-fun-philippines-3.png",
        bgSize: "100% 100%",
      },
      category: "Philippines web",
      title: "Philippines Website",
    },
    {
      id: 6,
      image: {
        type: "background",
        src: "/captura-de-ecran-din-2025-07-21-la-14-30-49-1.png",
      },
      category: "Analytics website",
      title: "Site analytics",
    },
    {
      id: 7,
      image: {
        type: "img",
        src: capturaDeEcranDin20250807La1822021,
        alt: "Captura de ecran din",
        containerClass: "rounded-3xl overflow-hidden",
      },
      category: "Berlin web",
      title: "Berlin Turist Website",
    },
    {
      id: 8,
      image: {
        type: "background",
        src: "/captura-de-ecran-din-2025-07-31-la-12-09-16-2.png",
      },
      category: "VPN Landing",
      title: "Eclipse VPN Landing",
    },
  ];
  const renderImage = (imageConfig) => {
    if (imageConfig.type === "background") {
      const bgSizeClass =
        imageConfig.bgSize === "100% 100%"
          ? "bg-[100%_100%]"
          : "bg-cover bg-[50%_50%]";
      return (
        <div
          className={`h-[509.22px] rounded-3xl ${bgSizeClass} bg-[url(${imageConfig.src})] relative w-[620px]`}
        />
      );
    } else if (imageConfig.type === "img" && imageConfig.containerClass) {
      return (
        <div
          className={`relative w-[620px] h-[509.22px] ${imageConfig.containerClass}`}
        >
          {" "}
          <img
            className="absolute w-[620px] h-[508px] top-0 left-0 object-cover"
            alt={imageConfig.alt}
            src={imageConfig.src}
          />{" "}
        </div>
      );
    } else {
      return (
        <img
          className="h-[509.22px] relative w-[620px]"
          alt={imageConfig.alt}
          src={imageConfig.src}
        />
      );
    }
  };
  return (
    <main className="flex flex-wrap w-[1280px] items-start gap-[40px_40px] relative">
      {" "}
      {portfolioItems.map((item) => (
        <article
          key={item.id}
          className="flex flex-col w-[620px] items-start gap-[23px] relative"
        >
          {" "}
          <div className="relative w-[620px] h-[509.22px]">
            {" "}
            {item.id === 1 ? (
              <div className="rounded-3xl overflow-hidden h-[509px]">
                {" "}
                <div className="flex w-[620px] flex-col items-start relative">
                  {" "}
                  <div className="relative self-stretch w-full h-[509.0px] bg-[url(/captura-de-ecran-din-2025-07-21-la-14-19-29-1.png)] bg-cover bg-[50%_50%]" />{" "}
                </div>{" "}
              </div>
            ) : item.id === 6 ? (
              <div className="h-[509.0px] rounded-3xl bg-[url(/captura-de-ecran-din-2025-07-21-la-14-30-49-1.png)] bg-cover bg-[50%_50%] relative w-[620px]" />
            ) : item.id === 8 ? (
              <div className="h-[508.92px] rounded-3xl bg-[url(/captura-de-ecran-din-2025-07-31-la-12-09-16-2.png)] bg-cover bg-[50%_50%] relative w-[620px]" />
            ) : item.id === 7 ? (
              <div className="h-[509.22px] rounded-3xl overflow-hidden relative w-[620px]">
                {" "}
                <img
                  className="absolute w-[619px] h-[507px] top-0 left-0 object-cover"
                  alt="Captura de ecran din"
                  src={capturaDeEcranDin20250807La1822021}
                />{" "}
              </div>
            ) : (
              renderImage(item.image)
            )}{" "}
          </div>{" "}
          <header className="inline-flex flex-col min-w-[620px] items-start justify-center gap-2 relative flex-[0_0_auto]">
            {" "}
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              {" "}
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                {" "}
                <p className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#666666] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
                  {" "}
                  {item.category}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              {" "}
              <div className="inline-flex flex-[0_0_auto] flex-col items-start relative">
                {" "}
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  {" "}
                  <h2 className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
                    {" "}
                    {item.title}{" "}
                  </h2>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </header>{" "}
        </article>
      ))}{" "}
    </main>
  );
};
