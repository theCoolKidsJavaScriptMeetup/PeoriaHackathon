import React, { Component } from 'react';

import '../faq.css';

export default class FaqCard extends Component {
  render() {
    return (
    	<div className="FaqCard">
        	{this.props.children}
        </div>
    );
  }
}
