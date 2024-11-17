import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="pt-10 w-[85%] mx-auto grid grid-cols-3">
      <div className="font-semibold text-lg flex items-center">{user && user.email}</div>
      <div className="flex justify-center items-center gap-7">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Career</Link>
      </div>
      <div className="flex gap-3 justify-end items-center">
        <img src={userIcon} alt="" className="rounded-full" />
        {user ? (
          <button onClick={logOut} className="btn btn-active btn-neutral">
            LogOut
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-active btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
