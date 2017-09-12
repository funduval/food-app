import React, { Component } from 'react';

export default class SignIn extends Component {
  render() {
    return (

        <div className="modalDisplay signInModal">
          <div className="modalForm">
            <div className="modalContent"><span className="xClose">&times;</span>
              <div className="welcome">
                <h1>Welcome to SugrTrackr</h1></div>
              <div className="errHandle"><span id="error"></span>
              </div>
              <div className="inputWrapper">
                <div className="inputStyle">
                  <input id="textEmail" type="email" placeholder="Email address" required />
                </div>
                <div className="inputStyle">
                  <input id="textPassword" type="password" placeholder="Password" required />
                </div>
              </div>
              <div className="Btn submit-LogIn modalBtn boxStyle">
                <button id="btnLogin">
                <h3 className="navLabel">Log in</h3></button>
              </div>
              <div className="dividerOr">or</div>
              <div className="Btn btn-SignUp modalBtn boxStyle">
                <button id="btnSignUp">
                <h3 className="navLabel">Sign me up</h3></button>
              </div>
            </div>
          </div>
        </div>


    );
  }
}

