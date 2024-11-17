import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const News = useLoaderData().data;
  return (
    <div>
      <h2 className="font-semibold text-lg mb-4">Dragon News Home</h2>
      <div className="space-y-5">
        {
          News.map((news) => <NewsCard key={news._id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
