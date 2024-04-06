const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "Estado"
const idCol = "idEstado"

const estadoDao = {
    cargarEstado(data) {
        cargar(tabla, data);
    },
    modificarEstado(data, id){
        modificar(tabla, data, idCol, id);
    },
    eliminarEstado(id){
        eliminar(tabla, idCol, id);
    },
    async buscarEstadoId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarEstados(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = estadoDao;