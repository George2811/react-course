import React, {Component} from "react";

export default class Father extends Component{
    state = {
        counter: 0,
    };

    increaseCounter = (e) => {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render(){
        return(
            <>
                {/* React works with unidirectional flow (father -> son), but is possible  (son -> father)*/}
                <h4>Components Communication</h4>
                <p>Counter: <b>{this.state.counter}</b></p>
                {/* We pass a father event as a props for the son*/}
                <Son increaseCounter={this.increaseCounter} msg="Msg for Son 1" />
                <Son increaseCounter={this.increaseCounter} msg="Msg for Son 2" />
            </>
            
        );
    }
}

function Son(props){
    return(
        <>
            <h6>{props.msg}</h6>
            {/* We get the props and use it as Event */}
            <button onClick={props.increaseCounter}>+</button>
        </>
    );
}