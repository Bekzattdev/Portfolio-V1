"use client";
import React, { FC } from "react";
import scss from "./Style.module.scss";
import Image from "next/image";
import bek_movie from "@/assets/projects/bek_movie.png";

import { FormattedMessage } from "react-intl";

interface projectsTypes {
  title: string;
  description: any;
  stack: Array<string>;
  codeLink: string;
  demoLink: string;
  image: any;
}

const ProjectPage: FC = () => {
  const projects: projectsTypes[] = [
    {
      title: "BekMovie",
      description: <FormattedMessage id="page.project.text.bek_movie" />,
      stack: [
        "NextJS",
        "TypeScript",
        "ReduxToolkit",
        "Prisma-ORM",
        "SupaBase",
        "RestAPI",
      ],
      codeLink: "https://github.com/Bekzattdev/BekMovie",
      demoLink: "https://bekmovie.vercel.app/",
      image: bek_movie,
    },
  ];

  return (
    <>
      <div
        id="project"
        className={`${scss.text__z__index} ${scss.project__page}`}
      >
        <div className="container">
          <div className={scss.content}>
            <div className={scss.title}>
              <h1>
                <FormattedMessage id="page.project.title_1" />
              </h1>
              <h2>
                <FormattedMessage id="page.project.title_2" />
              </h2>
            </div>

            {projects.map((project, index) => (
              <div
                className={`${scss.card} ${
                  index % 2 !== 0 ? scss.row__reverse : ""
                }`}
                key={index + 1}
              >
                <div className={scss.pro__text}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={scss.stack}>
                    {project.stack.map((item, index) => (
                      <p key={index + 1}>{item}</p>
                    ))}
                  </div>
                  <div className={scss.links}>
                    <a
                      className={`${scss.code}`}
                      href={project.codeLink}
                      target="_blank"
                    >
                      Code
                      {/* <GithubIcon /> */}
                    </a>
                    <a
                      className={`${scss.demo}`}
                      href={project.demoLink}
                      target="_blank"
                    >
                      Live Demo
                      {/* <ArrowUpRightIcon /> */}
                    </a>
                  </div>
                </div>
                <div className={`${scss.pro__img}`}>
                  <a href={project.demoLink} target="_blank">
                    <Image
                      priority={true}
                      quality={25}
                      loading="eager"
                      src={project.image}
                      alt={"project"}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
