import React, { Component } from 'react';

var divStyle = {
  color: "#000"
};

var sponsorContainer = {
  display: "flex",
  flexDirection: "row",
  background: "#eee",
  width: "770px",
  margin: "30px auto",
  padding: "18px",
};

var sponsorImage = {
  width: "500px",
  height: "400px",
};

var sponsorTitle = {
  flex: "none"
};

var sponsorBlurb = {
  flex: "none"
};

var flexColumn = {
  flexDirection: "column",
};

export default class Sponsor extends Component {
	render () {
		return (
			<div className="sponsorsContainer">
				<div className="sponsorContainer" style={sponsorContainer}>
					<div className="sponsorImage" style={sponsorImage}>
						<iframe src="https://giphy.com/embed/m1y5Iver1GNR6" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/badass-bad-ass-m1y5Iver1GNR6">via GIPHY</a></p>
					</div>
					<div className="flexColumn">
						<div className="sponsorTitle" style={sponsorTitle}>
							<h1 style={divStyle}>O RLY?</h1>
						</div>
						<div className="sponsorBlurb" style={sponsorBlurb}>
							<h3 style={divStyle}>DEAL WITH IT. DEAL WITH IT. DEAL WITH IT. DEAL WITH IT. DEAL WITH IT.</h3>
						</div>
					</div>
				</div>
				
				<div className="sponsorContainer" style={sponsorContainer}>
					<div className="sponsorImage" style={sponsorImage}>
						<iframe src="https://giphy.com/embed/3o7TKpAPh1MAN05xfy" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/studiosoriginals-wrestling-josh-freydkis-3o7TKpAPh1MAN05xfy">via GIPHY</a></p>
					</div>
					<div className="flexColumn">
						<div className="sponsorTitle" style={sponsorTitle}>
							<h1 style={divStyle}>O RLY?</h1>
						</div>
						<div className="sponsorBlurb" style={sponsorBlurb}>
							<h3 style={divStyle}>DEAL WITH IT. DEAL WITH IT. DEAL WITH IT. DEAL WITH IT. DEAL WITH IT.</h3>
						</div>
					</div>
				</div>

				<div className="sponsorContainer" style={sponsorContainer}>
					<div className="sponsorImage" style={sponsorImage}>
						<iframe src="https://giphy.com/embed/fDzM81OYrNjJC" width="480" height="286" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/happy-excited-shocked-fDzM81OYrNjJC">via GIPHY</a></p>
					</div>
					<div className="flexColumn">
						<div className="sponsorTitle" style={sponsorTitle}>
							<h1 style={divStyle}>O RLY?</h1>
						</div>
						<div className="sponsorBlurb" style={sponsorBlurb}>
							<h3 style={divStyle}>DEAL WITH IT. DEAL WITH IT. DEAL WITH IT. DEAL WITH IT. DEAL WITH IT.</h3>
						</div>
					</div>
				</div>
			</div>
		)
	}
}