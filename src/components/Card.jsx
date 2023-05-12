import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from './redux/actions.js';
import { useState, useEffect } from 'react';


export function Card({ id, name, species, gender, image, origin, status, removeFav, addFav, onClose, myFavorites }) {


   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         removeFav(id);
         setIsFav(false);
      } else {
         addFav({ id, name, species, gender, image, origin, status, onClose });
         setIsFav(true);
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);



   return (
      <div className={styles.divContainer}>
         <img src={image} alt='' />
         <NavLink className={styles.NavLink} to={`/detail/${id}`}><h2 className={styles.title}>{name}</h2></NavLink>
         <p className={styles.text}>{status}</p>
         <p className={styles.text}>{species}</p>
         <p className={styles.text}>{gender}</p>
         <p className={styles.text}>{origin}</p>
         <button className={styles.button} onClick={() => onClose(id)}>Delete</button>
         {
            isFav ? (
               <button className={styles.fav} onClick={handleFavorite}>🌟</button>
            ) : (
               <button className={styles.fav} onClick={handleFavorite}>⭐</button>
            )
         }
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
};

export default connect(
   mapStateToProps, // Me permite traer info del estado global y que el componente lo reciba por 
   mapDispatchToProps) // Me permite despachar acciones.
   (Card)