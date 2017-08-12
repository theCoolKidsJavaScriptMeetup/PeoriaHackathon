import React, { Component } from 'react';
import CoPlogo from '../assets/CoP-logo.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <a href="http://www.peoriagov.org/" target="blank" rel="noopener noreferrer"><img src={CoPlogo} alt="City of Peoria Logo" /></a>
        <a className="footerText" href="https://twitter.com/search?f=tweets&q=codeforpeoria&src=typd" target="blank" rel="noopener noreferrer">#codeforpeoria</a>
        <div className="createdBy">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/theCoolKidsJavaScriptMeetup">Made with <i className="fa fa-heart"></i><i class="fa fa-file-code-o"></i> by The Cool Kids Javascript Meetup</a>
        </div>
      </div>
    );
  }
}
