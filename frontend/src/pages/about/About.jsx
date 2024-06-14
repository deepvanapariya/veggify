import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const About = () => {
  return (
    <section className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl pt-10 pb-4 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        About
      </h1>
      <p className="text-center sm:w-1/2 mx-auto mb-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi
        sint neque atque libero eligendi maiores alias velit! Odit, debitis!
      </p>

      <article className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-700">
                {" "}
                Forever Home.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </article>
      {/*quetation section*/}
      <div className="container mx-auto px-6 py-40">
        <div className="flex flex-col md:flex-row items-center justify-between relative w-100 h-auto md:h-64 bg-white shadow-2xl rounded-lg p-8">
          <div className="w-8/12 text-2xl">
            <RiDoubleQuotesL className="float-left mr-2" />
            <span className="flex">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              architecto quo consequuntur cupiditate soluta quae pariatur
              voluptatem, est aliquid culpa!
            </span>
          </div>
          <button className="mt-2 md:mt-0 md:ml-2 bg-btnColor hover:text-secondary outline-none hover:border hover:border-btnColor hover:bg-[#f9f7f3] text-white shadow-lg rounded px-8 py-4">
            Call now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
