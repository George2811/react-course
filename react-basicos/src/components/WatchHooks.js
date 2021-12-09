import React, {useEffect, useState} from "react";

function Clock({hour}){
    return <h3>{hour}</h3>;
}

export default function WatchHooks() {
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let timer;

        if(visible){
            timer = setInterval(() => {
                setHour(new Date().toLocaleTimeString());
            }, 1000);
        } else{
            clearInterval(timer);
            console.log("Cleaning....");
        }

        return () => {
            console.log("Disassembly Phase");
        }
    }, [visible]);

    return(
        <>
            <h4>Watch with Hooks</h4>
            {visible && <Clock hour={hour} />}
            <button onClick={() => setVisible(true)}>Start</button>
            <button onClick={() => setVisible(false)}>Stop</button>
        </>
    );
}