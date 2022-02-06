import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TopHeadlines from "./TopHeadlines";
import Ara from "./Ara";
import "../css/output.css";
import { Routes, Route } from "react-router-dom";
import Kategori from "./Kategori";
import KategoriList from "./KategoriList";
import Home from "./Home";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="lg:grid lg:grid-cols-12 lg:gap-0 lg:mx-auto xl:mx-32">
        <KategoriList />
        <Routes path="/" element={<Home />}>
          <Route path="/top" element={<TopHeadlines />} />
          <Route path="/ara" element={<Ara />} />
          <Route path="/kategori/:kategori" element={<Kategori />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
