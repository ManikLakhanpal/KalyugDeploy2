import React from "react";
import prize from "../assets/poster.jpeg";
import vector from "../assets/Vector.svg";
import star2 from "../assets/star2.svg";
import cbs from "../assets/sponser_1.png";
import gmc from "../assets/sponser_2.png";
import selle from "../assets/sponser_3.png";
import spn5 from "../assets/sponser_5.png";
import ccsc from "../assets/sponser_4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";

const Prizes = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);

  return (
    <>
      {/* Section 1: Prizes Section */}
      <section className="w-screen h-full bg-black" id="prizes">
        <div className="w-full h-full flex items-center justify-center py-2 lg:py-6 lg:p-2">
          <div className="w-full h-full flex items-start justify-center flex-row lg:py-4 lg:p-2">
            {/* Left Column */}
            <div className="w-full h-full flex items-start justify-start lg:w-[65%] flex-col p-6">
              {/* Title */}
              <div className="flex items-center justify-start">
                <h1 className="text-[2rem] xs:text-[2.7rem] s:text-6xl sm:text-[4rem] md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[154px] font-black sm:leading-tight text-[#ffffff]">
                  PRIZES <span className="text-[#F05941]">.</span>
                </h1>
              </div>
              {/* Description */}
              <div className="xs:flex items-center justify-center flex-row w-full md:w-[75%] lg:w-full my-6">
                <p className="font-normal text-xs text-white sm:text-sm lg:text-lg">
                  Prizes include: Best Name Registry Category Award • Best Girls Team Award • Goodies worth 50k • Each participant gets a chance to win premium goodies.
                  <br />
                  <br />
                  Venue - Alpha Zone <br />
                  Date - 6th December 2023
                </p>
              </div>
              {/* Prize Categories */}
              <div className="flex items-center justify-start w-full flex-col max-w-4xl lg:w-full">
                {/* Prize Category 1 */}
                <div className="flex items-center justify-between w-full flex-row border-t-2 border-white border-b-2 px-1 py-6">
                  <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    An Aptitude Base Coding round
                  </h1>
                </div>
                {/* Prize Category 2 */}
                <div className="flex items-center justify-between w-full flex-row border-white px-1 py-6">
                  <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    Balance Sheet match round
                  </h1>
                </div>
                {/* Prize Category 3 */}
                <div className="flex items-center justify-between w-full flex-row border-t-2 border-white border-b-2 px-1 py-6">
                  <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    Fun Activities
                  </h1>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="lg:flex hidden items-center justify-start w-[35%] flex-col p-4">
              <div className="flex items-center justify-center p-2 rounded-tl-[3.5rem]">
                <img src={prize} alt="prize" className="h-80 w-80 rounded-tl-[3.5rem]" />
              </div>
              <div className="flex items-center justify-center flex-row w-full sm:p-2 my-6">
                <p className="font-normal text-xs text-white sm:text-sm lg:text-lg">
                  Each team will be assigned a team name to participate in this mega event. A team consists of 5 members, with 2 members from Chitkara Business School and 3 members from the Department of CSE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Event Title */}
      <section className="w-screen md:h-screen bg-black">
        <div className="w-full h-full flex items-center justify-center p-4 lg:p-6">
          <div className="w-full h-full flex items-start justify-center flex-row s:p-4 md:p-6 lg:p-8 my-4">
            <div className="flex items-center justify-center bg-[#292929] p-4 md:p-6 sm:py-12 w-full h-full relative">
              <div className="flex items-center justify-center flex-row my-4 w-full s:max-w-7xl s:w-[85%] md:w-[90%]">
                <p className="items-center justify-center inline-block text-center gap-4 text-2xl xs:text-3xl sm:text-4xl p-1 sm:p-2 md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black w-full">
                  Kalyug <span className="text-[#d47916]">Chronicals</span> <span className="text-[#ffffff]">The Unsolved </span> <span className="text-[#d47916]">Crime</span>
                </p>
                <img src={vector} alt="vector" className="absolute top-0 left-0 w-8 h-8 sm:h-14 sm:w-14" />
                <img src={vector} alt="vector" className="absolute bottom-0 right-0 w-8 h-8 sm:h-14 sm:w-14" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Sponsors */}
      <section className="w-screen h-full md:overflow-hidden relative bg-black">
        <div className="md:h-screen h-full flex items-center justify-center w-full z-[10] p-2">
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            navigation={false}
            slidesPerView={5}
            spaceBetween={50}
            autoplay={{ delay: 4500 }}
            breakpoints={{
              300: { slidesPerView: 2, spaceBetween: 10 },
              520: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
            }}
          >
            <div className="items-center xl:hidden flex justify-center flex-row w-full h-full gap-12">
              {[ccsc, spn5, cbs, selle, gmc].map((sponsor, index) => (
                <SwiperSlide key={index} className="s:p-4 xs:p-7 p-4 items-center justify-center flex-row">
                  <div className="flex items-center justify-center bg-[#ffffff] rounded-md p-2 md:p-4">
                    <img src={sponsor} alt={`sponsor-${index}`} className="md:h-24 h-14 xs:h-16 s:h-20 w-auto" />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        {/* Rotating Text Marquees */}
        {[
          { rotation: "[45deg]", position: "top-0 bottom-0 left-0 right-0" },
          { rotation: "[-45deg]", position: "top-0 bottom-0 left-0 right-0" },
          { rotation: "[-135deg]", position: "top-0 bottom-0 left-0 right-0" },
          { rotation: "[135deg]", position: "top-0 bottom-0 left-0 right-0" },
        ].map((style, index) => (
          <div key={index} className={`h-screen hidden md:flex items-center justify-center absolute ${style.position} w-full`}>
            <div className="flex w-full h-full items-center justify-center py-0 sm:py-2 md:py-4 lg:py-6">
              <marquee className={`py-10 xs:py-12 rotate-${style.rotation} w-full h-full`}>
                <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#BE3144] font-black">
                  DESIGN YOUR IDEAS <img className="w-8 h-8" src={star2} alt="star2" /> BUILD YOUR STARTUP
                </h1>
              </marquee>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Prizes;
