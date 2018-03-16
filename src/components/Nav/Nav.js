import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    constructor() {
        super()

    }

    componentDidMount() {
        console.log("get the data from db, set it on state")
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li id="order-now-button"><Link to="/order">ORDER NOW</Link></li>
                </ul>
            </nav>
        )
    }
}