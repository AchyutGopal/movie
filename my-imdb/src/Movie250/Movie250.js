import React, { useState, useEffect, useContext } from "react";
import "./Movies250.css";
import {Context} from "../Context/Context"
import {Link} from "react-router-dom";

const Movie250 = () => {
	const {state:{cart},addToCart,naviM}=useContext(Context);
  
  // Way to Fetch Details Using async and await.
  let [movie250, setMovie250] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://jsonblob.com/api/964ac654-b228-11ea-a473-d7f4cca9f47e"
    );
    const json = await response.json();
    console.log(json);
    const { items } = json;
    setMovie250((movie250 = [...items]));
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movie250);


  return (
	
    <div class="uk-background-secondary">
       <div class="uk-container uk-container-center">
     <div class="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-5@xl uk-grid-match js-filter uk-margin-top" data-uk-grid="masonry: true" data-uk-sortable="handle: .drag-icon">
       {console.log(cart)}
	    {movie250.map((item, index) => {
          return (
            <>
              {/* Card Design */}

              <div class="nature-card uk-animation-toggle" tabindex="0" data-tags="a beautiful landscape - nature outdoor">
						<div class="uk-card uk-card-small uk-card-default uk-animation-scale-up">
							<div class="uk-card-header">
								<div class="uk-grid uk-grid-small uk-text-small" data-uk-grid>
									<div class="uk-width-expand">
          <span class="cat-txt">Rank : {item.rank}</span>
									</div>
									<div class="uk-width-auto uk-text-right uk-text-muted">
										<span data-uk-icon="icon:clock; ratio: 0.8"></span> {item.year}
									</div>
								</div>
							</div>
							<div class="uk-card-media">
								<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
									<img src={item.image} width="400" height="300" alt=""/>
									<div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
										<span data-uk-icon="icon:heart; ratio: 0.8"></span> {item.imDbRating} <span data-uk-icon="icon:comment; ratio: 0.8"></span> {item.imDbRatingCount}
									</div>
								</div>
								
							</div>
							<div class="uk-card-body">
          <h6 class="uk-margin-small-bottom uk-margin-remove-adjacent uk-text-bold">{item.title}</h6>
          <p class="uk-text-small uk-text-muted">{item.crew}</p>
							</div>
							<div class="uk-card-footer">
								<div class="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle" data-uk-grid>
									<div class="uk-width-expand uk-text-small">
                  <button class="uk-button uk-button-primary uk-button-small" onClick={()=>addToCart(item)}>WatchList</button>
				  
									</div>
									<div class="uk-width-auto uk-text-right">
									<Link to={`/ItemPage/${item.title}`}>
                      <button class="uk-button uk-button-default uk-button-small" onClick={(e)=>naviM(item.id)}>
                  Page
                      </button>
                    </Link>
									</div>
									<div class="uk-width-auto uk-text-right">
										<a data-uk-tooltip="title: Drag this card" href="#" class="uk-icon-link drag-icon" data-uk-icon="icon:move; ratio: 1"></a>
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
  );
};

export default Movie250;
