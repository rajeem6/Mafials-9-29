import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import pic from "../assets/cat-img.jpg";
import { useParams } from "react-router-dom";
import SelectedCardPageSkeleton from "../ui/selectedCardPageSkeleton";

const SelectedCardMain = () => {
  const { user } = useContext(AppContext);
  const { id } = useParams();
  const [favSuccession, setFavSuccession] = useState();
  const {
    catData,
    setLoading,
    loading,
    setDisplayedCats,
    displayedCats,
    fetchCatData,
    removeFav,
    setRemoveFav,
    addToFavorites,
    removeFromFavorites,
    favorites,
  } = useContext(AppContext);
  const selectedCat = catData.find((cat) => cat.id === id);
  console.log("selectedCat:", selectedCat);
  console.log("favorites:", favorites);
  const isFavorite = favorites.some((cat) => cat.id === selectedCat.id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <SelectedCardPageSkeleton />
      ) : (
        <div className="selected-Card-Main">
          <div className="container">
            <div className="row selected-card-main-row">
              <div className="selected-card-content">
                <div className="selected-card-img-wrapper">
                  <img
                    src={selectedCat?.image.url}
                    alt=""
                    className="selected-card-img"
                  />
                </div>
                <div className="selected-card-content-info">
                  <h1 className="selected-card-name">{selectedCat?.name}</h1>
                  <p className="selected-card-description">
                    {selectedCat?.description}
                  </p>
                  {user ? (
                    <button
                      onClick={() => {
                        addToFavorites(selectedCat);
                      }}
                      className={`selected-card-add-btn ${isFavorite && "remove-btn-visible"}`}
                    >
                      Add to favorites
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="select-heart-icon"
                      />
                    </button>
                  ) : (
                    <span className="selected-card-add-fake">
                      [ Login & Add to favs ]
                    </span>
                  )}
                  <button
                    onClick={() => {
                      removeFromFavorites(selectedCat);
                    }}
                    className={`selected-card-remove-btn ${isFavorite && "remove-btn-visible"}`}
                  >
                    Remove Favorite
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="select-heart-icon"
                    />
                  </button>
                </div>
              </div>
              <div className="selected-card-information">
                <p className="selected-card-detail">{selectedCat?.history}</p>
                <p className="selected-card-detail">
                  {selectedCat?.temperament}
                </p>
                <div className="selected-card-specificity">
                  <div className="selected-card-spec">
                    <h1>Height</h1>
                    <span>{`${selectedCat?.height.imperial}(${selectedCat?.height.metric}kg)`}</span>
                  </div>
                  <div className="selected-card-spec">
                    <h1>Weight</h1>
                    <span>{`${selectedCat?.weight.imperial}(${selectedCat?.weight.metric}kg)`}</span>
                  </div>
                  <div className="selected-card-spec">
                    <h1>Life Span</h1>
                    <span>{selectedCat?.life_span}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedCardMain;
