import React from "react";

const referTitle = {
    title: "CSS",
};
const ReferText = ({ num, title, desc, star }) => {
    return (
        <li>
            <a href="/">
                <span className="num">{num}</span>
                <span className="name">{title}</span>
                <span className="desc">{desc}</span>
                <span className="star">{star}</span>
            </a>
        </li>
    );
};

const ReferCont = ({ references }) => {
    // console.log("references", references);
    return (
        <section className="cont__refer">
            <div className="container">
                <div className="refer__inner">
                    <h2>{referTitle.title}</h2>
                    <ul className="refer__list">
                        {references.map((refer, index) => (
                            <ReferText key={index} num={refer.num} title={refer.title} desc={refer.desc} star={refer.star} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ReferCont;
