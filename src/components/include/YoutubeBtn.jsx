import React from "react";

const YoutubeBtn = ({ onSearch }) => {
    const onClick1 = () => {
        onSearch("dog");
    };
    const onClick2 = () => {
        onSearch("cat");
    };
    const onClick3 = () => {
        onSearch("hamster");
    };
    const onClick4 = () => {
        onSearch("rabbit");
    };
    const onClick5 = () => {
        onSearch("tiger");
    };
    const onClick6 = () => {
        onSearch("fox");
    };
    const onClick7 = () => {
        onSearch("lion");
    };

    return (
        <div className="unsplash__btn">
            <div className="container">
                <button type="submit" onClick={onClick1}>
                    {/* {unsplashInfo.map((text, index) => (
            <UnsplashText key={index} text={text.text} />
          ))} */}
                    spring
                </button>
                <button type="submit" onClick={onClick2}>
                    summer
                </button>
                <button type="submit" onClick={onClick3}>
                    hamster
                </button>
                <button type="submit" onClick={onClick4}>
                    rabbit
                </button>
                <button type="submit" onClick={onClick5}>
                    tiger
                </button>
                <button type="submit" onClick={onClick6}>
                    fox
                </button>
                <button type="submit" onClick={onClick7}>
                    lion
                </button>
            </div>
        </div>
    );
};

export default YoutubeBtn;
