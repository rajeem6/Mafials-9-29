import React, { useEffect, useRef } from "react";
import animal_card from "../assets/cat-img.jpg";
import Card from "../ui/card";
import IntroCard from "../ui/card.jsx";

const Intro = () => {
  const introRef = useRef();

  useEffect(() => {
    console.log(introRef);
    // using contructor
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          introRef.current.classList.add("animateIntro");
        } else {
          introRef.current.classList.remove("animateIntro");
        }
        console.log(entries);
      },
      {
        threshold: 0.45,
      },
    );
    observer.observe(introRef.current);
  }, []);

  return (
    <div className="Intro">
      <div className="container">
        <div className="row Intro__row" ref={introRef}>
          <h3>Your next favorite animal is waiting...</h3>
          <div className="Intro__cards__wrapper">
            <div className="Intro__card card-1">
              <IntroCard />
            </div>
            <div className="Intro__card card-2">
              <IntroCard />
            </div>
            <div className="Intro__card card-3">
              <IntroCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
