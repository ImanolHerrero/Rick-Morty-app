import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      const nuevoValue = event.target.value;
      setId(nuevoValue);
      console.log(nuevoValue);
   }

   return (
      <div className={styles.navContainer}>
         <div className={styles.divContainer}>
            <input className={styles.input} type='search' value={id} onChange={handleChange} placeholder='Add ID...' />
            <button className={styles.button} onClick={() => onSearch(id)} >Add</button>
         </div>
      </div>
   );
}
