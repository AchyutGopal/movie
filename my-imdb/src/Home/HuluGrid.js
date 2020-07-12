import React from 'react';
import './HuluGrid.css';
import {Link} from "react-router-dom";

const HuluGrid=()=> {
    return (
        <div>
              <ul class="Categories">
    <li class="Cat Cat--100">
      <Link to="/Search"  class="Cat__link">
        <p class="Cat__type">Search</p>
        <p class="Cat__title">For Movies,WebSeries</p>
        <p class="Cat__show">Information</p>
       
      </Link>
    </li>
    <li class="Cat Cat--50">
      <Link to="/Movies250" class="Cat__link">
        <p class="Cat__type">Top 250</p>
        <p class="Cat__title">Movies</p>
        <p class="Cat__show">All Time</p>
      
      </Link>
    </li>
    <li class="Cat Cat--50">
      <Link to="/WebSeries250" class="Cat__link">
        <p class="Cat__type">Top 250</p>
        <p class="Cat__title">WebSeries</p>
        <p class="Cat__show">All Time</p>
      
      </Link>
    </li>
    <li class="Cat Cat--100">
      <Link to="/Wishlist" class="Cat__link">
        <p class="Cat__type">Your</p>
        <p class="Cat__title">Favorites </p>
        <p class="Cat__show"></p>
       
      </Link>
    </li>
   
  

  </ul>


        </div>
    )
}

export default HuluGrid
