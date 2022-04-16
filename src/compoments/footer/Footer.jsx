import React from "react";
import "./footer.css";
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
    return (
        <footer id="footer">
            <ul className="premalinks">
                <li>
                    <a href="#">made by</a>
                </li>
            </ul>
            <a href="#" className="footer-logo">
                IbrahimGB
            </a>

            <div className="copyright">
                <small>&copy; ibrahim gb </small>
            </div>
        </footer>
    );
};

export default Footer;
