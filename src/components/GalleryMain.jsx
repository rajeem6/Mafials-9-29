import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MainCard from "../ui/mainCard";
import MainCardSkeleton from "../ui/mainCardSkeleton";
import { faSpaghettiMonsterFlying } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../Context/AppContext";

const GalleryMain = () => {
  const [sort, setSort] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const {
    catData,
    setCatData,
    setLoading,
    loading,
    setDisplayedCats,
    displayedCats,
    fetchCatData,
  } = useContext(AppContext);

  function searchAnimal(event) {
    if (event.key === "Enter" && searchInput === "") {
      setLoading(true);
      setDisplayedCats(catData);
      setSort("");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else if (event.key === "Enter") {
      setLoading(true);
      const result = catData.filter((card) =>
        card.name.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setDisplayedCats(result);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  function sortAnimal(sort) {
    setLoading(true);
    const sorted = catData.filter((card) => card.origin === sort);
    setDisplayedCats(sorted);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <main className="gallery-Main">
        <div className="container">
          <div className="row gallery-Main__row">
            <div className="gallery-Main__controls">
              <input
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                onKeyUp={(event) => searchAnimal(event)}
                type="text"
                placeholder="'Abyssinian, Mau, Bombay?'"
                className="gallery-Main__search"
              />
              <span className="gallery-Main__span-1">
                "Come for the animals. Stay for the Mafials"
              </span>
              <select
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value);
                  sortAnimal(event.target.value);
                }}
                className="gallery-Main__sort"
              >
                <option
                  value={""}
                  disabled
                  className="gallery-Main__sort__option"
                >
                  Sort
                </option>
                {loading ? (
                  <></>
                ) : (
                  [...new Set(catData.map((card) => card.origin))].map(
                    (option) => <option key={option}>{option}</option>,
                  )
                )}
              </select>
            </div>
            <div className="gallery-Main__cards__list">
              {!loading
                ? displayedCats.slice(0, 60).map((card) => {
                    if (!card.image?.url) {
                      return null;
                    }
                    return (
                      <MainCard
                        id={card.id}
                        key={card.id}
                        catData={catData}
                        breed={card.breed_group}
                        name={card.name}
                        img={card.image?.url}
                        origin={card.origin}
                        weight={card.weight.imperial}
                        displayedCats={displayedCats}
                      />
                    );
                  })
                : new Array(39)
                    .fill(0)
                    .map((_, index) => <MainCardSkeleton key={index} />)}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default GalleryMain;
