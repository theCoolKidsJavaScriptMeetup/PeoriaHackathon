import React, {Component} from 'react';
import devBrightLogo from '../assets/DevBright_Logo.png';
import rclLogo from '../assets/RCL_WHITE.png';
import civicCenterlogo from '../assets/CivicCenterLogo.png';
import artsPartnerslogo from '../assets/Arts-Partners-Logo.png';
import goodenergylogo from '../assets/GoodEnergyLogo.png';
import sponsorshipPacket from '../assets/SponsorshipPacket.pdf'

const SponsorCard = ({sponsorName, sponsorImage, sponsorImageAlt}) => {
		return (
			<div className="sponsorContainer">
				<div>
					<img className="sponsorImage" src={sponsorImage} alt={sponsorImageAlt}/>
				</div>
			</div>
		);
}

export default class Sponsors extends Component {
		render() {
				return (
						<div className="Content center-text">
								<h2>Platinum Sponsor</h2>
								<SponsorCard
									sponsorImage={devBrightLogo}
									sponsorImageAlt="DevBright Logo"/>
								<h2>Gold Sponsors</h2>
								<div className="sponsorsContainer">
										<SponsorCard
												sponsorImage={goodenergylogo}
												sponsorImageAlt="Good Energy Logo"/>
								</div>
								<div className="sponsorsContainer"></div>
								<h2>Silver Sponsors</h2>
								<p>Spots still available!</p>
								<div className="sponsorsContainer"></div>
								<h3>In Partnership With Ignite Peoria and...</h3>
								<div className="partnersContainer">
										<SponsorCard
												sponsorImage={civicCenterlogo}
												sponsorImageAlt="Civic Center Logo"/>
								
										<SponsorCard
												sponsorImage={rclLogo}
												sponsorImageAlt="River City Labs"/>
								
										<SponsorCard
												sponsorImage={artsPartnerslogo}
												sponsorImageAlt="Arts Partners"/>
								</div>
								<div className="interestedSponsor">Interested in becoming a sponsor of the Peoria Civic Hackathon? <a href={sponsorshipPacket} target="_blank" rel="noopener noreferrer" className="whiteLink">See here for details.</a></div>
						</div>
				);
		}
}