import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

import MovieList from "../include/MovieList";
import MovieSearch from "../include/MovieSearch";
import MovieCont from "../include/MovieCont";

const Movie = () => {
    const [lists, setLists] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c7b716a0f422919939537929e105303f&language=ko-KR&page=1`)
            .then((response) => response.json())
            .then((result) => setLists(result.results))
            .catch((error) => console.log(error));
    }, []);

    const search = async (query) => {
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c7b716a0f422919939537929e105303f&query=${query}&page=1`)
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=c7b716a0f422919939537929e105303f&query=marvel&page=1")
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["movie", "reference api"]} />
                <MovieList lists={lists} />
                <MovieSearch onSearch={search} />
                <MovieCont movies={movies} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Movie;
