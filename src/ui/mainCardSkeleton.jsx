import React from "react";

const MainCardSkeleton = () => {
  return (
    <div className="card card-skeleton mainCard">
        <div className="card-img-skeleton skeleton"></div>
      <div className="card-info">
        <div className="card-info-top-skeleton">
          <div className="type type-skeleton skeleton"></div>
          <div className="rating rating-skeleton skeleton"></div>
        </div>
        <div className="card-info-bottom-skeleton">
          <div className="card-info-bottom-name-skeleton skeleton"></div>
          <div className="card-info-xtra">
            <div className="p-skeleton skeleton"></div>
            <div className="p-skeleton skeleton"></div>
          </div>
          <div className="card-info-btn card-info-btn-skeleton skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default MainCardSkeleton;
