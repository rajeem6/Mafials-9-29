import { faCat, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";

const Register = () => {
  const [signState, setSignState] = useState("Log In");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { user, setUser, loading, setLoading, navigate } =
    useContext(AppContext);

  function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    if (signState === "Log In") {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          const loggedInUser = user.user;
          console.log(loggedInUser.displayName, "Logged in!");
          setUser(loggedInUser);
          setTimeout(() => {
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          alert(errorCode + errorMessage);
          setLoading(false);
        });
    } else if (signState === "Sign Up") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          const newUser = user.user;
          console.log(newUser);
          setTimeout(() => {
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);
            navigate("/");
          }, 2000);
          return newUser;
        })
        .then((newUser) => {
          return updateProfile(newUser, {
            displayName: name,
          }).then(() => {
            return newUser;
          });
        })
        .then((newUser) => {
          console.log(newUser.displayName, "has Signed Up!");
          setUser(newUser);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
          setLoading(false);
        });
    }
  }

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

      {!user ? (
        <div className="register">
          <div className="register__form">
            <h1>{signState}</h1>
            <form onSubmit={onSubmit}>
              {signState === "Sign Up" ? (
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your Name"
                />
              ) : (
                <></>
              )}
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
              {signState === "Log In" ? (
                <button type="submit">
                  {loading ? (
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="form-item-loading-spinner"
                    />
                  ) : (
                    "Log in!"
                  )}
                </button>
              ) : (
                <button type="submit">
                  {loading ? (
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="form-item-loading-spinner"
                    />
                  ) : (
                    "Sign Up Now!"
                  )}
                </button>
              )}
              {signState === "Log In" ? (
                <span>
                  Don't have an account yet?{" "}
                  <button
                    onClick={() => setSignState("Sign Up")}
                    type="button"
                    className="register__form-switch"
                  >
                    Sign Up!
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{" "}
                  <button
                    onClick={() => setSignState("Log In")}
                    type="button"
                    className="register__form-switch"
                  >
                    Log in!
                  </button>{" "}
                </span>
              )}
            </form>
          </div>
        </div>
      ) : (
        <div className="already-logged-in">
          <div className="container">
            <div className="row already-logged__row">
              <h1>{`You're logged in, ${user?.displayName}!`}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
