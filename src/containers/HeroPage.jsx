import React, { useState } from "react";
import Header from "../components/Header";
import play from "../assets/play.svg";
import star from "../assets/star.svg";
import circle from "../assets/circle.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import line from "../assets/Line.svg";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import video from "../assets/render.mp4";
import pdf from "../assets/rulebook.pdf";
import { Link } from "react-router-dom";

const HeroPage = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <section
      className="w-screen relative h-full bg-[#22092C] flex items-center justify-center flex-col"
      id="home"
    >
      <Header />
      <div className="flex items-center justify-center py-8 md:px-2 lg:px-4 sm:px-4 w-full h-full ">
        <div className="flex items-center justify-center px-2 sm:px-4 md:px-2 lg:px-4 flex-col max-w-[95%] h-full py-4">
          <div className="flex items-center justify-start flex-col sm:flex-row w-full gap-12 my-2 h-full sm:p-0 s:p-1 md:p-1">
            {/* gif */}
            <div className="flex items-center justify-start w-full md:w-[50%]">
              <h1 className="text-[2.1rem]  lg:p-2 xs:text-[2.8rem] s:text-5xl sm:text-[4rem] md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[154px] font-black sm:leading-tight text-[#F05941]">
                KALYUG CHRONICALS
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-start flex-col w-full h-full sm:p-0 s:p-1 md:p-1 gap-2">
            <div className="flex items-center justify-start w-full h-full">
              <h1 className="text-2xl lg:p-2 xs:text-[2rem]  s:text-4xl sm:text-5xl md:text-6xl lg:text-7xl  whitespace-nowrap font-black sm:leading-tight text-[#BE3144]">
                The Unsolved Crime 
              </h1>
            </div>
          </div>
          {/* STAR */}
          <div className="flex items-start justify-end w-full h-full">
              <img
                src={star}
                loading="lazy"
                alt="star"
                className="w-auto h-6 sm:h-8 md:mr-6"
              />
            </div>
          <div className="w-full h-full flex items-center justify-end sm:p-0 s:p-1 md:p-1">
            <div className="flex items-center justify-center flex-col md:flex-row w-full p-1  gap-6 sm:p-2 my-6">
              <p className="font-normal text-[0.7rem] xs:text-xs sm:text-sm lg:text-lg text-[#d6d5d5] md:w-[50%]">
              

Kalyug Chronicles: The Unsolved Crime

The Coding Ninjas CUIET's flagship event with the biggest opportunity for the students to collaborate and participate at the interdepartmental level.

There are 30 shortlisted teams who will participate in the Kalyug Chronicles.

There are 150 students in the event's participation pool. The focus of the event is on solving mysteries with critical analysis, resource management, intel on codes. Students compete. Students in teams, over a duration of 7 hours.

The event is jam-packed with entertaining activities, engaging sessions, and engaging games.


              </p>
              <div class="flex items-center justify-center flex-col flex-1 gap-2 w-full h-full xs:p-2 xl:p-0">
                <div class=" rounded-full p-4 h-12 xs:h-14 s:h-16 md:h-20 lg:h-24 flex items-center justify-start bg-video bg-cover bg-center bg-no-repeat w-full">
                  <img
                    src={play}
                    loading="lazy"
                    alt="play"
                    onClick={openModal}
                    className="w-auto h-8 xs:h-10  sm:h-12 md:h-14 lg:h-16"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-row gap-4 w-full py-2 s:p-4 my-2 md:my-6">
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSezH9p9sd8QHaBhQO1v7bjHWj8VfEseCkYYyG4uiy3nPL-8nA/viewform?usp=sf_link"
              className="flex items-center justify-center bg-white group hover:bg-transparent transition duration-200 ease-in-out hover:border hover:border-black rounded-full md:max-w-[20%] lg::max-w-[15%] p-2 flex-1"
            >
              <button
                type="submit"
                className=" text-[#000000] group-hover:text-white rounded-full text-xs font-black "
              >
                Register Now
              </button>
            </Link>
            <a
              href={pdf}
              download="rulebook"
              className="focus:none outline:none flex items-center justify-center bg-transparent rounded-full transition duration-200 ease-in-out flex-1 md:max-w-[20%] lg:max-w-[15%] p-2 border border-white"
            >
              <button
                type="submit"
                className=" text-white  rounded-full text-xs font-black "
              >
                Rule Book
              </button>
            </a>
            <div className="sm:flex hidden items-center justify-center flex-1 w-full h-0 border border-white"></div>
            <div className="hidden items-center justify-center sm:flex">
              <img src={circle} alt="circle" className="w-10 h-10" />
            </div>
          </div>
          <div className="hidden sm:flex sm:absolute items-center justify-end bottom-0 right-2 xl:right-4 sm:w-auto sm:h-auto w-full h-full">
            <div className="flex   gap-2 item-center justify-center flex-col">
              <div className="flex items-center justify-center rotate-[-90]">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
              <div className="flex items-center justify-center rotate-[-90]">
                <img
                  src={instagram}
                  alt="instagram"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
              <div className="flex items-center justify-center rotate-[-90]">
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
              <div className="flex items-center justify-center rotate-[-90]">
                <img src={line} alt="line" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal ? (
        <section className="modal__bg">
          <div className="modal__align">
            <div className="modal__content">
              <IoCloseOutline
                className="modal__close"
                arial-label="Close modal"
                onClick={() => {
                  setModal();
                }}
              />
              <div className="modal__video-align">
                {videoLoading ? (
                  <div className="modal__spinner ">
                    <BiLoaderAlt
                      className="modal__spinner-style animate-spin"
                      fadein="none"
                    />
                  </div>
                ) : null}
                <video
                  className="modal__video-style"
                  onLoad={spinner}
                  loading="lazy"
                  src={video}
                  autoPlay
                  loop
                ></video>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </section>
  );
};

export default HeroPage;
