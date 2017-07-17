import React, { Component } from 'react';

import Header from './Header.js';


import logo from '../logo.svg';
import '../App.css';

export default class Main extends Component {
  render() {
    return (
    	<div className="color-cover">
	    	<Header />
	        <div className="Content Content-home">
		    	<div className="intro_message">
			    	<h3>On Saturday, August 12th, 2017 The City of Peoria will host the area’s first civic hackathon to engage the local tech community for the purpose of innovating new civic tech solutions.</h3>
			    	<p>Teams of 2-7 participants will utilize City data while competing to create a website, app, or other tool that could improve the lives of people who live, work, and play in the Peoria area. The event has already gained interest from over 100 community members and is expected to attract 50+ participants for the 12 hour session.</p>
			    	<p>Peoria Civic Hackathon 2017 will be taking place in conjunction with Ignite Peoria, a day-long event at the Peoria Civic Center that attracts thousands of visitors to interact with and learn about the thriving arts and tech community in the region.</p>
		    	</div>

		    	<div className="agenda">
		    		<h2 align="center">Agenda</h2>
		    		<h3>Friday Night Meet @ ___ (local watering hole)</h3>
			    	<ul>
			    		<li><span>6-6:30 PM: Check-in, pick up a name tag, and grab a drink (if you wish)!</span></li>

						<li><span>6:30-7 PM: Welcome from the i-team and Q & A session about the Hackathon</span>
						<br/><br/>Use this time to gather with your team or find a team if you are a solo participant looking to join a team. The i-team will also be open to answering any questions about the hackathon during this time</li>

						<li><span>7-8 PM: Mingle with fellow hackers!</span>
						<br/><br/>Use this time to brainstorm with your team, welcome new members to your team, or just meet some new people and have fun!</li>
					</ul>
					<h3>Saturday Meet @ the Civic Center Wireless Lobby</h3>
					<ul>
						<li><span>8-8:30 AM: Check-in and Breakfast</span>
						<br/><br/>Stop at the registration table to check-in, grab a name tag, make sure all members of your team are registered, and find out where your team’s work space is located. Teams will have the opportunity to move around once the Hackathon period begins. Be sure to grab some  breakfast and check out the SWAG table!</li>

						<li><span>8:30-9 AM: Opening Remarks from the i-team and City of Peoria IT Department</span>
						<br/><br/>A word from our sponsors. Introduction of the  Hackathon Challenge Statement</li>

						<li><span>9 AM: HACKATHON BEGINS – GET HACKING!</span>
							<br/><br/>Registration closes</li>
						<li><span>1 PM: Lunch – Grab a bite to eat and don’t forget to hydrate!</span></li>

						<li><span>5 PM: Dinner – You’ll want a little extra fuel for these last few hours!</span></li>

						<li><span>7 PM: HACKATHON ENDS</span>
						<br/><br/>Have project submitted  and demo ready to present</li>

						<li><span>7-7:30 PM: Presentation of demos</span>
						<br/><br/>Check out the creativity  of your fellow hacking peers!</li>

						<li><span>7:30-7:45 PM: Judging Period</span></li>

						<li><span>7:45-8:00 PM: Winners Announced and Presentation of Awards</span></li>

						<li><span>8:00 - ??? GO HOME AND GET SOME SLEEP</span></li>
					</ul>
		    	</div>
		    </div>
		</div>
    );
  }
}
