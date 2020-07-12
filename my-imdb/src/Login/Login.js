import React,{useState,useEffect,useContext} from 'react'
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Context } from "../Context/Context";

const Login=()=> {
    const {passDetailsToNav}=useContext(Context);

    const history = useHistory();
    
    const routeChange = () => {
      let path = `/Home`;
      history.push(path);  

  }
   

   
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    


    const login=(e)=>{
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email,password).then((u)=>{
            console.log(u)
            routeChange();
            
            passDetailsToNav(u);
        }).catch((err)=>{
            console.log(err);
            alert('Please check your credentials.');
        })
    }


    // const UserLogin=(e)=>
    // {e.preventDefault();
       
    //     try{
    //         let response = firebase.login(email, password);
    //         if(response.hasOwnProperty("message"))
    //         {
    //         alert(response.message);
    //         }
    //         else{
    //             alert(' Logged in');
    //             routeChange();
    //         }
    //     }
    //     catch(error){
    // alert(error.message);
    //     }

    
    // // let response = firebase.login(email, password);
    // //     if (response.hasOwnProperty("message")) {
    // //         alert(response.message);
    //    // }
    // }


    // const login = async (e) => {
    //     alert('Func');
    //     e.preventDefault();
    //     let response = await firebase.login(email, password);
    //     if (response.hasOwnProperty("message")) {
    //         alert(response.message);
    //     } else {
    //         // setName("name");
    //         alert(" You are Logged In");
           
    //     }
    // }

    return (
        <div>
            
            {/* <form>

<div class="uk-margin">
    <div class="uk-inline">Email 
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input class="uk-input" type="text"  onChange={(e)=>setEmail(e.target.value)}/>
    </div>
</div>

<div class="uk-margin">Password
    <div class="uk-inline">
        <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
        <input class="uk-input" type="password"  onChange={(e)=>setPassword(e.target.value)}/>
    </div>
</div>
<button class="uk-button uk-button-default" onClick={(e)=>login(e)}>Login</button>
No Account?
<Link to='/Register'><button class="uk-button uk-button-default" >Register</button>
</Link>
</form> */}


<div class="login uk-cover-container uk-background-secondary uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-overflow-hidden uk-light" data-uk-height-viewport>

<div class="uk-position-cover uk-overlay-primary"></div>
	
		<div class="uk-position-bottom-center uk-position-small uk-visible@m uk-position-z-index">
			<span class="uk-text-small uk-text-muted">© 2019 Company Name - <a href="https://github.com/zzseba78/Kick-Off">Created by KickOff</a> | Built with <a href="http://getuikit.com" title="Visit UIkit 3 site" target="_blank" data-uk-tooltip><span data-uk-icon="uikit"></span></a></span>
		</div>
		<div class="uk-width-medium uk-padding-small uk-position-z-index" uk-scrollspy="cls: uk-animation-fade">
			
			<div class="uk-text-center uk-margin">
            <span data-uk-icon="uikit"></span> Login
			</div>

			
			<form class="toggle-class" action="login-dark.html">
				<fieldset class="uk-fieldset">
					<div class="uk-margin-small">
						<div class="uk-inline uk-width-1-1">
							<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
							<input class="uk-input uk-border-pill" required placeholder="Email" type="text" onChange={(e)=>setEmail(e.target.value)}/>
						</div>
					</div>
					<div class="uk-margin-small">
						<div class="uk-inline uk-width-1-1">
							<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
							<input class="uk-input uk-border-pill" required placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
						</div>
					</div>
					
					<div class="uk-margin-bottom">
                    <button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1"  onClick={(e)=>login(e)}>LOG IN</button>
					</div>

                    <div class="uk-margin-bottom">
                   <Link to="/Register"> <button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1"  >Register</button></Link>
					</div>
 
				</fieldset>
			</form>
			

			
			
		
		
		</div>
</div>
        </div>
    )
}

export default Login
