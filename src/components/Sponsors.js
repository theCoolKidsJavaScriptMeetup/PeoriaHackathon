import React, {Component} from 'react';
import devBrightLogo from '../assets/DevBright_Logo.png';
import rclLogo from '../assets/RCL_WHITE.png';
import civicCenterlogo from '../assets/CivicCenterLogo.png';
import artsPartnerslogo from '../assets/Arts-Partners-Logo.png';
import goodenergylogo from '../assets/GoodEnergyLogo.png';
import CoPlogo from '../assets/CoP-logo.png';
import sponsorshipPacket from '../assets/SponsorshipPacket.pdf'
import '../sponsors.css'

const SponsorCard = ({sponsorImage, sponsorImageAlt}) => {
	return (
		<div key={sponsorImageAlt} className="sponsorContainer">
			<div>
				<img className="sponsorImage" src={sponsorImage} alt={sponsorImageAlt}/>
			</div>
		</div>
	);
}

const SponsorLevelCard = ({sponsorLevel, sponsors, sponsorLevelAvailable}) => { 
	return (
		<div className="sponsorCard">
			<div className="sponsorCardBorder">
				<div className="sponsorLevelTitle">{sponsorLevel}</div>
				{sponsors.length > 0 ? sponsors.map(sponsor => (
					<SponsorCard sponsorImage={sponsor.sponsorImage} sponsorImageAlt={sponsor.sponsorImageAlt} />
				)) : null }
				<div>
					{sponsorLevelAvailable === undefined ? null : <p className="openSponsorSpots">Spots still available!</p>}
				</div>
			</div>
		</div>
	);
}

const goldSponsors = [
	{
		sponsorImage: goodenergylogo,
		sponsorImageAlt: "Good Energy Logo"
	}
]

const silverSponsors = [
]

const platinumSponsor = [
	{
		sponsorImage: devBrightLogo,
		sponsorImageAlt: "DevBright Logo"
	}
]

const partners = [
	{
		sponsorImage:CoPlogo,
		sponsorImageAlt:"City of Peoria Logo"
	},
	{
		sponsorImage: civicCenterlogo,
		sponsorImageAlt: "Civic Center Logo"
	}, 
	{
		sponsorImage: rclLogo,
		sponsorImageAlt:"River City Labs"
	}, 
	{
		sponsorImage: artsPartnerslogo,
		sponsorImageAlt:"Arts Partners Logo"
}]

export default class Sponsors extends Component {
		render() {
				return (
					<div className="Content center-text">
						<SponsorLevelCard sponsorLevel="Platinum Sponsor" sponsors={platinumSponsor} />
						<SponsorLevelCard sponsorLevel="Gold Sponsors" sponsors={goldSponsors} sponsorLevelAvailable="true"/>
						<SponsorLevelCard sponsorLevel="Silver Sponsors" sponsors={silverSponsors} sponsorLevelAvailable="true"/>
						<SponsorLevelCard sponsorLevel="Partners" sponsors={partners} />
						<div className="interestedSponsor">Interested in becoming a sponsor of the Peoria Civic Hackathon? <a href={sponsorshipPacket} target="_blank" rel="noopener noreferrer" className="whiteLink">See here for details.</a></div>
					</div>
				);
		}
}