import React, { useContext } from "react";
import { Context } from "../Context/Context";

const Wishlist = () => {
  const {
    state: { cart },
    removeFromList,
  } = useContext(Context);

  return (
    <>
      {cart.length ? (
        <>
          {" "}
          <div>
            <div className="uk-background-secondary">
              <div className="uk-container uk-container-center">
                <div
                  className="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-5@xl uk-grid-match js-filter uk-margin-top"
                  data-uk-grid="masonry: true"
                  data-uk-sortable="handle: .drag-icon"
                >
                  {cart.map(({ title, image, id, crew, imDbRating }, index) => {
                    return (
                      <>
                        <div
                          className="nature-card uk-animation-toggle"
                          tabindex="0"
                          data-tags="a beautiful landscape - nature outdoor"
                        >
                          <div className="uk-card uk-card-small uk-card-default uk-animation-scale-up">
                            <div className="uk-card-header">
                              <div
                                className="uk-grid uk-grid-small uk-text-small"
                                data-uk-grid
                              >
                                <div className="uk-width-expand">
                                  <span className="cat-txt">Rank : {}</span>
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
                                  src={image}
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
                                {title}
                              </h6>
                              <p className="uk-text-small uk-text-muted">
                                {crew}
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
                                    onClick={() => removeFromList(index)}
                                  >
                                    Remove
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
          </div>{" "}
        </>
      ) : (
        <div className="uk-flex uk-flex-center">
          {" "}
          <img src="https://2.bp.blogspot.com/-QfSOClZc8r0/XNr6srFlzjI/AAAAAAAAGlA/lzs505eFFiEdyAytzKkMabdUTihKywcqwCLcBGAs/s1600/EXAM360%2B-%2BNo%2BWishlist.png" />{" "}
        </div>
      )}
    </>
  );
};

export default Wishlist;
