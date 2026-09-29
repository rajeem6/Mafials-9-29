import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header.jsx";
import Intro from "../components/Intro.jsx";
import AboutFeatures from "../components/AboutFeatures.jsx";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <Header />
      <Intro />
      <AboutFeatures />
    </>
  );
};

export default Home;
