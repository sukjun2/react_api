import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

// 클래스 컴퍼넌트 / 함수형 컴퍼넌트 --> 리액트 훅

const Reference = () => {
    const [references, setReferences] = useState([]);

    useEffect(() => {
        fetch("https://sukjun2.github.io/react_api/src/utils/reference.json")
            .then((response) => response.json())
            .then((result) => {
                // console.log(result.cssRefer);
                return result;
            })
            .then((result) => setReferences(result.cssRefer))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Title title={["reference", "book"]} />
                <ReferCont references={references} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Reference;
