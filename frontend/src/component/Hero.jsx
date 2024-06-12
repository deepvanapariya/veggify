import React from "react";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="px-5 xl:px-10 md:w-1/2 md-10 ">
      <h1 className="mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed">
        A blog templete made for food{" "}
        <span className="text-orange-400">influencers</span>
      </h1>
      <form
        action="/search"
        className="bg-white p-4 rounded relative flex items-centerd"
      >
        <IoSearch className="w-5 h-5 mr-2 text-neutral-300" />
        <input
          type="search"
          placeholder="Search for recipe"
          name="query"
          id="search"
          className="outline-none w-full placeholder:text-[#1b2629"
          required
        />
      </form>
    </div>
  );
};

export default Hero;
