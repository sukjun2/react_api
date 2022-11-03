import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";

const Movie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=c7b716a0f422919939537929e105303f&query=marble&page=1")
            .then((response) => response.json())
            .then((result) => setMovies(result))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["movie", "reference api"]} />
                <MovieCont movies={movies} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Movie;
