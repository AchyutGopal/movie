import React, { useEffect, useState, useReducer, useContext } from "react";
import "./Slider.css";
import HuluGrid from "../Home/HuluGrid";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";

const Slider = () => {
  const {state:{movies,webSeries,isAPILoaded},navi,trailerUpdate}=useContext(Context);



  

  return (
  <>

{!isAPILoaded ? (
        <img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" />
      ) : (
        <div class="x " uk-slider="autoplay:true;">
          <h1 class="uk-heading-line uk-text-center">
            <span>Top Rated Movies</span>
          </h1>
          <div
            class="uk-position-relative uk-visible-toggle uk-light "
            tabindex="-1"
          >
            <div class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-light ">
              {movies.map((item, index) => (
                <li class="uk-transition-toggle " tabindex="0">
                  <img src={item.image} img-changes />
                  <div class="uk-position-top-right">
              <span class="uk-label" style={{backgroundColor:"yellow"}} >{item.imDbRating}</span>
              
            </div>
                
                               <div class="uk-position-center uk-panel">
                    <h1 class="uk-transition-slide-bottom-small"></h1>
                  
                  </div>
                  <div class="uk-overlay uk-overlay-primary uk-position-top uk-text-center uk-transition-slide-bottom ">
                    <h3 class="uk-margin-remove">{item.title}</h3>
                    <p class="uk-margin-remove">{item.crew}</p>
                    <Link to={`/ItemPage/${item.title}`}>
                      <button class="uk-button uk-button-default" onClick={(e)=>navi(item.id)
                       }>
                        Click me!
                      </button>
                    </Link>
                  </div>{" "}
                </li>
              ))}
            </div>
            <div class="uk-visible@s">
              <button
                class="uk-position-center-left-out uk-position-small"
                href="#"
                uk-slidenav-previous
                uk-slider-item="previous"
              ></button>
              <button
                class="uk-position-center-right-out uk-position-small"
                href="#"
                uk-slidenav-next
                uk-slider-item="next"
              ></button>
            </div>
          </div>
          <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      )}

      {/* Second Slider Check Here */}

      {/* <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="autoplay:true;">

    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
       {webSeries.map((item,index)=>     <div>
        <div class="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
       )}
    

            
    </ul>

<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div> */}

      <h1 class="uk-heading-line uk-text-center ">
        <span>Our Services</span>
      </h1>

      <HuluGrid />

      <h1 class="uk-heading-line uk-text-center ">
        <span>Top Rated Series</span>
      </h1>

      {!isAPILoaded ? (
        <img src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif" />
      ) : (
        <div class="x" uk-slider="autoplay:true;">
          <div
            class="uk-position-relative uk-visible-toggle uk-light "
            tabindex="-1"
          >
            <div class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-light ">
              {webSeries.map((item, index) => (
                <li class="uk-transition-toggle " tabindex="0">
                  <img src={item.image} img-changes />
                  <div class="uk-position-center uk-panel">
                    <h1 class="uk-transition-slide-bottom-small"></h1>
                  </div>
                  <div class="uk-overlay uk-overlay-primary uk-position-top uk-text-center uk-transition-slide-bottom ">
                    <h3 class="uk-margin-remove">{item.title}</h3>
                    <p class="uk-margin-remove">{item.crew}</p>
                  </div>{" "}
                </li>
              ))}
            </div>
            <div class="uk-visible@s">
              <a
                class="uk-position-center-left-out uk-position-small"
                href="#"
                uk-slidenav-previous
                uk-slider-item="previous"
              ></a>
              <a
                class="uk-position-center-right-out uk-position-small"
                href="#"
                uk-slidenav-next
                uk-slider-item="next"
              ></a>
            </div>
          </div>
          <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      )}

  </>

  );


  
};

export default Slider;
