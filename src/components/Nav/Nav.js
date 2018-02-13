import React, { Component } from 'react';


export default class Nav extends Component {
    constructor() {
        super()

    }

    componentDidMount() {
        console.log("get the data from db, set it on state")
    }

    render() {
        return (
            <ul className="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Menu</a></li>
                <li id="order-now-button"><a href="#home">ORDER NOW</a></li>
            </ul>
        )
    }
}