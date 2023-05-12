import React from 'react'
import Cards from './Cards.jsx';
import Nav from './Nav.jsx';
import { useState } from 'react';
import axios from 'axios';

function Home() {
    const [characters, setCharacters] = useState([]);
    const [characterIds, setCharacterIds] = useState(new Set());


    function onSearch(id) {

        const idNum = Number(id);
        if (characterIds.has(idNum)) {
            window.alert("Este personaje ya ha sido añadido");
            return;
        }

        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
                setCharacterIds((oldIds) => new Set([...oldIds, idNum]));
            } else {
                window.alert('¡No hay personajes con este ID!');
            }
        });
    }

    const onClose = (id) => {
        setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
    }
    return (
        <div>
            <Nav onSearch={onSearch} />
            <Cards characters={characters} onClose={onClose} />
        </div>

    )
}

export default Home