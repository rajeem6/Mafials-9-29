import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Gallery from "./pages/Gallery";
import { AppContext } from "./Context/AppContext";
import Favorites from "./pages/Favorites";
import SelectedCard from "./pages/SelectedCard";
import axios from "axios";
import Register from "./pages/Register.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./Firebase/firebase.js";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function App() {
  const [user, setUser] = useState();
  const [catData, setCatData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayedCats, setDisplayedCats] = useState(catData);
  const [removeFav, setRemoveFav] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [authLoading, setAuthLoading] = useState(true);

  async function fetchCatData() {
    setLoading(true);
    try {
      const { data } = await axios.get("https://api.thecatapi.com/v1/breeds", {
        headers: {
          "x-api-key":
            "live_pyrw0NdNGs9gtNbPvYqxFrhMBs0dfahVGk1kzLOIPoIeexE1o15oxpt8N7dq4JzH",
        },
      });
      console.log(data);
      setCatData(data);
      setDisplayedCats(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error.response);
      alert(error.response);
    }
  }

  async function addToFavorites(selectedCat) {
    console.log("favorites:", favorites);
    console.log("selectedCat:", selectedCat);
    const result = favorites.some((cat) => cat.id === selectedCat.id);
    if (!result) {
      setFavorites((prevFavorites) => [...prevFavorites, selectedCat]);
      setTimeout(() => {
        console.log(favorites);
      }, 500);
    }
    addSelectedCat(selectedCat.id);
  }

  async function addSelectedCat(id) {
    const data = await addDoc(collection(db, "users", user.uid, "cat"), {
      catId: id,
    });
  }

  async function removeFromFavorites(selectedCat) {
    console.log("favorites before remove:", favorites);
    const updatedCats = favorites.filter((cat) => cat.id !== selectedCat.id);
    setFavorites(updatedCats);
    const selectedMafial = await query(
      collection(db, "users", user.uid, "cat"),
      where("catId", "==", selectedCat.id),
    );
    const data = await getDocs(selectedMafial);
    const cats = data.docs[0].id;
    await deleteCat(cats);
  }

  async function deleteCat(id) {
    const selectedMafial = doc(db, "users", user.uid, "cat", id);
    await deleteDoc(selectedMafial);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("user authorized");
      } else {
        setUser(null);
        console.log("user unauthorized");
      }
    });
    setAuthLoading(false);
  }, []);

  useEffect(() => {
    if (user && catData.length >= 1) {
      getFavorites(user.uid);
    }
  }, [user, catData]);

  async function getFavorites(uid) {
    const dataRef = await getDocs(collection(db, "users", uid, "cat"));
    console.log(dataRef.docs.map((doc) => doc.data()));
    const catDocData = dataRef.docs.map((doc) => {
      return doc.data().catId;
    });
    console.log("catDocData:", catDocData);
    const result = catDocData.map((catId) => {
      return catData.find((cat) => cat.id === catId);
    });
    setFavorites((prevFavorites) => [...prevFavorites, ...result]);
  }

  useEffect(() => {
    if (!authLoading && !user && location.pathname === "/favorites") {
      navigate("/");
    }
  }, [user, location.pathname]);

  useEffect(() => {
    fetchCatData();
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          user,
          setUser,
          fetchCatData,
          catData,
          setCatData,
          displayedCats,
          setDisplayedCats,
          loading,
          setLoading,
          removeFav,
          setRemoveFav,
          addToFavorites,
          favorites,
          setFavorites,
          removeFromFavorites,
          navigate,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/card/:id" element={<SelectedCard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
