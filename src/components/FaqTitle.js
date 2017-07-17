import React, { Component } from 'react';

import '../faq.css';

export default class FaqTitle extends Component {
  render() {
    return (
    	<div className="FaqQuestion">
        	{this.props.children}
        </div>
    );
  }
}
