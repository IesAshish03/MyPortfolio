import React from "react";
import Profile from "../../assets/My image.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Hi... i'm Ashish,</span> Frontend Developer
          </h1>

          <p className="home__description">
            I'm a Web designer & front-end developer focused on crafting clean &
            user-friendly experience, I'm passionate about building excellent
            web application that improves the lives of those around me.
          </p>

          <Link to="/about" className="button">
            More about me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
