import React, { Component } from 'react';

import Header from './Header.js';


import logo from '../logo.svg';
import '../App.css';

export default class Main extends Component {
  render() {
    return (
    	<div>
	    	<Header />
	        <div className="Content">
		    	<h2>Welcome!</h2>
		    </div>
		</div>
    );
  }
}
