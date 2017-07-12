import React, { Component } from 'react';

import Button from './Button';
import RenderOptions from './RenderOptions';


import logo from '../logo.svg';
import '../App.css';

export default class Sponsors extends Component {
  render() {
    return (
      <div className="Content">
        <h2>Thank you sponsors!!! You da bomb.</h2>
      	<RenderOptions />
      </div>
    );
  }
}