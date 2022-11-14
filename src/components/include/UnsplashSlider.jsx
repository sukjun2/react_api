import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

function UnsplashRan(props) {
    return (
        <li>
            <a href={`https://api.unsplash.com/photos/random?${props.random.id}`} target="_blank" rel="noreferrer">
                <img src={`https://api.unsplash.com/photos/random?${props.random.urls.regular}`} alt={props.random.alt_description} className="movie_img" />
            </a>
        </li>
    );
}

const UnsplashList = (props) => {
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
                        {props.random.map((random, index) => (
                            <SwiperSlide key={index}>
                                <UnsplashRan key={index} random={random} index={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default UnsplashList;
