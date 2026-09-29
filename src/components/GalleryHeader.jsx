import React from "react";

const GalleryHeader = () => {
  return (
    <header className="gallery__header">
      <div className="container">
        <div className="row gallery__header__row">
          <h1 className="gallery__header__title">
            They're cute. They're suspicious.{" "}
            <span className="gallery__header-span">They're Mafials.</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default GalleryHeader;
