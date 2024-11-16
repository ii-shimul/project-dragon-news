import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa6";


const SocialLogin = () => {
  return (
      <div>
        <h2 className="font-semibold text-lg mb-4">Login With</h2>
        <div className="space-y-3">
          <div className="btn border-2 border-blue-700 py-2 flex rounded-md gap-2 text-blue-700 font-semibold items-center justify-center">
            <FaGoogle />
            Login with Google
          </div>
          <div className="btn border-2 border-black py-2 flex gap-2 rounded-md font-semibold items-center justify-center">
            <FaGithub />
            Login with Google
          </div>
        </div>
      </div>
  );
};

export default SocialLogin;