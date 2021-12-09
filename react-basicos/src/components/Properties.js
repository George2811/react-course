import React from "react";
import PropTypes from "prop-types";

export default function Properties(props){
    return(
        <div>
            <h2>{props.msg}</h2>
            <ul>
                <li>{props.num}</li>                
                <li>{props.booleano? 'True':'False'}</li>
                <li>{props.arr.join(' - ')}</li>
                <li>{props.obj.name + ' - ' + props.obj.age + ' - ' + props.obj.email}</li>
                <li>{props.arr.map(props.function).join(' - ')}</li>
                <li>{props.reactElement}</li>
                <li>{props.reactComponent}</li>
            </ul>
        </div>
    );
}

Properties.defaultProps = {
    msg: 'Las Props'
}

// npm i -s prop-types : add rules to properties, very useful
Properties.propTypes = {
    num: PropTypes.number.isRequired
}