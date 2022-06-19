import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { LoginForm } from "./components/LoginForm";
import { DataProvider } from "./context/DataContext";
import { parseCookies } from "nookies";
import { NavBar } from "./components/NavBar";
import { AllPosts } from "./components/AllPosts";
import { Posts } from "./components/Posts";

function App() {
  const cookieToken = parseCookies("refreshToken")["refreshToken"];

  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LoginForm />} />
            {cookieToken ? (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/posts" element={<AllPosts />} />
                <Route exact path="/post/:id" element={<Posts />} />
              </>
            ) : (
              <Route path="/login" element={<LoginForm />} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
