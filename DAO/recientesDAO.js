const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "Recientes"
const idCol = "idRecientes"

const recientesDao = {
    cargarRecientes(data) {
        cargar(tabla, data);
    },
    modificarRecientes(data, id){
        modificar(tabla, data, idCol, id);
    },
    eliminarRecientes(id){
        eliminar(tabla, idCol, id);
    },
    async buscarRecientesId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarRecientess(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = recientesDao;