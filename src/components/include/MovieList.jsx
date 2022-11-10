import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

function MoviePop(props) {
    return (
        <li>
            <a href={`https://www.themoviedb.org/movie/${props.movie.id}`} target="_blank" rel="noreferrer">
                <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.title} className="movie_img" />
                <em>
                    <span className="title">{props.movie.title}</span>
                    <span className="star">{props.movie.vote_average}</span>
                    <span className="rank">{props.index + 1}</span>
                </em>
            </a>
        </li>
    );
}

const MovieList = (props) => {
    return (
        <section className="movie__list">
            <div className="container">
                <div className="list__inner">
                    <h2>Popular Movies</h2>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        initialSlide="3"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={false}
                        modules={[Autoplay, EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {props.lists.map((movies, index) => (
                            <SwiperSlide key={index}>
                                <MoviePop key={index} movie={movies} index={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default MovieList;
