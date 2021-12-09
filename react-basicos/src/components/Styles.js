import React from 'react';
import "./Styles.css"
//import "./Styles.scss"
import moduleStyles from "./Styles.module.css"

export default function Styles(){
    let myStyles = {
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%"
    }

    // <h4 className="bg-sass">Styles with SASS</h4>  Now the sass version is incompatible, maybe in the future :/
    return(
    <section className="styles">
        <h3>CSS Styles in React</h3>
        <h4 className="bg-react">Styles in external CSSS sheet</h4>
        <h4 className="bg-react" style={{borderRadius:".25rem", margin: "2rem"}}>In Line Styles (style attribute)</h4>
        <h4 className="bg-react" style={myStyles}>In Line Styles</h4>
        <h4 className={moduleStyles.error}>Styles with Modules</h4>
        <h4 className={moduleStyles.success}>Styles with Modules</h4>
    </section>
    );
}