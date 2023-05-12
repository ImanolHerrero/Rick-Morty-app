import React from 'react';
import img from './assets/img-form4.png';
import styles from './Form.module.css';
import { useState, useEffect } from 'react';
import validation from './validation';

function Form({ login }) {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handlerFormsChange = (event) => {
        // const name = event.target.name
        // const value = event.target.value
        setUserData({
            ...userData,
            //    [name]: value
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

    };

    const handlerSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <div>

            <div className={styles.formContainer}>
                <div className={styles.imgContainer}>
                    <img src={img} alt="" srcset="" />
                </div>
                <div className={styles.inputContainer}>
                    <form onSubmit={handlerSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="text" value={userData.email} name="email" onChange={handlerFormsChange} placeholder='Ingrese email...' autoComplete='on' />
                        {errors.email !== '' ? <p>{errors.email}</p> : ''}
                        <label htmlFor="password">Password</label>
                        <input value={userData.password} type="password" placeholder='Ingrese una contraseña...' name='password' onChange={handlerFormsChange} autoComplete='on' />
                        {errors.password !== '' ? <p>{errors.password}</p> : ''}
                        <button type="submit">Login</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Form