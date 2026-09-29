import React, { useEffect } from "react";
import GalleryNav from "../components/GalleryNav";
import GalleryHeader from "../components/GalleryHeader";
import GalleryMain from "../components/GalleryMain";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <GalleryNav />
      <GalleryHeader />
      <GalleryMain />
    </>
  );
};

export default Gallery;
