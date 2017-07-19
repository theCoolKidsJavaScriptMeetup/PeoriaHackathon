import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import CoPlogo from '../assets/CoP-logo.png';
import '../App.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
       <Link to="http://www.peoriagov.org/"><img src={CoPlogo} alt="City of Peoria Logo" /></Link>
      </div>
    );
  }
}
