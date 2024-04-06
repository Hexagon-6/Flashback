const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "MensajeForo"
const idCol = "idMensajeForo"

const mensajeForoDao = {
    cargarMensajeForo(data) {
        cargar(tabla, data);
    },
    modificarMensajeForo(data, id){
        modificar(tabla, data, idCol, id);
    },
    eliminarMensajeForo(id){
        eliminar(tabla, idCol, id);
    },
    async buscarMensajeForoId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarMensajeForos(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = mensajeForoDao;