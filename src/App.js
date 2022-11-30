import React, { useRef, useEffect } from "react";
import "./App.scss";
import { gsap, Power3 } from "gsap";

// Assets
import arrow from "./images/arrow-right.svg";
import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = gsap.timeline();

  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    //  Content Vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    // Remove initial flash
    gsap.to(app, { duration: 0, css: { visibility: "visible" } });
    // Images animation
    tl.from(girlImage, { duration: 1.2, y: 1280, ease: Power3.easeOut })
      .from(girlImage.firstElementChild, {
        duration: 2,
        scale: 1.6,
        ease: Power3.easeOut,
        delay: 0.2,
      })
      .from(boyImage, {
        duration: 1.2,
        y: 1280,
        ease: Power3.easeOut,
        delay: 0.2,
      })
      .from(boyImage.firstElementChild, {
        duration: 2,
        scale: 1.6,
        ease: Power3.easeOut,
        delay: 0.2,
      });

    //  Content animation
  }, [tl]);

  return (
    <div className="hero" ref={(el) => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={(el) => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviours.</div>
                </div>
              </h1>
              <p>
                Better treats cardiometabolic diseases to transform lives and
                reduce healthcare utilisation through the use of digital
                therapeutics.
              </p>
              <div className="button-row">
                <button className="explore-button">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow icon" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={(el) => (images = el)}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
