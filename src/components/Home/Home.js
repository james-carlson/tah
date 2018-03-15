import React from 'react';
import Landing from './../Landing/Landing';
import About from './../About/About';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div>
                <Landing />
                <About />
            </div>
        )
    }

}

