import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { Context } from "../Context/Context";

const Login = () => {
  const { passDetailsToNav } = useContext(Context);

  const history = useHistory();

  const routeChange = () => {
    let path = `/Home`;
    history.push(path);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        routeChange();

        passDetailsToNav(u);
      })
      .catch((err) => {
        console.log(err);
        alert("Please check your credentials.");
      });
  };

  return (
    <div>
      <div
        className="login uk-cover-container uk-background-secondary uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-overflow-hidden uk-light"
        data-uk-height-viewport
      >
        <div className="uk-position-cover uk-overlay-primary"></div>

        <div className="uk-position-bottom-center uk-position-small uk-visible@m uk-position-z-index">
          <span className="uk-text-small uk-text-muted">
            © 2019 Company Name -{" "}
            <a href="https://github.com/zzseba78/Kick-Off">
              Created by KickOff
            </a>{" "}
            | Built with{" "}
            <a
              href="http://getuikit.com"
              title="Visit UIkit 3 site"
              target="_blank"
              data-uk-tooltip
            >
              <span data-uk-icon="uikit"></span>
            </a>
          </span>
        </div>
        <div
          className="uk-width-medium uk-padding-small uk-position-z-index"
          uk-scrollspy="cls: uk-animation-fade"
        >
          <div className="uk-text-center uk-margin">
            <span data-uk-icon="uikit"></span> Login
          </div>

          <form className="toggle-className" action="login-dark.html">
            <fieldset className="uk-fieldset">
              <div className="uk-margin-small">
                <div className="uk-inline uk-width-1-1">
                  <span
                    className="uk-form-icon uk-form-icon-flip"
                    data-uk-icon="icon: user"
                  ></span>
                  <input
                    className="uk-input uk-border-pill"
                    required
                    placeholder="Email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="uk-margin-small">
                <div className="uk-inline uk-width-1-1">
                  <span
                    className="uk-form-icon uk-form-icon-flip"
                    data-uk-icon="icon: lock"
                  ></span>
                  <input
                    className="uk-input uk-border-pill"
                    required
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="uk-margin-bottom">
                <button
                  type="submit"
                  className="uk-button uk-button-primary uk-border-pill uk-width-1-1"
                  onClick={(e) => login(e)}
                >
                  LOG IN
                </button>
              </div>

              <div className="uk-margin-bottom">
                <Link to="/Register">
                  {" "}
                  <button
                    type="submit"
                    className="uk-button uk-button-primary uk-border-pill uk-width-1-1"
                  >
                    Register
                  </button>
                </Link>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
