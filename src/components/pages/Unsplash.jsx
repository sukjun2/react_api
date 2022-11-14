import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashBtn from "../include/UnsplashBtn";
import UnsplashCont from "../include/UnsplashCont";
import Contact from "../layout/Contact";

const Unsplash = () => {
    const [images, setImages] = useState([]);
    const [random, setRandom] = useState([]);

    const search = async (query) => {
        await fetch(`https://api.unsplash.com/search/photos/?client_id=sf6Q68YlU2mVvJqWMapJjCgVSQShpVebqPohf5BOb08&query=${query}&per_page=20`)
            .then((response) => response.json())
            // .then((result) => console.log(result))
            .then((result) => setImages(result.results))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?client_id=sf6Q68YlU2mVvJqWMapJjCgVSQShpVebqPohf5BOb08&query=seoul&count=20`)
            .then((response) => response.json())
            // .then((result) => console.log(result))
            .then((result) => setImages(result))
            .catch((error) => console.log(error));

        fetch("https://api.unsplash.com/photos/random?client_id=sf6Q68YlU2mVvJqWMapJjCgVSQShpVebqPohf5BOb08&count=10")
            .then((response) => response.json())
            .then((result) => setRandom(result))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["unsplash", "reference api"]} />
                <UnsplashSlider random={random} />
                <UnsplashSearch onSearch={search} />
                <UnsplashBtn />
                <UnsplashCont images={images} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Unsplash;
