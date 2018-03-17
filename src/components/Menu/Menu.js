import React from 'react';

export default class Menu extends React.Component {

    componentDidMount(){
        // fire call to backend to grab data from db
        
    }

    render(){
        return (
            <div id="#menu">
                <h1>This is the Menu. We got {JSON.stringify(this.props.offerings)}</h1>
            </div>
        )
    }

}
