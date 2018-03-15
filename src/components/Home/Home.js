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
            <div>
                <section className="home-bg">
                    <Nav />
                    <section className="home-container-text">
                        <div className="titles-background">
                            <header className="title-1">TAMALES</header>
                            <header className="title-2">@ WORK</header>
                        </div>
                    </section>
                </section>
                <section className="home-container-subtext">
                    <div style={{ width: "80%", margin: "auto" }}>
                        <div className="title-3">Or school. Or in meetings.</div>
                        <div className="title-3">Delicious, authentic food for startups and students.</div>
                        <div className="title-3">Order online and we'll have it ready for you.</div>
                    </div>
                </section>


            </div >
        )
    }

}

