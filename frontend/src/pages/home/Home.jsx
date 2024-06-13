import React from "react";
import Hero from "../../component/Hero";
import CategoryWrapper from "../category/CategoryWrapper";
import FeaturedSection from "./FeaturedSection";
import LatestRecipe from "./LatestRecipe";
import NewsLetter from "./NewsLetter";
import AboutSection from "./AboutSection";

function Home() {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero />
        <CategoryWrapper />
      </div>
      {/* others component*/}
      <FeaturedSection />
      <LatestRecipe />
      <NewsLetter />
      <AboutSection />
    </div>
  );
}

export default Home;
