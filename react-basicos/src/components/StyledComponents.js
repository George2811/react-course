import React from 'react';
import styled, {css, ThemeProvider} from "styled-components"
// npm install --save styled-components
export default function StyledComponents(){
    let mainColor = "#db7093",
        mainAlphaColor80 = "#db709380";

    const setTransitionTime = (time) => `all ${time} ease-in-out`;

    const MyH4 = styled.h4`
        padding: 2rem;
        text-align: center;
        color: ${(props) => props.color};
        color: ${({color}) => color || '#000'}; // destructuring
        background-color: ${mainColor};
        transition: ${setTransitionTime('1s')};

        ${({isButton}) => isButton &&
        css`
            margin: auto;
            max-width: 50%;
            border-radius: .25rem;
            cursor: pointer;        
        `}
        
        &:hover {
            background-color: ${mainAlphaColor80};
        }
    `;

    const light = {
        color: "#222",
        bgColor: "#DDD",
    }
    const dark = {
        color: "#DDD",
        bgColor: "#222",
    }
    
    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor};

    `;

    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `;

    return(
        <>
            <h3>Styled-Components</h3>
            <MyH4>Hi! I´m a stylish H4 with styled-components</MyH4>
            <MyH4 color="#61dafb">Hi! I´m a stylish H4 with styled-components</MyH4>
            <MyH4 isButton>Hi! I´m a stylish H4 like button</MyH4>
            <ThemeProvider theme={light}>
                <Box>I'm a light box</Box>
                <BoxRounded>I'm a rounded light box</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>I'm a dark box</Box>                
                <BoxRounded>I'm a rounded dark box</BoxRounded>
            </ThemeProvider>
        </>
    );

}