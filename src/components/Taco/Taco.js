import React, { Component } from 'react';

export default class  extends Component {
    render() {
        return (

                <section className="home-container-subtext">
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
                </section>
        );
    }
}