import React, { Component } from 'react';
import { Formik } from 'formik';
import Yup from 'yup';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '../App.css';
import '../Registration.css'

export default class Registration extends Component {
  render() {
    return (
      <div className='Content'>
        <h2>Get Registered!</h2>
        <div>
            <Link to='/register/individual'>Individual</Link>
            <Link to='/registerTeam/create'>Create Team</Link>
            <Link to='/registerTeam/join'>Join Team</Link>
        </div>
      </div>
    );
  }
}