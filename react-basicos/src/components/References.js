import React, { useRef } from 'react';

// references are very useful when you need to modify a Dom element, but not re-render it
export default function References(){
    let refMenu = useRef(),
    refMenuBtn = useRef();

    const handleToggleMenu = (e) => {
        /*const $menu = document.getElementById("menu");

        if(e.target.textContent === "Menu"){
            e.target.textContent = "Close"
            $menu.style.display = "block"
        } else{
            e.target.textContent = "Menu"
            $menu.style.display = "none"
        }*/
 
        if(refMenuBtn.current.textContent === "Menu"){
            refMenuBtn.current.textContent = "Close"
            refMenu.current.style.display = "block"
        } else{
            refMenuBtn.current.textContent = "Menu"
            refMenu.current.style.display = "none"
        }
    }
    return(
        <>
            <h4>References</h4>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
                Menu
            </button>
            <nav id="menu" ref={refMenu} style={{display: "none"}}>
                <a href="#a">Secrtion 1</a>
                <br />
                <a href="#a">Secrtion 2</a>
                <br />
                <a href="#a">Secrtion 3</a>
                <br />
                <a href="#a">Secrtion 4</a>
                <br />
                <a href="#a">Secrtion 5</a>
            </nav>
        </>
    );
}
