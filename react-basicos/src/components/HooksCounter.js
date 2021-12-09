import React, { useState } from 'react';

export default function HooksCounter(props){
    const [counter, setCounter] = useState(0);
    //console.log(useState());

    const sum = () => setCounter(counter + 1);

    const rest = () => setCounter(counter - 1);

    return(
        <>
            <h3>Hooks - useState</h3>
            <nav>
                <button onClick={sum}>+</button>
                <button onClick={rest}>-</button>
            </nav>
            <h4>{props.title} Counter</h4>
            <h4>{counter}</h4>
        </>
    );
}

HooksCounter.defaultProps = {
    title: "Clicks"
}