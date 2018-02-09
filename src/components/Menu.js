import React, {Component} from 'react';

export default class Menu extends Component {
    constructor(){ 
        super()

    }

    componentDidMount(){
        console.log("get the data from db, set it on state")
    }

    render(){
        return(
            <div className="menu">
            "Here be the menu."
            </div>
        )
    }
}
