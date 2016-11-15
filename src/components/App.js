import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {

    static propTypes = {
        children: React.PropTypes.node.isRequired
    };

    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }

}
