"use client";
import React from "react";
import HomeSection from "./homeSection/HomeSection";
import { Snowfall } from "react-snowfall";

const HomePage = () => {
  return (
    <>
      <Snowfall
        snowflakeCount={10}
        style={{
          position: "fixed",
        }}
      />
      <HomeSection />
    </>
  );
};

export default HomePage;
