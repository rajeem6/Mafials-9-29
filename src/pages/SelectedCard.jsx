import React, { useEffect } from "react";
import SelectedCardNav from "../components/selectedCardNav";
import SelectedCardMain from "../components/selectedCardMain";

const SelectedCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SelectedCardNav />
      <SelectedCardMain />
    </>
  );
};

export default SelectedCard;
