import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Posts = () => {
  //variables
  const { onePost } = useContext(DataContext);

  // the try and catch block is used to prevent the app from crashing if the post returns back empty
  try {
    console.log(onePost);

    return (
      <div className="flex justify-center mt-2">
        <ul className="bg-white rounded-lg border border-gray-200 w-1/2 text-gray-900">
          <h1 className="text-2xl">
            Post <span className="font-bold">{onePost[0]["id"]}</span> Data
          </h1>
          <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
            <div>
              <div className="flex p-2">
                <h1 className="font-bold px-12 text-3xl">Title:</h1>
                <h3 className="text-center font-medium text-2xl">
                  {onePost[0]["title"]}
                </h3>
              </div>

              <div className="flex p-2">
                <h1 className="font-bold px-3 text-3xl">Description:</h1>
                <p className="text-start">{onePost[0]["body"]}</p>
              </div>

              <div className="flex p-2">
                <h1 className="font-bold px-10 text-3xl">By User:</h1>
                <p className="text-start text-3xl">{onePost[0]["userId"]}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  } catch (error) {
    return <h1 className="text-black font-semibold">Loading...</h1>;
  }
};
