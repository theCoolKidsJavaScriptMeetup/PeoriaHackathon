import React, {Component} from 'react';

export default class Button extends Component {
    render() {
        return (
            <div style={this.props.style} className={`button ${this.props.styleName || ''}`}>
                <a href={this.props.href || '#'}>{this.props.children}</a>
            </div>
        );
    }
}