import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './LeftNav.css';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="font-semibold text-lg mb-4">All Categories</h2>
      <div className="flex flex-col gap-3">
        {categories.map((category) => {
          return (
            <NavLink
              to={`/category/${category.category_id}`}
              key={category.category_id}
              className="btn btn-ghost text-lg"
            >
              {category.category_name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;
