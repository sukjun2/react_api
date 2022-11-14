import React from "react";

function UnsplashItem(props) {
    return (
        <li>
            <a href={`https://unsplash.com/photos/${props.images.id}`} target="_blank" rel="noreferrer">
                <img src={props.images.urls.regular} alt={props.images.alt_description} />
            </a>
        </li>
    );
}

const UnsplashCont = (props) => {
    return (
        <section className="cont__unsplash">
            <div className="container">
                <div className="unsplash__inner">
                    <ul>
                        {props.images.map((images, index) => (
                            <UnsplashItem key={index} images={images} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default UnsplashCont;
