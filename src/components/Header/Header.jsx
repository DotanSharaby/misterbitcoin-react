
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <nav>
                    <Link to='/'>Home</Link>
                    <span> | </span>
                    <Link to='/contact'>Contacts</Link>
                </nav>
                <h2>Mister BitCoin</h2>
            </header>
        )
    }
}
