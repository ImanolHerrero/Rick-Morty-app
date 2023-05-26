var http = require('http'); // importamos el módulo http para poder trabajar con el protocolo
/* const data = require('./utils/data'); */
const { getCharById } = require('./controllers/getCharById');


http.createServer(function (req, res) { // Creamos una serie de events listener, que van a escuchar por requests que ocurren en este socket
    //Para crear un response empezamos escribiendo el header
    res.setHeader('Access-Control-Allow-Origin', '*');

    /*  if (req.url.includes("/rickandmorty/character")) {
         const id = req.url.split("/").at(-1);
         const characterFound = data.find((character) => {
             return character.id === +id
         })
         res.writeHead(200, { 'Content-Type': 'application/json' })
             .end(JSON.stringify(characterFound))
     } */

    if (req.url.includes("/rickandmorty/character")) {
        const id = req.url.split("/").at(-1);
        getCharById(res, +id);
        /*         res.writeHead(200, { 'Content-Type': 'application/json' })
                    .end(JSON.stringify(characterFound)) */
    }

}).listen(3001, 'localhost'); //Por último tenemos que especificar en que puerto y en qué dirección va a estar escuchando nuestro servidor