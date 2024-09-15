"use client";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import scss from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScroll(window.scrollY >= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "page.header.home", href: "#home" },
    { id: "page.header.about", href: "#about" },
    { id: "page.header.project", href: "#project" },
    { id: "page.header.contact", href: "#contact" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className={scss.header}>
      <div
        className={
          headerScroll
            ? `${scss.headerScroll} ${scss.active}`
            : `${scss.headerScroll}`
        }
      >
        <div className={scss.container}>
          <div className={scss.logo}>BeKa</div>
          <nav className={`${scss.nav} ${isOpen ? scss.open : ""}`}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={scss.navLink}
                onClick={(e) => handleClick(e, link.href)}
              >
                <FormattedMessage id={link.id} />
              </a>
            ))}
            <button className={scss.resumeBtn}>Resume</button>
          </nav>
          <div
            className={scss.burger}
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <span className={scss.burgerLine}></span>
            <span className={scss.burgerLine}></span>
            <span className={scss.burgerLine}></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
