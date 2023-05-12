import React from 'react';
import Nav from './Nav';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Detail.module.css';

function Detail() {

    let { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);



    return (
        <div>
            <Nav />
            {
                character && <div>
                    <div className={styles.divContainer}>
                        <div>
                            <h1>{character.name}</h1>
                            <h3>Status: <span className={styles.span}>{character.status}</span></h3>
                            <h3>Specie: <span className={styles.span}>{character.species}</span></h3>
                            <h3>Gender: <span className={styles.span}>{character.gender}</span></h3>
                            <h3>Origin: <span className={styles.span}>{character.origin?.name}</span></h3>
                        </div>
                        <div>
                            <div className={styles.imgContainer}><img src={character.image} /></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Detail