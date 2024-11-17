import React from "react";
import Header from "../components/Header";
import RightNav from "../components/layout-components/RightNav";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const { image_url, title, details, category_id } = useLoaderData().data[0];
  const nav = useNavigate();
  return (
    <div>
      <Header></Header>
      <div className="w-[85%] mx-auto mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-9 border p-5 rounded-lg space-y-3">
          <img src={image_url} alt="" />
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="opacity-70">{details}</p>
          <Link to={`/category/${category_id}`} className="btn btn-active btn-secondary">
            <FaArrowLeft />
            All news in this category
          </Link>
        </div>
        <div className="col-span-3">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
