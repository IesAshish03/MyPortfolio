import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span> Portfolio </span>
      </h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
      <div className="contact_button_">
        <div className="contact__button">
          <Link to="/contact" className="button">
            Contact Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
