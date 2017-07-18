import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from './Button'
import '../Registration.css'

export default class Registration extends Component {
  render() {
    return (
      <div className='Content'>
        <h2>Get Registered!</h2>
        <h3>Do you want to...</h3>
        <div className="button-group stacked">
            <Button styleName="whitebutton" href='/registerTeam/create'>Create a Team</Button>
            <Button styleName="whitebutton" href='/registerTeam/join/join-team'>Join a Team</Button>
            <Button styleName="whitebutton" href='/register/individual'>Register as an Individual</Button>
        </div>
      </div>
    );
  }
}