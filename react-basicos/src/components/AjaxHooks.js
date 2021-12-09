import React, { useState, useEffect } from 'react';

function Pokemon({avatar, name}){
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks(){
    const [pokemons, setPokemons] = useState([]);
    // DO NOT convert into async the useEffect function
    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url),
            json = await res.json();

            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                json = await res.json();
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                };
                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        }
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);

    return(
        <>
            <h3>Async requests in Hooks</h3>
            {pokemons.length === 0 ? (
                <h3>Cargando...</h3>
            ) : (
                pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}></Pokemon>)
            )}
        </>
    );
}