import React from 'react';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
export default class OrderForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            order: {},
        }
    }

    componentDidMount(){
        axios.get('api/getmenu').then(res => 
        this.setState({offerings: res.data}))
    }

    render() {
        return (
            <div>
                <Nav />
                <section className="orderform">
                    <form>
                        <div id="title">Tell us what you want!</div>
                        <div className="form-body">
                            <div className="form-row">
                                <div className="prompt"><b>Name</b></div>
                                <div className="prompt answer"><input label="name" placeholder="type your name here" /></div>
                            </div>
                            <div className="prompt"><div>Select from below:</div><Menu offerings={this.state.offerings} /> {/* menu selections should go to state */}
                            </div>
                            <div className="prompt">When would you like to pick it up? <input label="name" placeholder="enter your name here" /></div>
                            <div className="prompt">How would you like to pay? <input label="name" placeholder="enter your name here" /></div>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}