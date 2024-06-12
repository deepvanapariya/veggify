import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryWrapper from "./CategoryWrapper";
import axios from "axios";

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/categories/${category}`
        );
        console.log("fe response=>", response.data);
        setItems(response.data);
      } catch (error) {
        setError(error.message || `Error loading category`);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryData();
  }, [category]);

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl capitalize">
        {" "}
        {category}
      </h1>
      <CategoryWrapper />

      <ul>
        {items && items.map((item) => <li key={item._id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default CategoryPage;
