import React from 'react';
import Home from './Home/Home';
import ItemPage from './ItemPage/ItemPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from './Context/Context';
import Movie250 from '../src/Movie250/Movie250';
import Login from './Login/Login';
import Register from './Login/Register';
import Navbar from './Navbar.js/Navbar';
import GridCard from './Movie250/GridCard';
import MovieSearch from './Movie250/MovieSearch'
import Wishlist from './Wishlist/Wishlist';
import WebSeries250 from './WebSeries250/WebSeries250';
import ItempageLightbox from './ItemPage/ItempageLightbox';
const App=()=> {
  return (
<Provider>
  <Router>
    <Navbar/>
  
    <Route exact path="/" component={Register}></Route>
<Route exact path="/Home" component={Home}></Route>
<Route exact path="/ItemPage/:id" component={ItemPage}></Route>
<Route exact path="/Movies250" component ={Movie250}></Route>
<Route exact path="/WebSeries250" component ={WebSeries250}></Route>
<Route exact path="/Login" component ={Login}></Route>
<Route exact path="/Register" component ={Register}></Route>
<Route exact path ="/MovieSearch" component ={MovieSearch}></Route>
<Route exact path ="/Wishlist" component ={Wishlist}></Route>
<Route exact path="/Search" component={MovieSearch}></Route>
  </Router>

  {/* <Home/> */}
  </Provider>
  );
}

export default App;
