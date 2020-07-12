import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import firebase from "../Firebase/FirebaseConfig";

 const Register = () => {

const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');


async function onRegister(e) {
    e.preventDefault();
    try {
        await firebase.register(name, email, password)
       
        alert(name + " you are Registered !!")
    } catch (error) {
        alert(error.message)
    }
}




    return (
        <div>
            



<div class="login uk-cover-container uk-background-secondary uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-overflow-hidden uk-light" data-uk-height-viewport>

<div class="uk-position-cover uk-overlay-primary"></div>
	
		<div class="uk-position-bottom-center uk-position-small uk-visible@m uk-position-z-index">
			<span class="uk-text-small uk-text-muted">© 2019 Company Name - <a href="https://github.com/zzseba78/Kick-Off">Created by KickOff</a> | Built with <a href="http://getuikit.com" title="Visit UIkit 3 site" target="_blank" data-uk-tooltip><span data-uk-icon="uikit"></span></a></span>
		</div>
		<div class="uk-width-medium uk-padding-small uk-position-z-index" uk-scrollspy="cls: uk-animation-fade">
			
			<div class="uk-text-center uk-margin">
            <span data-uk-icon="uikit"></span> Register
			</div>

			
			<form class="toggle-class" action="login-dark.html">
				<fieldset class="uk-fieldset">
                <div class="uk-margin-small">
						<div class="uk-inline uk-width-1-1">
							<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
							<input class="uk-input uk-border-pill" required placeholder="Username" type="text" onChange={(e)=>setName(e.target.value)}/>
						</div>
					</div>
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
                    <button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1"  onClick={(e)=>onRegister(e)}>Submit</button>
					</div>

                    <div class="uk-margin-bottom">
                   <Link to="/Login"> <button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1" >Login</button></Link>
					</div>
 
				</fieldset>
			</form>
			

			
			
		
		
		</div>
</div>

        </div>
    )
}
export default Register;