import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { DataContext } from "../context/DataContext";

export const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const { fetchPost } = useContext(DataContext);

  const fetchPosts = () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    axios.get(url).then((response) => setPosts(response.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);
  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-end mt-2 ">
        <ul className="bg-white rounded-lg border border-gray-200 w-1/2 text-gray-900">
          <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
            <div className="animate-pulse flex justify-center">
              <h2 className="text-lg animate-pulse bg-gray-200 text-gray-200 w-1/2 text-center p-6">
                loading
              </h2>
              <p className="animate-pulse bg-gray-200 text-gray-200 p-6 w-full">
                loading
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-2">
      <ul className="bg-white rounded-lg border border-gray-200 w-1/2 text-gray-900">
        {posts.slice(0, 9).map((post) => (
          <li
            className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"
            key={post.id}
          >
            <div>
              <Link to={`/post/${post.id}`}>
                <button
                  className="mt-4 btn btn-dark card-title"
                  onClick={(e) => fetchPost(e)}
                  style={{ cursor: "pointer" }}
                >
                  {post.id}
                </button>
              </Link>
              <h2 className="text-lg">{post.title}</h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
