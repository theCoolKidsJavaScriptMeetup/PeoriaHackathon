import React, { Component } from 'react';

var divStyle = {
  color: "#000"
};

export default class Sponsor extends Component {
	render () {
		return (
			<div className="Jeff">
				<div className="sponsorImage">
					<img src="https://railsgirlssummerofcode.org/img/blog/2016/l1ghtsab3r-partyparrot.gif" />
				</div>
				<div className="sponsorTitle">
					<h1 style={divStyle}>O RLY?</h1>
				</div>
				<div className="sponsorBlurb">
					<h3 style={divStyle}>DEAL WITH IT. DEAL WITH IT. DEAL WITH IT. DEAL WITH IT. DEAL WITH IT.</h3>
				</div>
			</div>
		)
	}
}