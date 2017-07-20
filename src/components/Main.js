import React, { Component } from 'react';
import Header from './Header.js';

export default class Main extends Component {
  render() {
    return (
    	<div className="color-cover">
	    	<Header />
	        <div className="Content Content-home">
		    	<div className="intro_message">
			    	<h3>On Saturday, August 12th, 2017 The City of Peoria will host the area’s first civic hackathon to engage the local tech community for the purpose of innovating new civic tech solutions.</h3>
			    	<p>Teams of 2-7 participants will utilize City data while competing to create a website, app, or other tool that could improve the lives of people who live, work, and play in the Peoria area. Peoria Civic Hackathon 2017 is taking place in conjunction with Ignite Peoria, a day-long event at the Peoria Civic Center that attracts thousands of visitors to interact with and learn about the thriving arts and tech community in the region.</p>
		    	</div>

		    	<div className="agenda">
		    		<h2>Agenda</h2>
		    		<h3>Friday Night Meet @ <i>TBD</i></h3>
			    	<ul>
			    		<li><span>6-6:30 PM: Check-in, pick up a name tag, and grab a drink (if you wish)!</span></li>

						<li><span>6:30-7 PM: Welcome from the City of Peoria and Q & A session about the Hackathon</span>
						<br/><br/>Use this time to gather with your team or find a team if you are a solo participant looking to join a team. Members from the City of Peoria Innovation Team will also be open to answering any questions about the hackathon during this time</li>

						<li><span>7-8 PM: Mingle with fellow hackers!</span>
						<br/><br/>Use this time to brainstorm with your team, welcome new members to your team, or just meet some new people and have fun!</li>
					</ul>
					<h3>Saturday Meet @ <i>Civic Center Verizon Lobby</i></h3>
					<ul>
						<li><span>8-8:30 AM: Check-in and Breakfast</span>
						<br/><br/>Stop at the registration table to check-in, grab a name tag, make sure all members of your team are registered, and find out where your team’s work space is located. Teams will have the opportunity to move around once the Hackathon period begins.</li>

						<li><span>8:30-9 AM: Opening Remarks from the i-team and City of Peoria IT Department</span>
						<br/><br/>Introduction of the  Hackathon Challenge Statement and a word from our sponsors. </li>

						<li><span>9 AM: HACKING BEGINS – GET HACKING!</span>
							<br/><br/>Registration closes</li>
						<li><span>1 PM: Lunch – Grab a bite to eat and don’t forget to hydrate!</span></li>

						<li><span>5 PM: Dinner – You’ll want a little extra fuel for these last few hours!</span></li>

						<li><span>7 PM: HACKING ENDS</span>
						<br/><br/>At 7 PM, your project must be submitted and your team must be ready to demonstrate its functionality to the judges panel.</li>

						<li><span>7-7:30 PM: Presentation of demos</span>
						<br/><br/>Present your projects and see what other teams were able to put together!</li>

						<li><span>7:30-7:45 PM: Judging Period</span></li>

						<li><span>7:45-8:00 PM: Winners Announced and Presentation of Awards</span></li>
					</ul>
		    	</div>
		    </div>
		</div>
    );
  }
}
