import { faCat, faDog, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const Nav = () => {
  const { user, setUser, loading, setLoading } = useContext(AppContext);

  function LogOut() {
    setLoading(true);
    setTimeout(() => {
      signOut(auth)
        .then(() => {
          console.log("User Logged Out.");
          setUser(null);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }

  return (
    <nav className="home__nav">
      <div className="nav__container">
        <div className="nav__logo">
          <FontAwesomeIcon icon={faCat} className="nav__logo__icon" />
        </div>
        <div className="nav__links">
          <Link to="/gallery" className="nav__link">
            Gallery
          </Link>
          {user ? (
            <Link to="/favorites" className="nav__link">
              Favorites
            </Link>
          ) : (
            <></>
          )}
          {user ? (
            <div onClick={LogOut} className="nav-link-1">
              {loading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="form-item-loading-spinner"
                />
              ) : (
                `Sign Out ${user?.displayName}`
              )}
            </div>
          ) : (
            <></>
          )}
          {!user ? (
            <Link to="/register" className="nav__link">
              Login
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
