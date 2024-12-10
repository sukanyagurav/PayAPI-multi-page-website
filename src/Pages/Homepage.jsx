import React from "react";
import Hero from "../components/Hero";
import Card from "../UI/Card";
import { companies } from "../utils/imagesUrl";
import { Link } from "react-router";

const Homepage = () => {
  return (
    <>
      <Hero />
      <main>
        <section className="bg-[#1B262F] py-24 px-8 my-20 ">
          <Card classes="flex flex-col md:flex-row-reverse justify-between items-center gap-16">
            <div className="flex-0.6 flex flex-wrap gap-10 max-w-[480px]">
              {companies.map((companyImage) => (
                <img
                  src={companyImage.imageUrl}
                  alt={companyImage.id}
                  className="flex-1 object-contain companyImage w-[6rem] md:w-[8rem]"
                />
              ))}
            </div>
            <div className=" flex-0.4 text-center md:text-left max-w-[500px]">
              <h2 className="text-white font-bold font-serif text-4xl mb-8">
                Who we work with
              </h2>
              <p className="mb-8 leading-loose text-gray-300">
                Today, millions of people around the world have successfully
                connected their accounts to apps they love using our API. We
                provide developers with the tools they need to create easy and
                accessible experiences for their users.
              </p>
              <Link
                to="/About"
                className="py-[0.8rem] px-6  rounded-full text-white bg-transparent border-2 border-white hover:bg-white hover:text-[#1B262F]"
              >
                About Us
              </Link>
            </div>
          </Card>
        </section>
      </main>
    </>
  );
};

export default Homepage;
