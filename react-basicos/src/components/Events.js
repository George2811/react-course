import React, {Component} from "react";

export class EventsEs6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }

        this.sum = this.sum.bind(this); // bind allows the sum() function to use the word 'this', as a class reference
        this.rest = this.rest.bind(this);
    }

    sum(){
        console.log("Sum");
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    rest(){
        this.setState({
            counter: this.state.counter - 1,
        });
    }
    render(){
        return(
            <div>
                <h4>Events in Class Components ES6</h4>
                <nav>
                    <button onClick={this.sum}>+</button>
                    <button onClick={this.rest}>-</button>
                </nav>
                <h6>{this.state.counter}</h6>
            </div>
        );
    }
}

// Porperties Initializer
export class EventsEs7 extends Component{

    state = {
        counter: 0,
    }
 
    // Arrow functions, the 'this' is inherited, therefore bind () is not needed
    sum = (e) => {
        console.log("Sum");
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    rest = (e) => {
        this.setState({
            counter: this.state.counter - 1,
        });
    }
    render(){
        return(
            <div>
                <h4>Events in Class Components ES7</h4>
                <nav>
                    <button onClick={this.sum}>+</button>
                    <button onClick={this.rest}>-</button>
                </nav>
                <h6>{this.state.counter}</h6>
            </div>
        );
    }
}


// Events only work for JSX elements, not for components we create
// Thats why we pass events as props
function Btn(props){
    return <button onClick={props.myOnClick}>Btn as a Component</button>;
}

export class MoreAboutEvents extends Component{
    handleClick = (e, msg) => {
        console.log(e); // this is the event handle by React
        console.log(e.nativeEvent); // this is the native event from Vanilla JavaScript
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(msg);
    }

    render(){
        return(
            <div>
                <h4>More about Events</h4>
                {/*<button onClick={this.handleClick}>Hi</button>*/}
                {/*To pass additional parameters, we have to encapsulate the event in another event, now the ex event is a function*/}
                <button onClick={(e) => this.handleClick(e, 'Passing message from Event')}>Hi</button>
                {/* Custom Event */}
                {/*<Btn onClick={(e) => this.handleClick(e, 'Passing message from Event')} /> It´s wrong */}
                <Btn myOnClick={(e) => this.handleClick(e, 'Passing message from Event')} />
            </div>
        );
    }
}