import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import Banner from "./Banner";
import Criteria from "./Criteria";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Criteria />
      <Footer />
    </>
  );
};

export default HomePage;
