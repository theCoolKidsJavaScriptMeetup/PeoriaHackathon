import React, {Component} from 'react';
import devBrightLogo from '../assets/DevBright_Logo.png';
import rclLogo from '../assets/RCL_WHITE.png';
import civicCenterlogo from '../assets/CivicCenterLogo.png';
import artsPartnerslogo from '../assets/Arts-Partners-Logo.png';
import sponsorshipPacket from '../assets/SponsorshipPacket.pdf'

const SponsorCard = ({sponsorName, sponsorImage, sponsorImageAlt}) => {
		return (
				<div className="sponsorContainer">
						<div>
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
						<div className="Content center-text">
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
								<h3>In Partnership With...</h3>
								<div className="sponsorsContainer">
										<SponsorCard
												sponsorImage={civicCenterlogo}
												sponsorImageAlt="Civic Center Logo"/>
								</div>
								<div className="sponsorsContainer">
										<SponsorCard
												sponsorImage={rclLogo}
												sponsorImageAlt="River City Labs"/>
								</div>
								<div className="sponsorsContainer">
										<SponsorCard
												sponsorImage={artsPartnerslogo}
												sponsorImageAlt="Arts Partners"/>
								</div>
								<div className="interestedSponsor">Interested in becoming a sponsor of the Peoria Civic Hackathon? <a href={sponsorshipPacket} target="_blank" rel="noopener noreferrer" className="whiteLink">See here for details.</a></div>
						</div>
				);
		}
}