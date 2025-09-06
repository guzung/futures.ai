<footer class="inline-flex flex-col items-center px-[22px] py-24 relative bg-[#0f0f0f]">
  <div class="flex-col items-start justify-center inline-flex relative flex-[0_0_auto]">
    <div class="flex flex-col max-w-[346px] w-[346px] items-start justify-center gap-[40.26px] relative flex-[0_0_auto]">
      <div class="gap-[14.41px] inline-flex flex-col items-start relative flex-[0_0_auto]">
        <div class="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div class="mt-[-0.63px] text-[13.8px] leading-[14.1px] relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-white tracking-[0] whitespace-nowrap">
            Contact
          </div>
        </div>
        <div class="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div class="flex flex-col w-[346px] items-start pt-0 pb-[0.43px] px-0 relative flex-[0_0_auto]">
            <h1 class="relative self-stretch mt-[-0.63px] [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[40.3px] tracking-[0] leading-[48.3px]">
              Let's start <br /> creating together
            </h1>
          </div>
        </div>
      </div>
      <button class="inline-flex items-center justify-center gap-[5.03px] px-[20.13px] py-[6.29px] relative flex-[0_0_auto] rounded-[8.81px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(238,238,238,1)_100%)] hover:opacity-90 transition-opacity">
        <div class="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div class="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <span class="relative w-fit mt-[-0.63px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#0f0f0f] text-[11.3px] tracking-[0] leading-[15.9px] whitespace-nowrap">
              Let's talk
            </span>
          </div>
        </div>
        <img
          class="relative w-[10.07px] h-[10.07px]"
          alt="Arrow icon"
          src={container}
        />
      </button>
    </div>
    <div class="flex flex-col items-start gap-[110px] px-0 py-[19.52px] relative self-stretch w-full flex-[0_0_auto]">
      <nav class="flex flex-col w-[204px] items-start gap-[22.36px] relative flex-[0_0_auto] overflow-hidden">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            class={
              item.hasOverflow
                ? "inline-flex flex-col h-[30.74px] items-center justify-center relative"
                : "relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[25.2px] tracking-[0] leading-[35.2px] whitespace-nowrap"
            }
          >
            {item.hasOverflow ? (
              <div class="relative w-fit h-[30.74px] overflow-hidden">
                <div class="inline-flex flex-col items-start absolute -top-px left-0">
                  <div class="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <a
                      href="#"
                      class="relative w-fit mt-[-1.40px] [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[25.2px] tracking-[0] leading-[35.2px] whitespace-nowrap hover:opacity-80 transition-opacity"
                    >
                      {item.label}
                    </a>
                  </div>
                </div>
                <div class="inline-flex flex-col items-start absolute top-[35px] left-0 opacity-60">
                  <div class="relative self-stretch w-full h-[35.18px]" />
                </div>
              </div>
            ) : (
              <a href="#" class="hover:opacity-80 transition-opacity">
                {item.label}
              </a>
            )}
          </div>
        ))}
      </nav>
      <div class="flex-col items-start gap-[22.28px] inline-flex relative flex-[0_0_auto]">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            class="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
          >
            <a
              href="#"
              class="inline-flex items-center justify-center gap-[12.73px] relative flex-[0_0_auto] hover:opacity-80 transition-opacity"
            >
              <div class="min-w-[292.79px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div class="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <span class="relative w-fit mt-[-1.59px] [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[28.6px] tracking-[0] leading-[40.1px] whitespace-nowrap">
                    {method.label}
                  </span>
                </div>
              </div>
              <img
                class="relative w-[25.46px] h-[25.46px]"
                alt={`${method.label} icon`}
                src={method.icon}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div class="items-center gap-[42px] inline-flex relative flex-[0_0_auto]">
    <img
      class="relative w-[66.78px] h-[66.78px] mt-[-1.05px] mb-[-1.05px] ml-[-1.05px]"
      alt="Company logo"
      src={vector}
    />
    <div class="relative w-[241px] h-[63px] mr-[-2.00px]">
      <div class="absolute top-0 left-0 [font-family:'Aeonik-Bold',Helvetica] font-bold text-[#3e3e3e] text-[52.2px] tracking-[0] leading-[normal]">
        Futures.ai
      </div>
    </div>
    <img
      class="absolute w-3 h-2.5 top-7 left-[17px]"
      alt="Decorative element"
      src={vector2}
    />
    <img
      class="absolute w-3 h-2.5 top-4 left-[33px]"
      alt="Decorative element"
      src={vector3}
    />
    <img
      class="absolute w-3 h-2.5 top-10 left-3.5"
      alt="Decorative element"
      src={vector4}
    />
    <img
      class="absolute w-3 h-2.5 top-7 left-[30px]"
      alt="Decorative element"
      src={vector5}
    />
    <img
      class="absolute w-3 h-2.5 top-4 left-12"
      alt="Decorative element"
      src={vector6}
    />
    <img
      class="absolute w-3 h-2.5 top-4 left-5"
      alt="Decorative element"
      src={vector7}
    />
  </div>
</footer>;
