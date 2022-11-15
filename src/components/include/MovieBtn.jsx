import React from "react";

const MovieBtn = ({ onSearch }) => {
    const onClick1 = () => {
        onSearch("marvel");
    };
    const onClick2 = () => {
        onSearch("disney");
    };
    const onClick3 = () => {
        onSearch("dc");
    };
    const onClick4 = () => {
        onSearch("lego");
    };
    const onClick5 = () => {
        onSearch("world");
    };
    const onClick6 = () => {
        onSearch("horror");
    };
    const onClick7 = () => {
        onSearch("action");
    };

    return (
        <div className="unsplash__btn">
            <div className="container">
                <button type="submit" onClick={onClick1}>
                    {/* {unsplashInfo.map((text, index) => (
            <UnsplashText key={index} text={text.text} />
          ))} */}
                    marvel
                </button>
                <button type="submit" onClick={onClick2}>
                    disney
                </button>
                <button type="submit" onClick={onClick3}>
                    dc
                </button>
                <button type="submit" onClick={onClick4}>
                    lego
                </button>
                <button type="submit" onClick={onClick5}>
                    world
                </button>
                <button type="submit" onClick={onClick6}>
                    horror
                </button>
                <button type="submit" onClick={onClick7}>
                    action
                </button>
            </div>
        </div>
    );
};

export default MovieBtn;
