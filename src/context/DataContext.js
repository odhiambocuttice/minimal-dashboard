import { createContext, useState } from "react";
import axios from "axios";
import { setCookie } from "nookies";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [onePost, setOnePost] = useState({});

  const fetchPost = (event) => {
    const postId = event.target.innerText;
    const url = `https://jsonplaceholder.typicode.com/posts?id=${postId}`;
    axios.get(url).then((response) => {
      setOnePost(response.data);
    });
  };

  const login = async (email, password) => {
    const url =
      "https://gateway-service-5qoj75li4a-uc.a.run.app/api/v1/auth/login/";
    try {
      const resp = await axios.post(url, {
        username: email,
        password,
        clientType: "web",
      });

      const token = resp.data.data.refreshToken;

      setCookie(null, "refreshToken", token, {
        maxAge: 24 * 60 * 60,
        path: "/",
        sameSite: "strict",
      });

    } catch (error) {
      console.log("Login Error", error);
      return <h1>{error}</h1>;
    }
  };

  const UpdateProfile = async (firstName, lastName) => {
    const url =
      "https://gateway-service-5qoj75li4a-uc.a.run.app/api/v1/auth/update-profile";
    try {
      const response = await axios.post(url, {
        firstName: "Jane",
        lastName: "Doe",
        dateOfBirth: "2000-01-12",
        avatar: "https://public/image/url",
      });

      console.log(response.data);
    } catch (error) {
      console.log("Update Error", error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        onePost,
        fetchPost,
        login,
        UpdateProfile,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
