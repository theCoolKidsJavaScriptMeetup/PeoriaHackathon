import React, { Component } from 'react';
import Header from './Header.js';
import Button from './Button';
import hackathonImage from '../assets/amsterdam-hackathon.jpg';

export default class Main extends Component {
  render() {
    return (
    	<div className="color-cover">
	    	<Header />
	        <div className="Content Content-home">
				<div className="content-bar">
					<div className="content-bar-text">
						On Saturday, August 12th, 2017, The City of Peoria will host the area’s first civic hackathon to engage the local tech community to innovate new civic tech solutions.
						<p>Peoria Civic Hackathon 2017 is taking place in conjunction with Ignite Peoria, an event at the Peoria Civic Center that attracts thousands of visitors to interact with the City's thriving arts and tech community.</p>
					</div>
				</div>


		    	<div className="intro_message">	
					<div><img src={hackathonImage}/></div>
			    	<div>
				        <h2>What is the 2017 Peoria Civic Hackathon?</h2>
				        <p>Individuals or teams of 2-7 participants will come together to solve a local challenge. Participants will receive a Challenge Statement and access to relevant data sets. They will then utilize this data to create a website, app, or other tool that could improve the lives of people who live, work, and play in the Peoria area.</p>
				        <p>After the 10 hour hacking session, teams will demo their projects to a panel of judges who will decide which 2 teams created the best solution to the Challenge Statement. The first and runner-up team will receive cash prizes.</p>
				    </div>
		    	</div>

		    	<div className="agenda">
		    		<h2>Agenda</h2>
		    		<h3>Friday Night Social</h3>
					<a href="https://goo.gl/maps/UbNtFRxeC3w" target="blank"><h4><i>The Fieldhouse Bar & Grill (The Back Room)</i></h4></a>
			    	<ul>
			    		<li><span>6-6:30 PM: Check-in, pick up a name tag, and grab a drink (if you wish)!</span></li>

						<li><span>6:30-7 PM: Welcome from the City of Peoria and Q & A session about the Hackathon</span>
						<br/><br/>Gather with your team or find a team if you are looking to join one. Members from the City of Peoria Innovation Team will answer questions about the hackathon.</li>

						<li><span>7-8 PM: Mingle with fellow hackers!</span>
						<br/><br/>Brainstorm with your team, welcome new team members, or just meet new people and have fun!</li>
					</ul>
					<h3>Saturday Civic Hackathon</h3>
					<a href="https://goo.gl/maps/LVziKe8tJA82" target="blank"><h4><i>Civic Center Verizon Lobby</i></h4></a>
					<ul>
						<li><span>8-8:30 AM: Check-in and Breakfast</span>
						<br/><br/>Stop at the registration table to check-in, grab a name tag, register new team members, and find your team’s work space. Teams will also have the opportunity to move around once the Hackathon period begins.</li>

						<li><span>8:30-9 AM: Opening Remarks from the City of Peoria</span>
						<br/><br/>This will be the first time that Hackathon participants will hear the challenge statement they will be solving during the 10-hour hack. Also, a word from our sponsors. </li>

						<li><span>9 AM: Registration Closes and HACKATHON BEGINS</span></li>
						<li><span>12 PM: Lunch</span></li>

						<li><span>5 PM: Dinner</span></li>

						<li><span>7 PM: HACKING ENDS</span>
						<br/><br/>At 7 PM, your project must be submitted and your team must be ready to demonstrate its functionality to the judges panel.</li>

						<li><span>7-7:30 PM: Presentation of demos</span>
						<br/><br/>Present your projects and see what other teams created!</li>

						<li><span>7:30-7:45 PM: Judging Period</span></li>

						<li><span>7:45-8:00 PM: Winners Announced and Presentation of Awards</span></li>
					</ul>
					<div className="button-group">
						<Button href="/faq" styleName="goldbutton">Learn More</Button>
					</div>
		    	</div>
				
		    </div>
		</div>
    );
  }
}
