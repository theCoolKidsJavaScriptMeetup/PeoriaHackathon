import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import devBrightLogo from '../devBrightLogo.jpg';

const SponsorCard = ({sponsorName, sponsorTitle, sponsorImage})=> {
	return (
		<div className="sponsorContainer">
			<div className="sponsorImage">
				<img src={devBrightLogo} />
			</div>
			<div className="flexColumn">
				<div className="sponsorBlurb">
					<h3 className="blackText">{sponsorName}</h3>
				</div>
			</div>
		</div>
  );
}

export default class Sponsors extends Component {
  render() {
    return (
      <div className="Content">
        <h2>Platinum Sponsor</h2>
      	<div className="sponsorsContainer">
			  	<SponsorCard sponsorName="DevBright" sponsorTitle="PLATINUM" />
			  </div>
        <h2>Gold Sponsors</h2>
        <div className="sponsorsContainer">
			  	<SponsorCard sponsorName="DevBright" sponsorTitle="PLATINUM" />
			  </div>
        <h2>Silver Sponsors</h2>
        <div className="sponsorsContainer">
			  	<SponsorCard sponsorName="DevBright" sponsorTitle="PLATINUM" />
			  </div>
      </div>
    );
  }
}