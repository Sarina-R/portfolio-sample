import React from "react";
import "./_faq.scss";
// import "../../_index.scss";
const Faq = () => {
  return (
    <section id="faq" className="faq comp mb-5">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold text-uppercase">faq</h1>
          <div className="heading-line"></div>
          <p className="mt-2">
            frequently asked questions, get knowledge befere hand
          </p>
        </div>
      </div>
      <div
        className="accordion accordion-flush container mt-2"
        id="accordionFlushExample"
      >
        <div className="accordion-item accordion-flush">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What are the main features?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item accordion-flush's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item accordion-flush">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              do i have to pay again after trial
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the second item accordion-flush's accordion body. Let's imagine
              this being filled with some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item accordion-flush">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              How can I get started after trial?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item accordion-flush's accordion body. Nothing more exciting
              happening here in terms of content, but just filling up the space
              to make it look, at least at first glance, a bit more
              representative of how this would look in a real-world application.
            </div>
          </div>
        </div>
        <div className="accordion-item accordion-flush">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Can I be refunded if am not satisfied?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item accordion-flush's accordion body. Nothing more exciting
              happening here in terms of content, but just filling up the space
              to make it look, at least at first glance, a bit more
              representative of how this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
