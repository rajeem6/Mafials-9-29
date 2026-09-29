import React from "react";

const Header = () => {
  return (
    <header className="home__header">
      <div className="container">
        <div className="row header__row">
            <span className="header__pretitle">
                Slide on in
                <span className="header__pretitle-xtra">...</span>
            </span>
            <h1 className="header__title">Mafials</h1>
            <span className="header__subtitle">
                At your service!
            </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
