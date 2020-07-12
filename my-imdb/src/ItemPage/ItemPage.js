import React, { useContext } from "react";
import "./ItemPage.css";
import { Context } from "../Context/Context";

const ItemPage = () => {
  const {
    state: { movie },
    trailerUpdate,
    link,
    fullCastDetails,
    similar,
    addToCart,
  } = useContext(Context);

  return (
    <div>
      <div className="divStyling">
        {/* Poster Section */}
        <div className="uk-flex uk-flex-center">
          <div className="uk-inline-clip uk-transition-toggle" tabindex="0">
            <img
              src={movie.image}
              className="uk-transition-scale-up uk-transition-opaque"
              alt=""
            />
          </div>
        </div>

        {/* Cast Section */}
        <section className="uk-section uk-section-large uk-section-secondary">
          <div className="uk-container uk-container-small uk-text-center">
            <h1>{movie.title}</h1>
            <p className="uk-text-large">
              Please click on the below toggle buttons for information.
            </p>
            <div data-uk-margin>
              <button
                className="uk-button uk-button-default"
                onClick={(e) => trailerUpdate()}
                type="button"
                uk-toggle="target: #toggle-animation-multiple; animation:  uk-animation-slide-left, uk-animation-slide-bottom"
              >
                Trailer
              </button>
              <button
                className="uk-button uk-button-default"
                onClick={(e) => fullCastDetails()}
                type="button"
                uk-toggle="target: #toggle-animation-multiple1; animation:  uk-animation-slide-left, uk-animation-slide-bottom"
              >
                You may Like
              </button>
            </div>
          </div>
        </section>

        {/* Modals */}

        {/* Trailer Section */}

        <div className="TrailerSection ">
          <div
            id="toggle-animation-multiple"
            className="uk-card uk-card-default uk-card-body uk-margin-small"
            hidden
          >
            <h1 className="uk-heading-line uk-text-center ">
              <span>Trailer</span>
            </h1>

            <div className="uk-flex uk-flex-center">
              <iframe
                width="100%"
                height="700px"
                src={`https://www.youtube.com/embed/${link.videoId}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Full Cast Details */}

        <div
          id="toggle-animation-multiple1"
          style={{ backgroundColor: "#f0ece3" }}
          className="uk-card uk-card-default uk-card-body uk-margin-small"
          hidden
        >
          Full Cast Details
          <div>
            <div className="uk-background-secondary">
              <h1 className="uk-heading-line uk-text-center ">
                <span>Recommended</span>
              </h1>
              <div className="uk-container uk-container-center">
                <div
                  className="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-5@xl uk-grid-match js-filter uk-margin-top"
                  data-uk-grid="masonry: true"
                  data-uk-sortable="handle: .drag-icon"
                >
                  {/* Card code similar */}
                  {similar.map((item, index) => {
                    return (
                      <>
                        <div
                          className="nature-card uk-animation-toggle"
                          tabindex="0"
                          data-tags="a beautiful landscape - nature outdoor"
                        >
                          <div className="uk-card uk-card-small uk-card-default uk-animation-scale-down">
                            <div className="uk-card-header">
                              <div
                                className="uk-grid uk-grid-small uk-text-small"
                                data-uk-grid
                              >
                                <div className="uk-width-expand">
                                  <span className="cat-txt">
                                    Imdb : {item.imDbRating}
                                  </span>
                                </div>
                                <div className="uk-width-auto uk-text-right uk-text-muted">
                                  <span data-uk-icon="icon:clock; ratio: 0.8"></span>{" "}
                                  {}
                                </div>
                              </div>
                            </div>
                            <div className="uk-card-media">
                              <div
                                className="uk-inline-clip uk-transition-toggle"
                                tabindex="0"
                              >
                                <img
                                  src={item.image}
                                  width="400"
                                  height="300"
                                  alt=""
                                />
                                <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
                                  <span data-uk-icon="icon:heart; ratio: 0.8"></span>{" "}
                                  {}{" "}
                                  <span data-uk-icon="icon:comment; ratio: 0.8"></span>{" "}
                                  {}
                                </div>
                              </div>
                            </div>
                            <div className="uk-card-body">
                              <h6 className="uk-margin-small-bottom uk-margin-remove-adjacent uk-text-bold">
                                {item.title}
                              </h6>
                              <p className="uk-text-small uk-text-muted">
                                {item.crew}
                              </p>
                            </div>
                            <div className="uk-card-footer">
                              <div
                                className="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle"
                                data-uk-grid
                              >
                                <div className="uk-width-expand uk-text-small">
                                  <button
                                    className="uk-button uk-button-primary uk-button-small"
                                    onClick={() => addToCart(item)}
                                  >
                                    Favorite
                                  </button>
                                </div>
                                <div className="uk-width-auto uk-text-right">
                                  <a
                                    href="#"
                                    data-uk-tooltip="title: Twitter"
                                    className="uk-icon-link"
                                    data-uk-icon="icon:twitter; ratio: 0.8"
                                  ></a>
                                  <a
                                    href="#"
                                    data-uk-tooltip="title: Instagram"
                                    className="uk-icon-link"
                                    data-uk-icon="icon:instagram; ratio: 0.8"
                                  ></a>
                                  <a
                                    href="#"
                                    data-uk-tooltip="title: Behance"
                                    className="uk-icon-link"
                                    data-uk-icon="icon:behance; ratio: 0.8"
                                  ></a>
                                  <a
                                    href="#"
                                    data-uk-tooltip="title: Pinterest"
                                    className="uk-icon-link"
                                    data-uk-icon="icon:pinterest; ratio: 0.8"
                                  ></a>
                                </div>
                                <div className="uk-width-auto uk-text-right">
                                  <a
                                    data-uk-tooltip="title: Drag this card"
                                    href="#"
                                    className="uk-icon-link drag-icon"
                                    data-uk-icon="icon:move; ratio: 1"
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Section */}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
