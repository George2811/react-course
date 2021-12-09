import React, {useState, useEffect} from "react";

export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => { // This useEffect only works when the variable scrollY  is modificated
        //console.log("Moving Scroll");

        const detectScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectScroll);
    }, [scrollY]);

    useEffect(() => { // This useEffect works like Vue created() function
        console.log("Mounting Phase");
    }, []);

    useEffect(() => {
        return () => {
            console.log("Disassembly Phase");            
        }
    }, []);

    return(
        <>
            <h4>Hello from Scroll Hooks Component {scrollY} px</h4>
        </>
    );

}