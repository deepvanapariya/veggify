import React from "react";
import Hero from "../../component/Hero";
import CategoryWrapper from "../category/CategoryWrapper";
import FeaturedSection from "./FeaturedSection";

function Home() {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero />
        <CategoryWrapper />
      </div>
      {/* others component*/}
      <FeaturedSection />
    </div>
  );
}

export default Home;
