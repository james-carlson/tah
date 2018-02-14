import React from 'react';
import Nav from '../Nav/Nav';

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
                    <div className="title-3">Delicious, authentic food for startups and students.</div>
                    <div className="title-3">Order online and we'll have it ready for you.</div>
                </div>
                <div className="home-container-subtext">
                    <div id="tacoWrapper">
                        <div className="shell top-layer">
                            <div className="shadow"></div>
                            <div className="dots"></div>
                            <div className="lip"></div>
                        </div>
                        <div id="fillings">
                            <div className="base_layer"></div>
                            <div className="mixin"></div>
                            <div className="condiment"></div>
                        </div>
                        <div className="shell bottom-layer"></div>
                    </div>
                </div>
                
            </div>
        )
    }

}

