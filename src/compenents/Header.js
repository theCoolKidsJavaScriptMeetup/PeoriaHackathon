import React, { Component } from 'react';

import Button from './Button';
import '../App.css';

export default class Header extends Component {
  render() {
    return (
    	<div className="App-header">
        	<div className="header-wrap">
	            <div className="header-content">
	                <h1>Connect. Collaborate. Create.</h1>
	                <h2>August 12, 2017 - 9am-9pm</h2>
	                <div className="button-group">
	                  <Button href="registration">Get Registered</Button>
	                  <Button href="sponsors" styleName="whitebutton">Sponsors</Button>
	                </div>
	            </div>
        	</div>
        </div>
    );
  }
}
