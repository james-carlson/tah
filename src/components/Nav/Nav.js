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
            <div className="nav">
                <div><a href="#home">Home</a></div>
                <div><a href="#home">About</a></div>
                <div><a href="#home">Menu</a></div>
                <div id="order-now-button"><a href="#home">ORDER NOW</a></div>
            </div>
        )
    }
}