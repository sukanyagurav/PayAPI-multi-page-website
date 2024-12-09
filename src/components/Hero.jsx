import React from "react";
import Card from "../UI/Card";
import Subscription from "./Subscription";
import heroImg from "../assets/home/desktop/illustration-phone-mockup.svg";
import { Link } from "react-router";
const Hero = () => {
  return (
    <Card classes="flex lg:justify-between text-center md:text-left items-center   flex-col md:flex-row-reverse  relative ">
      <div className=" overflow-x-hidden bg-image">
        <img src={heroImg} alt="" className="block " />
      </div>

      <div className="p-4 text-[#36536B] w-full max-w-[600px] ">
        <h1 className=" text-5xl md:text-[4.3rem] !font-serif leading-[1.2em] mb-8 font-medium">
          Start building with our APIs for absolutely free.
        </h1>
        <Subscription />
        <p className="mt-7">
          Have any questions?{" "}
          <Link to="/contact" className="hover:text-dark_pink">
            Contact us
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default Hero;
