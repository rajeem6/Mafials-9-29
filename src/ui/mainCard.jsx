import { faPaw, faUsers, faWeight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../assets/cat-img.jpg";
import { Link } from "react-router-dom";

const MainCard = ({ id, breed, name, img, origin, weight }) => {
  return (
    <>
      <div className="card mainCard">
        <div className="card-img__wrapper">
          <img src={img} alt="" className="card-img" />
        </div>
        <div className="card-info">
          <div className="card-info-top">
            <span className="type">{breed}</span>
            <span className="rating">{origin}</span>
          </div>
          <div className="card-info-bottom">
            <h4 className="card-info-bottom-name">{name}</h4>
            <div className="card-info-xtra">
              <p>
                <FontAwesomeIcon className="card-info-icon" icon={faPaw} />
                Class: Mafial
              </p>
              <p>
                <FontAwesomeIcon className="card-info-icon" icon={faWeight} />
                Weight: {weight} lbs
              </p>
            </div>
            <Link to={`/card/${id}`}>
              <button className="card-info-btn">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
