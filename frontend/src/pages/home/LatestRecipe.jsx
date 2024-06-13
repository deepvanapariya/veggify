import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../component/Card";
import { Link } from "react-router-dom";

const LatestRecipe = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    const getLatestItems = async () => {
      const response = await axios.get(`http://localhost:8000/api/all-items`);

      setItem(response.data);
    };
    getLatestItems();
  }, []);

  return (
    <div className="px-5 xl:px-10 py-16 ">
      <h1 className="text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        LatestRecipe
      </h1>
      {/* get  all items*/}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.length > 0 ? (
          items.slice(0, 4).map((item) => <Card key={item._id} item={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className=" sm:w-64 mx-auto mt-16">
        <Link to="/recipes">
          <button
            type="button"
            className="py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border-[#9c702a] focus:outline-none rounded-lg outline-2"
          >
            View All Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestRecipe;
