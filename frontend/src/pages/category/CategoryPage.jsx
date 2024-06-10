import React from "react";
import { useParams } from "react-router-dom";
import CategoryWrapper from "./CategoryWrapper";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl capitalize">
        {" "}
        {category}
      </h1>
      <CategoryWrapper />
    </div>
  );
};

export default CategoryPage;
