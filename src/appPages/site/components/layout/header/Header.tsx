import React from "react";
import scss from "./Header.module.scss";
const Header = () => {
  return (
    <section>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.logo}>
            <p>BeKa</p>
          </div>
          <div className={scss.nav}>
            <p>Home</p>
            <p>About Me</p>
            <p>Projects</p>
            <p>Contact</p>
            <select>
              <option>EN</option>
              <option>RU</option>
            </select>
            <button>Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
