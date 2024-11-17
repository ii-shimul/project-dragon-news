import React, { useContext } from "react";
import userIcon from "../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {logIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password).catch(error=> alert(error.code));
    navigate('/');
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-16 w-auto rounded-full"
          src={userIcon}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div classNameName="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn w-full btn-neutral"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?
          <Link
            to={"/auth/register"}
            href="#"
            className="font-semibold ml-1 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
