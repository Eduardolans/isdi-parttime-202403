import { Link, useNavigate } from "react-router-dom";
import Title from "../components/core/Title";

import Button from "../components/core/Button";

import logic from "../logic";
import { useEffect, useState } from "react";

import AdList from "./components/AdList/AdList";

import SearchBox from "./components/SearchBox/SearchBox";

import "./Home.css";
import Header from "./components/Header/Header";
import { CreateAdButton } from "./components/CreateAdButton/CreateAdButton";
function Home() {
  const [ads, setAds] = useState([]);

  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("Home -> useEffect");

    try {
      logic
        .getUserInfo()
        .then((user) => {
          console.log("Home -> setUsername");

          setUser(user);
        })
        .catch((error) => {
          console.error(error);

          alert(error.message + " " + "HELL");
        });
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  }, []);

  const filterdAds = (searchText) => {
    const adsFiltered = ads.filter((ad) => {
      return ad.title.toLowerCase().includes(searchText.toLowerCase());
    });
    setAds(adsFiltered);
  };

  return (
    <>
      <Header user={user} />

      <main className="Home">
        <SearchBox filterdAds={filterdAds} />
        <CreateAdButton />

        <div>
          <AdList ads={ads} setAds={setAds} />
        </div>
      </main>
    </>
  );
}

export default Home;
