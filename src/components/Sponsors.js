import React, {Component} from 'react';
import devBrightLogo from '../assets/devBrightLogo.png';
import sponsorshipPacket from '../assets/SponsorshipPacket.pdf'

const SponsorCard = ({sponsorName, sponsorImage, sponsorImageAlt}) => {
		return (
				<div className="sponsorContainer">
						<div >
								<img className="sponsorImage" src={sponsorImage} alt={sponsorImageAlt}/>
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
										<SponsorCard
												sponsorImage={devBrightLogo}
												sponsorImageAlt="DevBright Logo"/>
								</div>
								<h2>Gold Sponsors</h2>
								<p>Spots still available!</p>
								<div className="sponsorsContainer"></div>
								<h2>Silver Sponsors</h2>
								<p>Spots still available!</p>
								<div className="sponsorsContainer"></div>
								<h3>Interested in becoming a sponsor?</h3>
								<a href={sponsorshipPacket} target="_blank" rel="noopener noreferrer" className="whiteLink">See here for details.</a>
						</div>
				);
		}
}