import React, { Component } from 'react';

import Header   from './components/Header'
import Logo     from './components/Logo'
import LpSearch from './components/LpSearch'
import SignIn   from './components/SignIn'

import './components/assets/css/main.css';


export default class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<Logo />
      	<LpSearch />
      	<SignIn />
      </div>
    );
  }
}

