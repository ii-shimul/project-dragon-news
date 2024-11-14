import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 py-5">
      <img src={logo} alt="" />
      <h1 className="text-lg opacity-60 font-medium">
        Journalism Without Fear or Favour
      </h1>
      <p>
        {
        moment().format("dddd, MMMM Do YYYY")
        }
      </p>
    </div>
  );
};

export default Header;