import React, {Component} from "react";

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            /**/
        }
    }

    componentWillUnmount(){
        console.log(3, "The component have been removed from the DOM");
    }

    render(){
        return <h5>{this.props.hour}</h5>

    }
}

export default class Lifecycle extends Component{
    constructor(props){
        super(props);
        //console.log(0, "Component initializes, it isn´t in the DOM yet");

        this.state = {
            hour: new Date().toLocaleTimeString(),
            visible: false
        }

        this.timer = null;
    }

    // We generally consume Apis or make requests from here, as Vue created() function
    componentDidMount(){ 
        //console.log(1, "The component is already in the DOM");
    }

    // Before updating the rendering, prevState = value before change
    componentDidUpdate(prevProps, prevState){
        console.log(2, "State or Props have changed");
        console.log(prevProps);
        console.log(prevState);
    }

    tictac = () => {
        this.timer = setInterval(() => {
            this.setState({
                hour: new Date().toLocaleTimeString()
            });
        }, 1000);
    };

    start = (e) => {
        this.tictac();
        this.setState({
            visible: true
        });
    };

    stop = (e) => {
        clearInterval(this.timer);
        this.setState({
            visible: false
        });
    };


    render(){
        //console.log(4, "The component is drawn or redrawn");
        return(
            <>
                <h4>Components Class Lifecycle</h4>
                {/* Short circuit operators */}
                {/* or(||) if the left value is valid, is assigned, and(&&) if the left value is not valid, is assigned */}
                {this.state.visible && <Clock hour={this.state.hour} />}
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
            </>
        );
    }
}