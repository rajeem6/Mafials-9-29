import React from "react";

const SelectedCardPageSkeleton = () => {
  return (
    <>
      <div className="selected-Card-Main">
        <div className="container">
          <div className="row selected-card-main-row">
            <div className="selected-card-content card-content-skelly">
              <div className="selected-card-img-skeleton skeleton"></div>

              <div className="selected-card-content-info">
                <div className="selected-card-name skelly-name skeleton"></div>
                <div className="selected-card-description-wrapper">
                  <div className="skelly-desc skeleton"></div>
                  <div className="skelly-desc skeleton"></div>
                  <div className="skelly-desc skelly-desc-1 skeleton"></div>
                </div>
                <div className="selected-card-add-skelly skeleton"></div>
              </div>
            </div>
            <div className="selected-card-information">
              <div className="selected-card-detail-skelly p-skelly-1 skeleton"></div>
              <div className="selected-card-detail-skelly p-skelly-2 skeleton"></div>
              <div className="selected-card-specificity">
                <div className="selected-card-spec-skelly skeleton"></div>
                <div className="selected-card-spec-skelly skeleton"></div>
                <div className="selected-card-spec-skelly skeleton"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedCardPageSkeleton;
