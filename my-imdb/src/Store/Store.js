import React, { useReducer, useEffect, useState } from "react";

const Store = () => {

  //  Inital State
  const INITIAL_STATE = {
    movies: [],
    movie: {},
    WebSeries: [],
    isAPILoaded: false,
    checkUser: false,
    profileName: "",
    totalProfile: {},
    cart: [],
    Search: "",
    WebSeries250:[],
    movie250:[]
  };
// Api key  "k_TMhC11oM"   "k_Y8iP3Avt" Simply change the key here, if the key changes
const key="k_Y8iP3Avt";

  const reducer = (state, action) => {
    const { type, data } = action;
    switch (type) {
      case "Fetch_Data": {
        return {
          ...state,
          ...data,
          isAPILoaded: true,
        };
      }
      case "movie": {
        return {
          ...state,
          ...data,
        };
      }
      case "change": {
        return {
          ...state,
          ...data,
        };
      }

      // Wishlist -> adding

      case "addMovie": {
        return {
          ...state,
          ...data,
        };
        
      }
// Wishlist Remove
      case "removeMovie": {
        return {
          ...state,
          ...data,
        };
      }
    }
  };
  // Sending Data to Dispatcher
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  let {
    movies,
    webSeries,
    isAPILoaded,
    movie,
    cart,
    movie250,
    WebSeries250,
  } = state;
 
 
  //Gathering Slider Data
  useEffect(() => {
    fetch("https://jsonblob.com/api/e1d3c9c6-b53c-11ea-9bad-15dc06ea1f30")
      .then((response) => response.json())
      .then((json) => {
        const { movies, webSeries } = json;

        dispatch({
          type: "Fetch_Data",
          data: { movies: [...movies], webSeries: [...webSeries] },
        });
      });
  }, []);

  //Gathering movie 250 Data

  useEffect(() => {
    fetch("https://jsonblob.com/api/964ac654-b228-11ea-a473-d7f4cca9f47e")
      .then((res) => res.json())
      .then((x) => {
        const { items } = x;
        dispatch({
          type: "Fetch_Data",
          data: { movie250: [...items] },
        });
      });
  }, []);

  //Gathering 250 Webseries Data
  useEffect(() => {
    fetch("https://jsonblob.com/api/52a7caba-b22a-11ea-a473-0b29db0a56e0")
      .then((res) => res.json())
      .then((x) => {
        const { items } = x;
        dispatch({
          type: "Fetch_Data",
          data: { WebSeries250: [...items] },
        });
      });
  }, []);

  // Navigation Function from Home to Itempage
  const navi = (id) => {
    const movie = movies.filter((movie) => movie.id == id);

    dispatch({
      type: "movie",
      data: { movie: movie[0] },
    });
   
  };

 // Navigation Function from Movie250 to Itempage
  const naviM = (id) => {
    const movie = movie250.filter((movie) => movie.id == id);

    dispatch({
      type: "movie",
      data: { movie: movie[0] },
    });
  };

   // Navigation Function from WebSeries250 to Itempage
  const naviW = (id) => {
    const movie = WebSeries250.filter((movie) => movie.id == id);

    dispatch({
      type: "movie",
      data: { movie: movie[0] },
    });
  };
  let [similar,setSimilar]=useState([]);
  let [fullcast, setFullcast] = useState({});
 
//  Gathering the full cast Details Based on Movie. It works when user click on button in ItemPage.
  const fullCastDetails = () => {
    fetch(`https://imdb-api.com/en/API/Title/${key}/${movie.id}`)
      .then((res) => res.json())
      .then((s) => {
        setFullcast((fullcast = { ...s }));
        let {similars}=fullcast;
        setSimilar([...similars]);
        console.log(fullcast);
      });
    }

    // Updates the trailer of the Movie on clicking Button
  const trailerUpdate = () => {
    fetch(`https://imdb-api.com/en/API/YouTubeTrailer/${key}/${movie.id}`)
      .then((res) => res.json())
      .then((s) => {
        setLink((link = { ...s }));
        console.log(link);
      });

    console.log(link);
  };

  // To Set the profileName
  const changeProfileState = () => {
    dispatch({
      type: "change",
      data: { profileName: "" },
    });
  };


  // Pass Details of User to Navigation Bar to Display.
  const passDetailsToNav = (x) => {
    dispatch({
      type: "movie",
      data: { profileName: x.user.displayName, totalProfile: { ...x } },
    });
  };

  let [link, setLink] = useState({});


  // Add to cart Logic Starts here

  const addToCart = (item) => {
    //  let addedMovie = movie250.filter((x) => x.id == id);
    // if(cart.includes(item))
    // {
    let dCart = [];
    let count = 0;

    if (cart.length < 1) dCart.push(item);
    else {
      count = 0;
      for (let z = 0; z < cart.length; z++) {
        if (cart[z].id == item.id) {
          count++;
          if (count > 0) break;
        }
      }
      if (count == 0) {
        dCart.push(item);
      } else {
        alert(item.title + " already addded to list!");
        dCart = [];
      }
    }
    dispatch({
      type: "addMovie",
      data: {
        cart: [...cart, ...dCart],
      },
    });
    console.log(item);
    //}
  };

  // remove from the list

  const removeFromList = (index) => {
    console.log(index);
    console.log(cart.filter((a, i) => i != index));
    dispatch({
      type: "removeMovie",
      data: {
        cart: [...cart.filter((a, i) => i != index)],
        //cart :[...cart.splice(index,1)];
      },
    });
  };

  return {
    state,
    navi,
    link,
    trailerUpdate,
    passDetailsToNav,
    changeProfileState,
    removeFromList,
    addToCart,
    naviM,
    naviW,
    fullCastDetails,
    fullcast,
    similar,
    key,
    WebSeries250,
    movie250
  };



};

export default Store;
