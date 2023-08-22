import React from "react";
import Banner from "./Banner";
import Criteria from "./Criteria";
import Works from "./Works";
import Reviews from "./Reviews";
import TrustedBy from "./TrustedBy";
import TheBest from "./TheBest";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Criteria />
      <TrustedBy></TrustedBy>
      <TheBest></TheBest>
      <Works />
      <Reviews />
    </>
  );
};

export default HomePage;