import React from "react";
import { FaEye, FaStar, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Thumbnail */}
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full h-[350px] object-cover"
      />
      <div className="p-4">
        {/* Title and Bookmark */}
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-800">{news.title}</h2>
          <FaBookmark className="text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>

        {/* Details */}
        <p className="text-sm text-gray-600 mt-2">
          {news.details.slice(0, 190)}... {/* Truncate details */}
          <Link to={`/news/${news._id}`} className="btn-link">Read More</Link>
        </p>

        {/* Author Info */}
        <div className="flex items-center mt-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-800">
              {news.author.name}
            </p>
            <p className="text-xs text-gray-600">
              {news.author.published_date}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-400" />
            <span className="text-sm text-gray-600 font-medium">
              {news.rating.number}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEye className="text-gray-500" />
            <span className="text-sm text-gray-600">
              {news.total_view} views
            </span>
          </div>
          <FaShareAlt className="text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
