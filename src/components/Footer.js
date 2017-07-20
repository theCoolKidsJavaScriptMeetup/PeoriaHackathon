import React, { Component } from 'react';

import CoPlogo from '../assets/CoP-logo.png';
import '../App.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <a className="footerText" href="https://twitter.com/search?f=tweets&q=codeforpeoria&src=typd" target="blank">#codeforpeoria</a>
       <a href="http://www.peoriagov.org/" target="blank"><img src={CoPlogo} alt="City of Peoria Logo" /></a>
      </div>
    );
  }
}
