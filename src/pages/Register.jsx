import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo_url = form.get("photo_url");
    createNewUser(email, password)
      .then((res) => setUser(res.user))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              for="name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Your name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div>
            <label
              for="photo_url"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Photo URL
            </label>
            <div className="mt-2">
              <input
                id="photo_url"
                name="photo_url"
                type="text"
                autocomplete="photo_url"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
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
            <button type="submit" className="btn w-full btn-neutral">
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          ALready a member?
          <Link
            to={"/auth/login"}
            href="#"
            className="font-semibold ml-1 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
