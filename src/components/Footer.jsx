import React from "react";
import logo from "../img/flogo.png";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f">
        <div className="f-left">
          <img src={logo} alt="" className="f-logo" />
        </div>
        <div className="f-mid">
          <h2 className="f-links">Links <span>Úteis</span></h2>
          <ul className="f-list">
            <li><a href="/">Em breve</a></li>
            <li><a href="/">Em breve</a></li>
            <li><a href="/">Em breve</a></li>
          </ul>
        </div>
        <div className="f-right">
          <div className="f-share">
            <a href="https://www.facebook.com/pedrovetor" className="fab fa-facebook-f"/>
            <a href="https://www.linkedin.com/in/pedro-f%C3%A9lix-459161128/" className="fab fa-linkedin" />
            <a href="https://www.instagram.com/pedrovetor/" className="fab fa-instagram" />
          </div>
        </div>
      </div>
      <div className="credit">
        &copy; copyright @ 2022 by <span>Pedro Félix</span> │ all rights
        reserved!
      </div>
    </div>
  );
};

export default Footer;
