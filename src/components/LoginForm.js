import React from "react";
// import { parseCookies, setCookie } from "nookies";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = React.useContext(DataContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <section className="h-full">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample"
            />
          </div>
          <div className="xl:ml-20 xl:w-3/12 lg:w-3/12 md:w-5/12 mb-12 md:mb-0">
            <form>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <h1 className="text-center text-3xl font-extrabold mx-4 mb-0">
                  Sign in
                </h1>
              </div>

              <div className="mb-6">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Username"
                />
              </div>

              <div className="mb-6">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div className="text-center lg:text-left w-full">
                <button
                  onClick={(e) => handleLogin(e)}
                  className=" w-full px-7 py-3 bg-orange-300 text-slate-800 font-medium text-sm leading-snug uppercase rounded"
                >
                  <Link to="/home">Login</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
