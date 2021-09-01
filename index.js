const express = require('express');

//Crear el servidor de express
const app = express();

//Escuchar pticiones
app.listen( 4000, () => {
    console.log( `Servidor corriendo en puerto ${4000}` );
});