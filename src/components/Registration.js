import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Registration.css'

export default class Registration extends Component {
  render() {
    return (
      <div className='Content'>
        <h2>Get Registered!</h2>
        <h3>Do you want to...</h3>
        <div className="button-group stacked">
            <Link className="whitebutton button" to='/register/individual'>Register as an Individual</Link>
            <Link className="whitebutton button" to='/registerTeam/create'>Create a Team</Link>
            <Link className="whitebutton button" to='/registerTeam/join/join-team'>Join a Team</Link>
        </div>
      </div>
    );
  }
}