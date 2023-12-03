import React from "react";
import "./projectItem.scss";

const ProjectItem = ({ project }) => {
  return (
    <section className=" row">
      {project.map((projectItem) => {
        const { id, title, img, category, codeLink, webLink } = projectItem;
        return (
          <div className=" col-md-6  col-sm-12 col-lg-4">
            <div className="img-box">
              <img src={img} alt={title} className="img-fluid" />
              <div className="img-box__hiden text-center ">
                <h2 className="fw-bold">{title}</h2>
                <h2>{category}</h2>
                <a href={codeLink} target="_blank">
                  <button className="btn text-center" type="button">
                    <span className="m-1">
                      <i className="fa fa-code "></i>
                    </span>
                  </button>
                </a>
                <a href={webLink} target="_blank">
                  <button className="btn" type="button">
                    <span className="m-1">
                      <i className="fa fa-eye"></i>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectItem;
