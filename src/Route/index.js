import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "../Container/Home";
import AboutContainer from "../Container/About";
import MoviesContainer from "../Container/Movies";
import SearchContainer from "../Container/Search";
import TvSeriesContainer from "../Container/TVSeries";
import DetailsContainer from "../Container/Details";
import ContactContainer from "../Container/Contact";

import FooterComponents from "../Components/Footer";
import HeaderComponents from "../Components/Header";

const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
      <HeaderComponents />
        <Routes>

          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/movies" element={<MoviesContainer />} />
          <Route path="/search" element={<SearchContainer />} />
          <Route path="/series" element={<TvSeriesContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="/details/:movieid/:mediatype" element={<DetailsContainer />} />
          <Route path="/" element={<HomeContainer />} />


        </Routes>
        <FooterComponents />
      </BrowserRouter>
    </>
  );
};
export default RouterComponent;
