import React from 'react';
import Nav from '../Nav/Nav';
import '../Home/Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className="home-bg">
                <Nav />
                <div className="home-container-text">
                    <div className="titles-background">
                        <div className="title-1">TAMALES</div>
                        <div className="title-2">@ WORK</div>
                    </div>
                </div>
                <div className="home-container-subtext">
                    <div className="title-3">Or school. Or in meetings.</div>
                    <div>Delicious, authentic food for startups and students.</div>
                    <div>Order online and we'll have it ready for you.</div>
                </div>
            </div>
        )
    }

}

