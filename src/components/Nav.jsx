import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';

function Nav({ onSearch }) {
    return (
        <div className={styles.navContainer}>
            <div className={styles.routeContainer}>
                <NavLink className={styles.link} to='/home'><h1>Home</h1></NavLink>
                <NavLink className={styles.link} to='/about'><h1>About</h1></NavLink>
                <NavLink className={styles.link} to='/favorites'><h1>Favorites</h1></NavLink>
            </div>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav