import React, { useState } from "react";
import "./_portfolio.scss";
import project from "./data";
import ProjectItem from "./ProjectItem.jsx";
const allCategories = [
  "all",
  ...new Set(project.map((project) => project.category)),
];

const Portfolio = () => {
  const [projectItem, setProjectItem] = useState(project);

  const filter = (category) => {
    if (category === "all") {
      setProjectItem(project);
      return;
    }
    const newProject = project.filter(
      (project) => project.category === category
    );
    setProjectItem(newProject);
  };

  return (
    <section id="portfolio" className="portfolio container comp mb-5">
      <div className="row text-center">
        <h2 className="display-4 fw-bold">Latest Work</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nam qui
          enim.
        </p>
        <div className="heading-line"></div>
      </div>

      <div className=" text-center col mt-5 mb-3">
        {allCategories.map((category) => (
          <button
            className="btn m-1 text-capitalize"
            key={category}
            onClick={() => filter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className=" container">
        <ProjectItem project={projectItem} />
      </div>
    </section>
  );
};

export default Portfolio;
