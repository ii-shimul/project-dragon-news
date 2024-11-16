import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="mt-6 font-semibold text-lg">
      <h2 className="mb-4">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn join-item border justify-start text-base">
          {" "}
          <FaFacebook className="text-blue-700"></FaFacebook> Facebook
        </button>
        <button className="btn join-item border justify-start text-base">
          <FaTwitter className="text-blue-500"></FaTwitter> Twitter
        </button>
        <button className="btn join-item border justify-start text-base">
          {" "}
          <FaInstagram className="text-red-500"></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;
