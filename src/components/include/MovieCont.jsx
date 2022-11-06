import React from "react";

const movieTitle = {
    title: "MOVIE",
};
const MovieCont = ({ movies }) => {
    console.log({ movies });
    return (
        <section className="cont__movie">
            <div className="container">
                <div className="movie__inner">
                    <h2>{movieTitle.title}</h2>
                    <ul className="movie__list"></ul>
                </div>
            </div>
        </section>
    );
};

export default MovieCont;
