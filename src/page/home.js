import React from "react";
import Header from "../components/header.js";
import Carousel from "../components/carousel.js";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}
