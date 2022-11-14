import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeCont from "../include/YoutubeCont";
import Contact from "../layout/Contact";

const Youtube = () => {
    const [youtubes, setYoutubes] = useState([]);
    const [randoms, setRandoms] = useState([]);

    const search = async (query) => {
        await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyBenl9UdKbF06EZbQpp2Tn-mvbrj3jJvDo&maxResults=20&type=video`)
            .then((response) => response.json())
            // .then((result) => console.log(result))
            .then((result) => setYoutubes(result.items))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=webstoryboy&key=AIzaSyBenl9UdKbF06EZbQpp2Tn-mvbrj3jJvDo&maxResults=20&type=video")
            .then((response) => response.json())
            // .then((result) => console.log(result))
            .then((result) => setYoutubes(result.items))
            .catch((error) => console.log(error));

        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=webstoryboy&key=AIzaSyBenl9UdKbF06EZbQpp2Tn-mvbrj3jJvDo&maxResults=20&type=video")
            .then((response) => response.json())
            // .then((result) => console.log(result))
            .then((result) => setRandoms(result.items))
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <Header />
            <Contents>
                <Title title={["List of YouTube", "using API"]} />
                <YoutubeSlider randoms={randoms} />
                <YoutubeSearch onSearch={search} />
                <YoutubeCont youtubes={youtubes} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};
export default Youtube;
