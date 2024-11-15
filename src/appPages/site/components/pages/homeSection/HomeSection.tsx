"use client";
import React from "react";
import scss from "./HomeSection.module.scss";
import AboutPage from "../AboutAll/AboutPage";
import HomePage from "../AboutAll/Home";
import ProjectPage from "../AboutAll/ProjectPage";

const HomeSection = () => {
  return (
    <section className={scss["mainMe"]}>
      <div className={scss.container}>
        <HomePage />
        <AboutPage />
        <ProjectPage />
      </div>
    </section>
  );
};

export default HomeSection;
