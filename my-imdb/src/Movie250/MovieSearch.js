import React,{useState, useContext} from 'react';
import {Context} from '../Context/Context'

const MovieSearch=()=> {
    const {addToCart,key}=useContext(Context);
    const [Search,setSearch]=useState('Inception');
    let [movie,setMovie]=useState([]);
   const [string,setString]=useState('SearchMovie');
    const handleSearch=(e)=>
    {
     
  getMovieDetails();
    }
    const getMovieDetails = async () => {
       console.log(string);
        const response = await fetch(
          `https://imdb-api.com/en/API/${string}/${key}/${Search}`);
        const json = await response.json();
        console.log(json);
        const { results } = json;
        setMovie((movie = [...results]));
        console.log(movie)
    }

    const x=()=> {
        // Get all the child elements inside the DIV.
        var cont = document.getElementById('birds').children;  

        for (var i = 0; i < cont.length; i++) {
            // Check if the element is a checkbox.
           
            if (cont[i].tagName == 'INPUT' && cont[i].type == 'radio') {
                // Finally, check if the checkbox is checked.
                if (cont[i].checked) {
                   
                  //  let SearchString=cont[i].value;
                  alert(cont[i].value);
                     setString(cont[i].value);
                     console.log(string);


                    
                }
            }
        }

    }

    return (
        <div className="">

            
            <nav class="uk-navbar-container "  uk-navbar>
            <div class="uk-navbar-left uk-margin-xlarge-left uk-flex uk-flex-center">

<div class="uk-navbar-item ">
    <div class="uk-search uk-search-navbar">
        
        <form class="uk-search uk-search-default">
<span uk-search-icon></span>
<input class="uk-search-input" type="text" name ="Search" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
</form>
    <button class="uk-button uk-button-primary" onClick={(e)=>handleSearch(e)}>Search</button>
  
    </div>
</div>

</div>
<div class="uk-navbar-left uk-flex uk-flex-center">
            <div id="birds" className="uk-container ">
               
        <input type="radio" class="uk-radio  " id="brd1" value="SearchMovie" name="birds" onClick={()=>x()}  />
        <label for="brd1">SearchMovie</label>
        <br />
        
        <input type="radio" class="uk-radio " id="brd2" value="SearchSeries" name="birds"onClick={()=>x()}  />
        <label for="brd2">SearchSeries</label>
        <br />
        
        <input type="radio" class="uk-radio" id="brd3" value="SearchName"  name="birds" onClick={()=>x()}  />
        <label for="brd3">Search Name</label>
        </div>
    </div>
   
</nav>





    

      

       




{(movie.length<1)?(<div className="uk-flex uk-flex-center"> <img src="https://2.bp.blogspot.com/-QfSOClZc8r0/XNr6srFlzjI/AAAAAAAAGlA/lzs505eFFiEdyAytzKkMabdUTihKywcqwCLcBGAs/s1600/EXAM360%2B-%2BNo%2BWishlist.png"/> </div>):(<> 


   
    <div class="uk-background-secondary">
       <div class="uk-container uk-container-center">
     <div class="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-5@xl uk-grid-match js-filter uk-margin-top" data-uk-grid="masonry: true" data-uk-sortable="handle: .drag-icon">
{movie.map((item)=>
{
return(
    <div class="nature-card uk-animation-toggle" tabindex="0" data-tags="a beautiful landscape - nature outdoor">
    <div class="uk-card uk-card-small uk-card-default uk-animation-scale-up">
        <div class="uk-card-header">
            <div class="uk-grid uk-grid-small uk-text-small" data-uk-grid>
                <div class="uk-width-expand">
<span class="cat-txt">Rank : {}</span>
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
)
}




)}

</div>
</div>
</div>



</>)}



   
        </div>
    )
}

export default MovieSearch
