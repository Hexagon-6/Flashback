const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "Foro"
const idCol = "idForo"

const foroDao = {
    cargarForo(data) {
        cargar(tabla, data);
    },
    modificarForo(data, id){
        modificar(tabla, data, idCol, id);
    },
    eliminarForo(id){
        eliminar(tabla, idCol, id);
    },
    async buscarForoId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarForos(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = foroDao;