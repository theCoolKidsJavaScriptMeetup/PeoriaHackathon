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
		    	<div className="intro_message">
			    	<h3 align="center">On Saturday, August 12th, 2017 The City of Peoria will host the area’s first civic hackathon to engage the local tech community for the purpose of innovating new civic tech solutions.</h3>
			    	<p>Teams of 2-7 participants will utilize City data while competing to create a website, app, or other tool that could improve the lives of people who live, work, and play in the Peoria area. The event has already gained interest from over 100 community members and is expected to attract 50+ participants for the 12 hour session.</p>
			    	<p>Peoria Civic Hackathon 2017 will be taking place in conjunction with Ignite Peoria, a day-long event at the Peoria Civic Center that attracts thousands of visitors to interact with and learn about the thriving arts and tech community in the region.</p>
		    	</div>
		    </div>
		</div>
    );
  }
}
