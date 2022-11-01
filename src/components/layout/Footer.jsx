import React from "react";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer__inner">
                <div>
                    <h3>email</h3>
                    <a href="mailto:tjrwns3650@gmail.com">mailto:tjrwns3650@gmail.com</a>
                </div>
                <div>
                    <h3>kakao</h3>
                    <a href="/">tjrwns3650</a>
                </div>
                <div>
                    <h3>social</h3>
                    <ul>
                        <li>
                            <a href="/">youtube</a>
                        </li>
                        <li>
                            <a href="/">instargram</a>
                        </li>
                        <li>
                            <a href="/">github</a>
                        </li>
                        <li>
                            <a href="/">blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
