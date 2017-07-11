import React, { Component } from 'react';

import Button from './Button';
import FaqCard from './FaqCard';
import FaqTitle from './FaqTitle';
import FaqAnswer from './FaqAnswer';

import logo from '../logo.svg';
import '../App.css';

import '../faq.css';

export default class FAQ extends Component {
  render() {
    return (
      <div className="Content">
        <h2>FAQ</h2>
        <div className="faq-group">
            <FaqCard>
                <FaqTitle>Who can attend?</FaqTitle>
                <FaqAnswer>Anyone over the age of 18 with a willingness to work on solving civic challenges can attend the hackathon.</FaqAnswer>
            </FaqCard>
            <FaqCard>
                <FaqTitle>How much does it cost?</FaqTitle>
                <FaqAnswer>Due to our generous sponsors, the Peoria Civic Hackathon is free to attend!</FaqAnswer>
            </FaqCard>
            <FaqCard>
                <FaqTitle>What if I don't code?</FaqTitle>
                <FaqAnswer>Coding is a necessary part of this event, but the hackathon is open to all levels of experience. If you are new to coding, it is recommended that you join or create a team with experienced coders.</FaqAnswer>
            </FaqCard>
            <FaqCard>
                <FaqTitle>What are the prizes?</FaqTitle>
                <FaqAnswer>1st  Prize: $1,000 - 2nd  Prize: $500</FaqAnswer>
            </FaqCard>
            <FaqCard>
                <FaqTitle>Are there travel reimbursements?</FaqTitle>
                <FaqAnswer>Unfortunately, we will not be able to provide travel reimbursements to attendees.</FaqAnswer>
            </FaqCard>
            <FaqCard>
                <FaqTitle>When should I arrive?</FaqTitle>
                <FaqAnswer><i>Optional - </i>Friday 8/11:  Join us betwen 6:00PM-8:00PM for a social event before the hackathon begins on Saturday. This is a good opportunity to create or join a team and socialize with fellow participants. <br/><br/>Saturday 8/12: Check-in and registration will take place betwen 8AM-8:30AM on Saturday morning.</FaqAnswer>
            </FaqCard>
            <FaqCard>
                <FaqTitle>Do I need a team?</FaqTitle>
                <FaqAnswer>Teams may be formed prior to or at the beginning of the event; there will be an opportunity to find a team during Friday’s social event. Recommended team size is 2-7 people.</FaqAnswer>
            </FaqCard>
            <FaqCard>
                <FaqTitle>How do I register a team?</FaqTitle>
                <FaqAnswer>Use the team registration form (Link to team registration form) and include your team name, a team password, as well as the contact information for the people you'd like to invite to your team.</FaqAnswer>
            </FaqCard>
            <FaqCard>
                <FaqTitle>Will there be food?</FaqTitle>
                <FaqAnswer>All meals, snacks, and drinks will be provided during Saturday's event. If you have a dietary restriction, please indicate it when registering.</FaqAnswer>
            </FaqCard>
            <FaqCard>
                <FaqTitle>Who do I contact with questions before the event?</FaqTitle>
                <FaqAnswer>Please contact event organizer <a href="mailto:pkobak@peoriagov.org">Peter Kobak</a> with any questions prior to the hackathon.</FaqAnswer>
            </FaqCard>
            <FaqCard>
                <FaqTitle>Will you have hardware?</FaqTitle>
                <FaqAnswer>This will be a BYOD (Bring Your Own Device) hackathon. No hardware will be provided.</FaqAnswer>
            </FaqCard>
            <FaqCard>
                <FaqTitle>What is expected of participants?</FaqTitle>
                <FaqAnswer>Registered participants have agreed to the Terms of Use and are expected to follow the Peoria Civic Hackathon Code of Conduct.</FaqAnswer>
            </FaqCard>
        </div>
      </div>
    );
  }
}