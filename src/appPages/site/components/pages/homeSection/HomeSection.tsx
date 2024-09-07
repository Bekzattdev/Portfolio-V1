import React from "react";
import scss from "./HomeSection.module.scss";

const HomeSection = () => {
  return (
    <section className={scss["mainMe"]}>
      <div className={scss.container}>
        <h1 className={scss.title}>Elkhan Sharshenbekov</h1>
        <p className={scss.subtitle}>I am a former sysadmin</p>
      </div>
    </section>
  );
};

export default HomeSection;
