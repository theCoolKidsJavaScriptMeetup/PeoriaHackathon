import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Registration.css'

export default class Registration extends Component {
  render() {
    return (
      <div className='Content'>
        <h2>Get Registered!</h2>
       
        <div className="button-group stacked">
            <Link className="whitebutton button" to='/register/individual'>Register as an Individual</Link>
            <h5>Register as an individual if you haven't formed a team yet with others. You can always join or create a team later. Attend our Hackathon Social on Friday, August 11th to meet other participants and form a team.</h5>
            <Link className="whitebutton button" to='/registerTeam/create'>Create a Team</Link>
            <h5>Create a team and the password needed for others to join it. Afterwards, you'll be prompted to register with that team.</h5>
            <Link className="whitebutton button" to='/registerTeam/join/join-team'>Join a Team</Link>
            <h5>Is there an existing team you'd like to join? Make sure you know their password. After confirming the team name and password, you'll be prompted to register with that team.</h5>
        </div>
      </div>
    );
  }
}