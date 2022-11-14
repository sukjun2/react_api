import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

function YoutubeRan({ randoms }) {
    return (
        <li>
            <a href={`https://www.youtube.com/watch?v=${randoms.id}`}>
                <img src={randoms.snippet.thumbnails.medium.url} alt={randoms.snippet.description} />
            </a>
        </li>
    );
}
const YoutubeSlider = ({ randoms }) => {
    return (
        <section className="movie__popular">
            <div className="container">
                <div className="popular__inner">
                    <h2>Youtube Ranking</h2>
                    <Swiper
                        effect={"coverflow"}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        initialSlide="3"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {randoms.map((randoms, index) =>
                            index < 10 ? (
                                <SwiperSlide key={index}>
                                    <YoutubeRan key={index} randoms={randoms} index={index} />
                                </SwiperSlide>
                            ) : null
                        )}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default YoutubeSlider;
