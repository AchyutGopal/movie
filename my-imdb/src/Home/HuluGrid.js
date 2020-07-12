import React from "react";
import "./HuluGrid.css";
import { Link } from "react-router-dom";

const HuluGrid = () => {
  return (
    <div>
      <ul className="Categories">
        <li className="Cat Cat--100">
          <Link to="/Search" className="Cat__link">
            <p className="Cat__type">Search</p>
            <p className="Cat__title">For Movies,WebSeries</p>
            <p className="Cat__show">Information</p>
          </Link>
        </li>
        <li className="Cat Cat--50">
          <Link to="/Movies250" className="Cat__link">
            <p className="Cat__type">Top 250</p>
            <p className="Cat__title">Movies</p>
            <p className="Cat__show">All Time</p>
          </Link>
        </li>
        <li className="Cat Cat--50">
          <Link to="/WebSeries250" className="Cat__link">
            <p className="Cat__type">Top 250</p>
            <p className="Cat__title">WebSeries</p>
            <p className="Cat__show">All Time</p>
          </Link>
        </li>
        <li className="Cat Cat--100">
          <Link to="/Wishlist" className="Cat__link">
            <p className="Cat__type">Your</p>
            <p className="Cat__title">Favorites </p>
            <p className="Cat__show"></p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HuluGrid;
