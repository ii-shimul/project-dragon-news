import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png';
const Navbar = () => {
  return (
    <div className="mt-10 w-[85%] mx-auto grid grid-cols-3">
      <div className=""></div>
      <div className="flex justify-center items-center gap-7">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Career</Link>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <img src={userIcon} alt="" />
        <Link to={"/auth"} className="btn btn-active btn-neutral">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;