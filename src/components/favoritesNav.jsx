import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const FavoritesNav = () => {
  return (
    <>
      <nav className="home__nav">
        <div className="nav__container">
          <div className="nav__logo">
            <FontAwesomeIcon icon={faCat} className="nav__logo__icon" />
          </div>
          <div className="nav__links">
            <Link to="/" className="nav__link">
              Home
            </Link>
            <Link to="/gallery" className="nav__link">
              Gallery
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FavoritesNav;
