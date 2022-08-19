import React, { Fragment } from "react";
import "./Footer.css";
import { categories1, categories2, quickLinks } from "./footerlinksApi";
import logo from "./logo.png";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer" id="footer">
        <div className="box-container">
          <div className="box">
            <div className="img">
              <a href="/" className="logo">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              temporibus! Quam eveniet quae ullam, odio corporis fugiat,
              explicabo mollitia blanditiis iste illo ex.
            </p>
            <div className="share">
              <a href="/" className="btn fab fa-facebook-f"></a>
              <a href="/" className="btn fab fa-twitter">
                <i></i>
              </a>
              <a href="/" className="btn fab fa-instagram">
                <i></i>
              </a>
              <a href="/" className="btn fab fa-linkedin">
                <i></i>
              </a>
            </div>
          </div>

          <div className="box">
            <h3 className="categories">Categories</h3>
            <div className="link">
              <div className="links">
                {categories1.map((i, index) => {
                  return (
                    <a href={i.link} key={index}>
                      {i.name}
                    </a>
                  );
                })}
              </div>
              <div className="links">
                {categories2.map((i, index) => {
                  return (
                    <a href={i.link} key={index}>
                      {i.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="box ">
            <h3>Quick Links</h3>
            <div className="links">
              {quickLinks.map((i, index) => {
                return (
                  <a href={i.link} key={index}>
                    {i.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
