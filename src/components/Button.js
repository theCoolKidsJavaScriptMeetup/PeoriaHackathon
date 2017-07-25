import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Button extends Component {
    render() {
        return (
            <div style={this.props.style} className={`button ${this.props.styleName || ''}`}>
                <Link to={this.props.href || ''}>{this.props.children}</Link>
            </div>
        );
    }
}