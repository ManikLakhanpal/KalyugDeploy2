import React from "react";
import logo from "../assets/favicon.png";
import line from "../assets/line2.svg";
import pdf from '../assets/rulebook.pdf'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <section className="w-screen h-full bg-[#f0f0f0] py-20">
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-full mb-6">
            <img src={line} alt="line" className="w-full h-6" />
          </div>
          <h1 className="text-3xl font-black text-center text-[#333] mb-4">
          Are you willing to take on the challenge?
          </h1>
          <div className="flex items-center justify-center flex-row gap-4 mb-12">
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSezH9p9sd8QHaBhQO1v7bjHWj8VfEseCkYYyG4uiy3nPL-8nA/viewform?usp=sf_link" className="bg-[#fff] hover:bg-[#f7f7f7] transition duration-200 ease-in-out hover:border hover:border-[#333] rounded-full p-2 flex-1">
              <button type="submit" className="text-[#333] group-hover:text-[#fff] rounded-full text-xs font-black text-center px-20">Register Now</button>
            </Link>
            <a href={pdf} download="rulebook" className="bg-[#fff] border border-[#333] transition duration-200 ease-in-out rounded-full p-2 flex-1">
              <button type="submit" className="text-[#333] rounded-full text-xs font-black text-center px-20">Rule Book</button>
            </a>
          </div>
          <div className="flex items-center justify-center w-full mb-6">
            <img src={logo} alt="codechef" className="w-auto h-12" />
          </div>
          <div className="flex items-center justify-around p-4 w-full h-full sm:flex-row flex-col gap-6">
            <p className="text-[#666] font-serif text-xs md:text-sm lg:text-base">PRIVACY POLICY</p>
            <p className="text-[#666] text-center font-serif text-xs md:text-sm lg:text-base sm:ml-10">COPYRIGHT @ALL RIGHTS RESERVED</p>
            <p className="text-[#666] font-serif text-xs md:text-sm lg:text-base">TERMS&CONDITIONS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;