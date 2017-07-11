import React, { Component } from 'react';

import '../faq.css';

export default class FaqAnswer extends Component {
  render() {
    return (
    	<div className="FaqAnswer">
        	{this.props.children}
        </div>
    );
  }
}
