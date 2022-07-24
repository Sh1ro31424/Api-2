//Destructuracion de objetos 
const { request, response } = require('express');
const { pool } = require('../db/conexion');
const handle = require('../helpers/handlersErrors');

const GET_ALL_QUERY = "SELECT * FROM usuarios WHERE eliminado = false";

const getUsuarios = async (request, response) => {
try {
    const respuesta = await pool.query("SELECT * FROM usuarios WHERE eliminado = false");
    response.json(respuesta.rows);
} catch (error) {
    handle.callbackErrorNoControlado(error,response)
}

}

// const getUsuarios = (request, response) => {
//     console.log("@getUsuarios");
//     try {      
//         pool.query(GET_ALL_QUERY,(error, results) => {
//                 if (error) {
//                     handle.callbackError(error, response);                    
//                     return;
//                 }
//                 let usuarios = results.rows;                
//                 response.status(200).json(usuarios);
//             });
//     } catch (e) {
//         handle.callbackErrorNoControlado(e, response);
//     }
// };

module.exports = {
    getUsuarios
}