import React, { Component } from 'react';

type SoshalTextProps = {
  href: String,
  style: Object,
  children?: String
}

export default class Button extends Component {
    render() {
        return (
            <div style={this.props.style} className={`button ${ this.props.styleName || '' }`}><a href={this.props.href || '#'}>{this.props.children}</a></div>
        );
    }
}