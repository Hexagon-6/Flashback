const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "ItemRecientes"
const idCol = "idItemRecientes"

const itemRecientesDao = {
    cargarItemRecientes(data) {
        cargar(tabla, data);
    },
    modificarItemRecientes(data, id){
        modificar(tabla, data, idCol, id);
    },
    eliminarItemRecientes(id){
        eliminar(tabla, idCol, id);
    },
    async buscarItemRecientesId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarItemRecientess(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = itemRecientesDao;