import React, { useContext } from "react";
import "./Slider.css";
import HuluGrid from "../Home/HuluGrid";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";

const Slider = () => {
  const {
    state: { movies, webSeries, isAPILoaded },
    navi,
    trailerUpdate,
  } = useContext(Context);

  return (
    <>
      {!isAPILoaded ? (
        <img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" />
      ) : (
        <div className="x " uk-slider="autoplay:true;">
          <h1 className="uk-heading-line uk-text-center">
            <span>Top Rated Movies</span>
          </h1>
          <div
            className="uk-position-relative uk-visible-toggle uk-light "
            tabindex="-1"
          >
            <div className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-light ">
              {movies.map((item, index) => (
                <li className="uk-transition-toggle " tabindex="0">
                  <img src={item.image} img-changes />
                  <div className="uk-position-top-right">
                    <span
                      className="uk-label"
                      style={{ backgroundColor: "yellow" }}
                    >
                      {item.imDbRating}
                    </span>
                  </div>
                  <div className="uk-position-center uk-panel">
                    <h1 className="uk-transition-slide-bottom-small"></h1>
                  </div>
                  <div className="uk-overlay uk-overlay-primary uk-position-top uk-text-center uk-transition-slide-bottom ">
                    <h3 className="uk-margin-remove">{item.title}</h3>
                    <p className="uk-margin-remove">{item.crew}</p>
                    <Link to={`/ItemPage/${item.title}`}>
                      <button
                        className="uk-button uk-button-default"
                        onClick={(e) => navi(item.id)}
                      >
                        Click me!
                      </button>
                    </Link>
                  </div>{" "}
                </li>
              ))}
            </div>
            <div className="uk-visible@s">
              <button
                className="uk-position-center-left-out uk-position-small"
                href="#"
                uk-slidenav-previous
                uk-slider-item="previous"
              ></button>
              <button
                className="uk-position-center-right-out uk-position-small"
                href="#"
                uk-slidenav-next
                uk-slider-item="next"
              ></button>
            </div>
          </div>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      )}

      <h1 className="uk-heading-line uk-text-center ">
        <span>Our Services</span>
      </h1>

      <HuluGrid />

      <h1 className="uk-heading-line uk-text-center ">
        <span>Top Rated Series</span>
      </h1>

      {!isAPILoaded ? (
        <img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" />
      ) : (
        <div className="x" uk-slider="autoplay:true;">
          <div
            className="uk-position-relative uk-visible-toggle uk-light "
            tabindex="-1"
          >
            <div className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-light ">
              {webSeries.map((item, index) => (
                <li className="uk-transition-toggle " tabindex="0">
                  <img src={item.image} img-changes />
                  <div className="uk-position-center uk-panel">
                    <h1 className="uk-transition-slide-bottom-small"></h1>
                  </div>
                  <div className="uk-overlay uk-overlay-primary uk-position-top uk-text-center uk-transition-slide-bottom ">
                    <h3 className="uk-margin-remove">{item.title}</h3>
                    <p className="uk-margin-remove">{item.crew}</p>
                  </div>{" "}
                </li>
              ))}
            </div>
            <div className="uk-visible@s">
              <a
                className="uk-position-center-left-out uk-position-small"
                href="#"
                uk-slidenav-previous
                uk-slider-item="previous"
              ></a>
              <a
                className="uk-position-center-right-out uk-position-small"
                href="#"
                uk-slidenav-next
                uk-slider-item="next"
              ></a>
            </div>
          </div>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      )}
    </>
  );
};

export default Slider;
