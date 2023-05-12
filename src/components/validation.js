

const validation = (userData) => {

    let errors = {};

    if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = "No es un email valido";
    }
    if (!userData.email) {
        errors.email = "Este campo no puede estar vacio";
    }
    if (userData.email.length > 35) {
        errors.email = "No puede ser mayor a 35 caracteres";
    }

    if (!userData.password.match(/\d/)) {
        errors.password = "Debe contener al menos un numero";
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
    }
    return errors;
}

export default validation;