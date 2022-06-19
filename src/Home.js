import React, { useEffect } from "react";
import { parseCookies } from "nookies";
import axios from "axios";

export const Home = () => {
  const [user, setUser] = React.useState({});
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [error, setError] = React.useState("");

  const cookieToken = parseCookies("refreshToken")["refreshToken"];

  // fecth user data from every time the cookieToken is set
  useEffect(() => {
    const getUser = async () => {
      const tokenUrl =
        "https://gateway-service-5qoj75li4a-uc.a.run.app/api/v1/auth/refresh-token";

      try {
        const response = await axios.post(tokenUrl, {
          refreshToken: cookieToken,
          clientType: "web",
        });

        const coco = response.data.data.user;
        setUser(coco);
        console.log(response.data.data.user);
      } catch (error) {
        console.log("Update Error", error);
      }
    };

    getUser();
  }, [cookieToken]);

  // user profile  data
  const body = {
    avatar:
      "https://storage.googleapis.com/iprocure-servers-uploads/profiles%2F1%2Fcl48h5zfy000p01s63vk8appz.jpg",
    dateOfBirth: "2022-06-16",
    firstName,
    lastName,
    username,
  };

  // Update Profile function
  const UpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://gateway-service-5qoj75li4a-uc.a.run.app/api/v1/auth/update-profile`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${String(localStorage.getItem("refresh"))}`,
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      setError(error.message);
      console.log("Update Error", error);
    }
  };

  return (
    <section className="h-full flex justify-center ">
      <div className="text-gray-800">
        <div className="xl:ml-20 w-full mb-12 md:mb-0 bg-slate-50 shadow-2xl  px-6 py-20">
          {error && (
            <div role="alert" className="">
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Authentication Error
              </div>
              <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>{error}</p>
              </div>
            </div>
          )}
          <form>
            {user.avatar === undefined ? (
              <div className="mb-6 flex justify-center">
                <div className="animate-pulse w-20 h-20 rounded-full bg-gray-200 border-8 border-spacing-2"></div>
              </div>
            ) : (
              <div className="mb-6 flex justify-center">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-20 h-20 rounded-full border-8 border-spacing-2 border-orange-500"
                />
              </div>
            )}

            {user.firstName === undefined ? (
              <div className="mb-6 ">
                <input
                  type="text"
                  className="form-control animate-pulse bg-gray-200 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>
            ) : (
              <div className="mb-6">
                <label htmlFor="" className="flex justify-center font-bold">
                  FirstName
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder={user.firstName}
                />
              </div>
            )}

            {user.lastName === undefined ? (
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control animate-pulse bg-gray-200 block w-full px-4 py-2 rounded"
                />
              </div>
            ) : (
              <div className="mb-6">
                <label htmlFor="" className="flex justify-center font-bold">
                  Lastname
                </label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder={user.lastName}
                />
              </div>
            )}

            {user.lastName === undefined ? (
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control animate-pulse bg-gray-200 block w-full px-4 py-2 rounded"
                />
              </div>
            ) : (
              <div className="mb-6">
                <label htmlFor="" className="flex justify-center font-bold">
                  Username
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder={user.username}
                />
              </div>
            )}

            <div className="text-center lg:text-left w-full">
              <button
                onClick={(e) => UpdateProfile(e)}
                type="submit"
                className=" w-full px-7 py-3 bg-orange-300 text-slate-800 font-medium text-sm leading-snug uppercase rounded"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
