import React, {Component} from "react";

export default class State extends Component{
    constructor(props){
        super(props);
        // state is immutable, that means the state can´t change directly, but it is possible through the setState function
        this.state = {
            counter: 0,
        };
        /*setInterval(() => {
            this.setState({
                counter: this.state.counter + 1 
            });
        }, 1000);*/
    }
    render(){
        return(
            <div>
                <h2>The State</h2>
                <p>{this.state.counter}</p>
            </div>
        );
    }
}