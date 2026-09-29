import {
  faBook,
  faHeart,
  faMagnifyingGlass,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AboutFeatures = () => {
  const FeaturesRef = useRef();

  useEffect(() => {
    console.log(FeaturesRef);
    // using contructor
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          FeaturesRef.current.classList.add("animateFeats");
        } else {
          FeaturesRef.current.classList.remove("animateFeats");
        }
        console.log(entries);
      },
      {
        threshold: 0.5,
      },
    );
    observer.observe(FeaturesRef.current);
  }, []);
  return (
    <div className="About-Features">
      <div className="container">
        <div className="row About-Features__row" ref={FeaturesRef}>
          <h2>About Mafials</h2>
          <h4>A little wild. A lot to discover.</h4>
          <p>
            Mafials is your little corner of the internet for discovering
            animals, learning something new, and finding the ones you can't stop
            coming back to.
          </p>
          <div className="About-Features__card__wrapper">
            <div className="About-Features__card">
              <div className="About-Feat__icon">
                <FontAwesomeIcon
                  className="search-icon"
                  icon={faMagnifyingGlass}
                />
              </div>
              <h1>Discover</h1>
              <p>"There's always another animal to discover."</p>
            </div>
            <div className="About-Features__card">
              <div className="About-Feat__icon">
                <FontAwesomeIcon className="book-icon" icon={faBook} />
              </div>
              <h1>Learn</h1>
              <p>"Because being curious never goes out of style."</p>
            </div>
            <div className="About-Features__card">
              <div className="About-Feat__icon">
                <FontAwesomeIcon className="heart-icon" icon={faHeart} />
              </div>
              <h1>Favorite</h1>
              <p>"Found your favorite? Keep it close."</p>
            </div>
          </div>

          <h5>
            {" "}
            <FontAwesomeIcon className="paw-icon" icon={faPaw} /> Did you know?
          </h5>
          <span>"Octopuses have three hearts."</span>
          <Link to="/gallery" className="discover-link">
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
