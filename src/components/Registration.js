import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Registration.css'

export default class Registration extends Component {
  render() {
    return (
      <div className='Content'>
        <h2>Get Registered!</h2>
        <div>
            <Link to='/register/individual'>Individual</Link>
            <Link to='/registerTeam/create'>Create Team</Link>
            <Link to='/registerTeam/join/join-team'>Join Team</Link>
        </div>
      </div>
    );
  }
}