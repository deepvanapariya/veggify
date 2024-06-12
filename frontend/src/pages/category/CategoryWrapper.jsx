import React from "react";
import { Link } from "react-router-dom";
function CategoryItem({ name, href, backgroundColor, color }) {
  const style = {
    backgroundColor,
    color,
    borderColor: color,
  };
  return (
    <div>
      <Link to={href}>
        <div
          className="uppercase px-6 py-2 text-center rounded-full "
          style={style}
        >
          {name}
        </div>
      </Link>
    </div>
  );
}

function CategoryList() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      <CategoryItem
        name="entrees"
        href="/categories/Entrees"
        backgroundColor="#f0f5c4"
        color="#59871f"
      />
      <CategoryItem
        name="breakfast"
        href="/categories/Breakfast"
        backgroundColor="#efedfa"
        color="#3c3a8f"
      />
      <CategoryItem
        name="lunch"
        href="/categories/Lunch"
        backgroundColor="#e5f7f3"
        color="#1f8787"
      />
      <CategoryItem
        name="desserts"
        href="/categories/Desserts"
        backgroundColor="#e8f5fa"
        color="#397a9e"
      />
      <CategoryItem
        name="sides"
        href="/categories/Sides"
        backgroundColor="#feefc9"
        color="#d16400"
      />
      <CategoryItem
        name="drinks"
        href="/categories/Drinks"
        backgroundColor="#ffeae3"
        color="#f0493e"
      />
    </div>
  );
}

const CategoryWrapper = () => {
  return (
    <div className="my-5">
      <CategoryList />
    </div>
  );
};

export default CategoryWrapper;
