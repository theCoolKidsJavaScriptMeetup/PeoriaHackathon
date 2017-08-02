import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Registration.css'

const RegistrationButton = ({path, helpText, buttonText}) => {
  return (
    <div>
      <div className="registrationButtonContainer">
        <Link className="whitebutton button" to={path}>{buttonText}</Link>
        <i className="fa fa-info-circle helpIcon" aria-hidden="true" title={helpText}></i>
      </div>
       <p className="helpText"><i className="fa fa-info-circle"></i> {helpText}</p>
  </div>
  );
}

export default class Registration extends Component {
  render() {
    return (
      <div className='Content'>
        <h2>Get Registered!</h2>
        <div className="registration_intro_message">
        <p>Registration for the Peoria Civic Hackathon is free. While the event is open to the public, registration is required in order to participate and be eligible for the prize.</p>
        </div>
        <div className="button-group stacked">
           <RegistrationButton path="/register/individual" buttonText="Register as an Individual" helpText="Register as an individual if you haven't formed a team yet with others. You can always join or create a team later. Attend our Hackathon Social on Friday, August 11th to meet other participants and form a team."/>
           <RegistrationButton path="/registerTeam/create" buttonText="Create a Team" helpText="Create a team and the password needed for others to join it. Afterwards, you'll be prompted to register with that team."/>
           <RegistrationButton path="/registerTeam/join/join-team" buttonText="Join a Team" helpText="Is there an existing team you'd like to join? Make sure you know their password. After confirming the team name and password, you'll be prompted to register with that team."/>
        </div>
      </div>
    );
  }
}