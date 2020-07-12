import React,{useEffect,useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom';
import { Context } from "../Context/Context";
import firebase from 'firebase/app';
import 'firebase/auth';
const Navbar=()=> {
    const {state:{profileName,totalProfile},changeProfileState}=useContext(Context);
    console.log(profileName,totalProfile);
   

 let user = profileName;

    async function logout(){
        
        const logout = await firebase.auth().signOut().catch(err => {
            console.log(err);
            return err;
        });
       
        let path="/Login"
     history.push(path);
     user=''
  changeProfileState();

    }

 

    const history = useHistory();

    const routeChange = () => {
        let path = `/`;
        history.push(path);  
        
    }

    return (

        <div>
            

<div class="uk-flex uk-flex-center uk-background-secondary" uk-sticky="top: 0">
    
            <button class="uk-button uk-button-primary " type="button" uk-toggle="target: #offcanvas-nav-primary">Menu</button>
            </div>
            <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">

        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">

            {(user)?(
                <>
        <li class="uk-active" >{profileName}</li>
        <li class="uk-active" onClick={logout}>LogOut</li>
        </>)
        :(<><li class="uk-active"><Link to="/Login">Login</Link></li>
        <li class="uk-active"><Link to="/Register">Register</Link></li></>)}
            <li class="uk-active"><Link to="/Home">Home</Link></li>
            <li class="uk-active"><Link to="/Search">Search</Link></li>
            <li class="uk-nav-header">Top 250 </li>
            <li><Link to="/Movies250"><span class="uk-margin-small-right" uk-icon="icon: table"></span>Movies</Link></li>
            <li><Link to="/WebSeries250"> <span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Web Series </Link></li>
            <li class="uk-nav-divider"></li>
            <li><Link to="/Wishlist"> <span class="uk-margin-small-right" ></span> Wishlist</Link></li>
            
        </ul>
    </div>
</div>
        </div>
    )
}

export default Navbar
