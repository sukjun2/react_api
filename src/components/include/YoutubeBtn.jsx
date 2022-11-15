import React from "react";

const YoutubeBtn = ({ onSearch }) => {
    const onClick1 = () => {
        onSearch("javascript");
    };
    const onClick2 = () => {
        onSearch("html");
    };
    const onClick3 = () => {
        onSearch("css");
    };
    const onClick4 = () => {
        onSearch("react");
    };
    const onClick5 = () => {
        onSearch("vue");
    };
    const onClick6 = () => {
        onSearch("php");
    };
    const onClick7 = () => {
        onSearch("node");
    };

    return (
        <div className="unsplash__btn">
            <div className="container">
                <button type="submit" onClick={onClick1}>
                    {/* {unsplashInfo.map((text, index) => (
            <UnsplashText key={index} text={text.text} />
          ))} */}
                    javascript
                </button>
                <button type="submit" onClick={onClick2}>
                    html
                </button>
                <button type="submit" onClick={onClick3}>
                    css
                </button>
                <button type="submit" onClick={onClick4}>
                    react
                </button>
                <button type="submit" onClick={onClick5}>
                    vue
                </button>
                <button type="submit" onClick={onClick6}>
                    php
                </button>
                <button type="submit" onClick={onClick7}>
                    node
                </button>
            </div>
        </div>
    );
};

export default YoutubeBtn;
