import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

function UnsplashRan(props) {
    return (
        <li>
            <a href={`https://unsplash.com/photos/${props.random.id}`} target="_blank" rel="noreferrer">
                <img src={`${props.random.urls.regular}`} alt={props.random.alt_description} className="movie_img" />
            </a>
        </li>
    );
}

const UnsplashList = (props) => {
    return (
        <section className="unsplash__list">
            <div className="container">
                <div className="list__inner">
                    <h2>Unsplash Images</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
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
