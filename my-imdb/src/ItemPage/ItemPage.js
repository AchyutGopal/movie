import React, { useContext, useEffect } from "react";
import "./ItemPage.css";
import { Context } from "../Context/Context";

const ItemPage = () => {
  const {
    state: { movie },
    trailerUpdate,
    link,
    fullCastDetails,
    similar,addToCart
  } = useContext(Context);


  return (
    <div>
      <div class="divStyling">
        {/* Poster Section */}
        <div class="uk-flex uk-flex-center">
          <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
            <img
              src={movie.image}
              class="uk-transition-scale-up uk-transition-opaque"
              alt=""
            />
          </div>
        </div>

        {/* Cast Section */}
        <section class="uk-section uk-section-large uk-section-secondary">
			<div class="uk-container uk-container-small uk-text-center">
  <h1>{movie.title}</h1>
				<p class="uk-text-large">Please click on the below toggle buttons for information.</p>
				<div data-uk-margin>
          <button class="uk-button uk-button-default" onClick={(e) => trailerUpdate()} type="button" uk-toggle="target: #toggle-animation-multiple; animation:  uk-animation-slide-left, uk-animation-slide-bottom">Trailer</button>
          <button class="uk-button uk-button-default" onClick={(e) => fullCastDetails()} type="button" uk-toggle="target: #toggle-animation-multiple1; animation:  uk-animation-slide-left, uk-animation-slide-bottom">You may Like</button>
				</div>
			</div>
		</section>

    {/* Modals */}



        {/* Trailer Section */}

        <div class="TrailerSection ">
         
         
          
<div id="toggle-animation-multiple" class="uk-card uk-card-default uk-card-body uk-margin-small" hidden>
<h1 class="uk-heading-line uk-text-center ">
            <span>Trailer</span>
          </h1>
  
        
          <div class="uk-flex uk-flex-center">
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


<div id="toggle-animation-multiple1" style={{backgroundColor:"#f0ece3"}} class="uk-card uk-card-default uk-card-body uk-margin-small" hidden>Full Cast Details
  <div>

  <div class="uk-background-secondary">
  <h1 class="uk-heading-line uk-text-center ">
            <span>Recommended</span>
          </h1>
       <div class="uk-container uk-container-center">
     <div class="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-5@xl uk-grid-match js-filter uk-margin-top" data-uk-grid="masonry: true" data-uk-sortable="handle: .drag-icon">
     

{/* Card code similar */}
{similar.map((item,index)=>
{
  return(

    <>

<div class="nature-card uk-animation-toggle" tabindex="0" data-tags="a beautiful landscape - nature outdoor">
    <div class="uk-card uk-card-small uk-card-default uk-animation-scale-down">
        <div class="uk-card-header">
            <div class="uk-grid uk-grid-small uk-text-small" data-uk-grid>
                <div class="uk-width-expand">
<span class="cat-txt">Imdb : {item.imDbRating}</span>
                </div>
                <div class="uk-width-auto uk-text-right uk-text-muted">
                    <span data-uk-icon="icon:clock; ratio: 0.8"></span> {}
                </div>
            </div>
        </div>
        <div class="uk-card-media">
            <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                <img src={item.image} width="400" height="300" alt=""/>
                <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
                    <span data-uk-icon="icon:heart; ratio: 0.8"></span> {} <span data-uk-icon="icon:comment; ratio: 0.8"></span> {}
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
<button class="uk-button uk-button-primary uk-button-small" onClick={()=>addToCart(item)}>Favorite</button>
                </div>
                <div class="uk-width-auto uk-text-right">
                    <a href="#" data-uk-tooltip="title: Twitter" class="uk-icon-link" data-uk-icon="icon:twitter; ratio: 0.8"></a>
                    <a href="#" data-uk-tooltip="title: Instagram" class="uk-icon-link" data-uk-icon="icon:instagram; ratio: 0.8"></a>
                    <a href="#" data-uk-tooltip="title: Behance" class="uk-icon-link" data-uk-icon="icon:behance; ratio: 0.8"></a>
                    <a href="#" data-uk-tooltip="title: Pinterest" class="uk-icon-link" data-uk-icon="icon:pinterest; ratio: 0.8"></a>
                </div>
                <div class="uk-width-auto uk-text-right">
                    <a data-uk-tooltip="title: Drag this card" href="#" class="uk-icon-link drag-icon" data-uk-icon="icon:move; ratio: 1"></a>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
})


}

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
