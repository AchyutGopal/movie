import React from "react";
import "./Home.css";
import Slider from "../Slider/Slider";
const Home = () => {
  return (
    <div className="style">
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slider="autoplay:true;autoplay-interval:1200"
      >
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
          <li>
            <div className="uk-panel">
              <img
                src="https://wallpapersite.com/images/pages/pic_h/19236.jpg"
                alt=""
              />
              <div className="uk-position-center uk-panel"></div>
            </div>
          </li>
          <li>
            <div className="uk-panel">
              <img
                src="https://wallpapersite.com/images/pages/ico_h/19521.jpg"
                alt=""
              />
              <div className="uk-position-center uk-panel"></div>
            </div>
          </li>
          <li>
            <div className="uk-panel">
              <img
                src="https://wallpapersite.com/images/pages/pic_h/18925.jpg"
                alt=""
              />
              <div className="uk-position-center uk-panel"></div>
            </div>
          </li>
          <li>
            <div className="uk-panel">
              <img
                src="https://wallpapersite.com/images/pages/pic_h/18215.jpg"
                alt=""
              />
              <div className="uk-position-center uk-panel"></div>
            </div>
          </li>
          <li>
            <div className="uk-panel">
              <img
                src="https://wallpapersite.com/images/pages/pic_h/19361.jpg"
                alt=""
              />
              <div className="uk-position-center uk-panel"></div>
            </div>
          </li>
        </ul>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
      </div>

      <Slider />

      <div>
        <a
          href="#"
          uk-totop
          uk-icon="icon: chevron-up; ratio: 2"
          uk-sticky="bottom: true"
        ></a>
      </div>
    </div>
  );
};

export default Home;
