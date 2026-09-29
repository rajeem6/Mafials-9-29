import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import MainCard from "../ui/mainCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const FavoritesMain = () => {
  const {
    catData,
    loading,
    setLoading,
    addToFavorites,
    favorites,
    setFavorites,
  } = useContext(AppContext);

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
        // below is me just using the styles from a div with another classname
        // using the div from the login page
        <div className="already-logged-in">
          <div className="container">
            <div className="row already-logged__row">
              <h1>
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="form-item-loading-spinner"
                />
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <main className="favorites-Main">
          <div className="container">
            {favorites.length >= 1 ? (
              <div className="row favorites-Main__row gallery-Main__cards__list">
                {favorites?.map((fav, index) => (
                  <MainCard
                    id={fav?.id}
                    key={index}
                    catData={catData}
                    breed={fav?.breed_group}
                    name={fav?.name}
                    img={fav?.image?.url}
                    origin={fav?.origin}
                    weight={fav?.weight.imperial}
                  />
                ))}
              </div>
            ) : (
              <h1>Oh no! Mafials still wanted here...</h1>
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default FavoritesMain;
