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
			    	<h3 align="center">On Saturday, August 12th, 2017 The City of Peoria will host the area’s first civic hackathon to engage the local tech community for the purpose of innovating new civic tech solutions.</h3>
			    	<p>Teams of 2-7 participants will utilize City data while competing to create a website, app, or other tool that could improve the lives of people who live, work, and play in the Peoria area. The event has already gained interest from over 100 community members and is expected to attract 50+ participants for the 12 hour session.</p>
			    	<p>Peoria Civic Hackathon 2017 will be taking place in conjunction with Ignite Peoria, a day-long event at the Peoria Civic Center that attracts thousands of visitors to interact with and learn about the thriving arts and tech community in the region.</p>
		    	</div>

		    	<div className="agenda">
			    	<ul>
			    		<li>Friday Night Meet @ ___ (local watering hole)</li>
			    		<li>6-6:30 PM: Check-in, pick up a name tag, and grab a drink (if you wish)!</li>

						<li>6:30-7 PM: Welcome from the i-team and Q & A session about the Hackathon
						<br/>Use this time to gather with your team or find a team if you are a solo participant looking to join a team. The i-team will also be open to answering any questions about the hackathon during this time</li>

						<li>7-8 PM: Mingle with fellow hackers!
						<br/>Use this time to brainstorm with your team, welcome new members to your team, or just meet some new people and have fun!</li>
					</ul>
					
					<ul>
						<li>Saturday Meet @ the Civic Center Wireless Lobby</li>

						<li>8-8:30 AM: Check-in and Breakfast
						<br/>Stop at the registration table to check-in, grab a name tag, make sure all members of your team are registered, and find out where your team’s work space is located. Teams will have the opportunity to move around once the Hackathon period begins. Be sure to grab some  breakfast and check out the SWAG table!</li>

						<li>8:30-9 AM: Opening Remarks from the i-team and City of Peoria IT Department
						<br/>A word from our sponsors. Introduction of the  Hackathon Challenge Statement</li>

						<li>9 AM: HACKATHON BEGINS – GET HACKING!
							<br/>Registration closes
							<ul>
								<li>1 PM: Lunch – Grab a bite to eat and don’t forget to hydrate!</li>

								<li>5 PM: Dinner – You’ll want a little extra fuel for these last few hours!</li>

								<li>7 PM: HACKATHON ENDS
								<br/>Have project submitted  and demo ready to present</li>

								<li>7-7:30 PM: Presentation of demos
								<br/>Check out the creativity  of your fellow hacking peers!</li>

								<li>7:30-7:45 PM: Judging Period</li>

								<li>7:45-8:00 PM: Winners Announced and Presentation of Awards</li>

								<li>8:00 - ??? GO HOME AND GET SOME SLEEP</li>

							</ul>
						</li>
					</ul>

		    	</div>
		    </div>
		</div>
    );
  }
}
