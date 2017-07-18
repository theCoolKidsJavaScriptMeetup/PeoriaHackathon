import React, { Component } from 'react';
import Button from './Button';

export default class Header extends Component {
  render() {
    return (
    	<div className="App-header">
        	<div className="header-wrap">
	            <div className="header-content">
	                <h1>Connect. Collaborate. Create.</h1>
	                <h2>August 12, 2017 - 8am-8pm</h2>
	                <h3>Peoria Civic Center (Verizon Lounge)</h3>
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
