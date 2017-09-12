import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

    modal(e){
    e.preventDefault();
    this.setState({showModal: !this.state.showReply})
  }

	showModal = (ev) => {
        console.log('clicking')
        var show = document.getElementsByClassName('signInModal');
        if (show.style.display === 'none') {
        	show.style.display = 'block';
    	} else {
            show.style.display = 'none';
    	}
	}

  render() {
    return (

   <header className="headWrapper"> 
      <section className="navContainer row">
        <div className="navLabel signInBtn">
          <button onClick={(ev)=>{ this.modal() }} id="btn-Login btnLogin">
          <h4> Log in </h4></button>
        </div>

        <div className="navLabel signUpBtn">
          <button id="btn-SignUp btnSignUp">
          <h4> Sign up </h4></button>
        </div>
      </section>
   </header>

    );
  }
}