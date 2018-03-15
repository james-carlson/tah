import React from 'react';
import Nav from './../Nav/Nav';

export default function Landing(props) {
    return (
        <section className="landing">
            <Nav />
            <section className="titles-background">
                <header className="title-1">TAMALES</header>
                <header className="title-2">@ WORK</header>
            </section>
        </section>
    );
}