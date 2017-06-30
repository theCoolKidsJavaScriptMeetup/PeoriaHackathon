import React, { Component } from 'react';

import Button from './Button';


import logo from '../logo.svg';
import '../App.css';

export default class Main extends Component {
  render() {
    return (
      <div className="Content">
        <h2>Welcome!</h2>
        <ul>
        	<li>Location: Civic Center (Verizon Lounge)</li>
        	<li>Duration: 9AM-9PM</li>
        	<li>Rules</li>
        	<li>
        		<ul>
        			<li>What the hackathon is</li>
        			<li>Who is organizing it</li>
        			<li>What will be accomplished</li>
        			<li>Why people should participate</li>
        			<li>What you need (for sponsors)</li>
        		</ul>
        	</li>
        	<li>Sponsors</li>
        	<li>
        		<ul>
        			<li>Logo svgs/images that link to websites</li>
        		</ul>
        	</li>
        	<li>FAQ Questions</li>
        	<li>
        		<ul>
        			<li>Are there travel reimbursements?</li>
        			<li>
        				<ul>
		        			<li>Unfortunately, we will not be able to provide travel reimbursements to attendees.</li>
		        		</ul>
        			</li>
        			<li>When should I arrive?</li>
        			<li>
        				<ul>
		        			<li>Please plan to arrive at [TIME] on Friday, [TIME] on Saturday, and [TIME] on Sunday</li>
		        		</ul>
        			</li>
        			<li>What should I bring?</li>
        			<li>
        				<ul>
		        			<li>Your laptop, power cables, and a smile J</li>
		        		</ul>
        			</li>
        			<li>Do I need a team?</li>
        			<li>
        				<ul>
		        			<li>Teams may be formed prior to or at the beginning of the event; there will be an opportunity to find a team during Friday’s opening ceremony.</li>
		        		</ul>
        			</li>
        			<li>How do I register a team?</li>
        			<li>
        				<ul>
		        			<li>Gather the names, emails, and any team dietary restrictions, and a killer team name; then complete the Team Registration Form.</li>
		        		</ul>
        			</li>
        			<li>Will there be food?</li>
        			<li>
        				<ul>
		        			<li>All meals, snacks, and drinks will be provided for the entire weekend. If you have a dietary restriction, please make you mentioned it on the application. There will be a wide variety of food.</li>
		        		</ul>
        			</li>
        			<li>Who do I contact for help?</li>
        			<li>
        				<ul>
		        			<li>Please contact [EMAIL] with any questions prior to the hackathon.</li>
		        		</ul>
        			</li>
        			<li>Where do I sleep?</li>
        			<li>
        				<ul>
		        			<li>At your place or with a friend. No housing will be provided for this event.</li>
		        		</ul>
        			</li>
        			<li>Will you have hardware?</li>
        			<li>
        				<ul>
		        			<li>This will be a BYOD (Bring Your Own Device) hackathon. No hardware will be provided.</li>
		        		</ul>
        			</li>
        			<li>What are the prizes?</li>
        			<li>
        				<ul>
		        			<li>1st Prize:</li>
		        			<li>2nd Prize:</li>
		        			<li>3rd Prize:</li>
		        		</ul>
        			</li>
        			<li>What will contributors be working on?</li>
        			<li>
        				<ul>
		        			<li>Contributors will be working to develop new solutions for…</li>
		        		</ul>
        			</li>
        		</ul>
        	</li>        	
        </ul>
      </div>
    );
  }
}
