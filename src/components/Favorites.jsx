import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import styles from './Favorites.module.css';
import Nav from './Nav.jsx';


export function Favorites({ myFavorites }) {

    if (!myFavorites) {
        return <div>Loading...</div> // o cualquier otro mensaje o spinner que quieras mostrar
    }

    return (
        <>
            <Nav />
            <div className={styles.favContainer}>
                {
                    myFavorites.map(character => {
                        return (
                            <Card
                                key={character.id}
                                id={character.id}
                                name={character.name}
                                status={character.status}
                                species={character.species}
                                gender={character.gender}
                                origin={character.origin.name}
                                image={character.image}
                                onClose={character.onClose}
                            />
                        )
                    })
                }
            </div>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(
    mapStateToProps, null // Me permite traer info del estado global y que el componente lo reciba por props.
) // Me permite despachar acciones.
    (Favorites)

