import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <div className="button"><a href="#">{this.props.text}</a></div>
        );
    }
}
