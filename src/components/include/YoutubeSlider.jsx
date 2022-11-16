import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper";

function YoutubeRan({ randoms }) {
    return (
        <li>
            <a href={`https://www.youtube.com/watch?v=${randoms.id.videoId}`}>
                <img src={randoms.snippet.thumbnails.medium.url} alt={randoms.snippet.description} />
            </a>
        </li>
    );
}
const YoutubeSlider = ({ randoms }) => {
    return (
        <section className="youtube__slider">
            <div className="container">
                <div className="youtube__slider__inner">
                    <h2>Youtube Video</h2>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        effect={"cards"}
                        grabCursor={true}
                        modules={[Autoplay, EffectCards]}
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
