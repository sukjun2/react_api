import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Youtube from "./components/pages/Youtube";
import Movie from "./components/pages/Movie";
import Unsplash from "./components/pages/Unsplash";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/youtube" element={<Youtube />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/unsplash" element={<Unsplash />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

// rfce = 함수(function) 생성
// rafce = 익명함수 생성
