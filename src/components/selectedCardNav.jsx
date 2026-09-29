import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faDog } from "@fortawesome/free-solid-svg-icons";

const SelectedCardNav = () => {
  const { user } = useContext(AppContext);
  return (
    <>
     <nav className="home__nav">
      <div className="nav__container">
        <div className="nav__logo">
          <FontAwesomeIcon icon={faCat} className="nav__logo__icon" />
        </div>
        <div className="nav__links">
          <Link to="/" className="nav__link">Home</Link>
          {user ? <Link to="/favorites" className="nav__link">Favorites</Link> : <></>}
          {!user ? <Link to="/register" className="nav__link">Login</Link> : <></>}
        </div>
      </div>
    </nav>
    </>
  );
};

export default SelectedCardNav;
