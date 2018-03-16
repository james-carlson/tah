import React from 'react';
import Nav from '../Nav/Nav';
export default class OrderForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            order: {},
        }
    }

    render() {
        return (
            <div>
                <Nav />
                <section className="orderform">
                <form>
                <div className="orderform" id="title">Let's get your order!</div>
                <div className="prompt">Name: <input label="name" placeholder="enter your name here" /></div>
                <div>What do you want to order today?</div>
                <div>When would you like to pick it up?</div>
                <div>How would you like to pay?</div>
                </form>
                </section>
            </div>
        )
    }
}