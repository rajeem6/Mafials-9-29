import React from "react";
import card_img from "../assets/cat-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faWeight } from "@fortawesome/free-solid-svg-icons";

const IntroCard = () => {
  return (
    <div className="card">
      <div className="card-img__wrapper">
        <img src={card_img} alt="" className="card-img" />
      </div>
      <div className="card-info">
        <div className="card-info-top">
          <span className="type">Cat</span>
          <span className="rating">9.9</span>
        </div>
        <div className="card-info-bottom">
          <h4 className="card-info-bottom-name">Bombay Black cat</h4>
          <div className="card-info-xtra">
            <p>
              <FontAwesomeIcon className="card-info-icon" icon={faUsers} />
              Family Friendly
            </p>
            <p>
              <FontAwesomeIcon className="card-info-icon" icon={faWeight} />
              Size: Medium
            </p>
          </div>
          <button className="card-info-btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
