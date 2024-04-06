const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "Amistad"
const idCol = "idAmistad"

const amistadDao = {
    cargarAmistad(data) {
        cargar(tabla, data);
    },
    modificarAmistad(data, id){
        modificar(tabla, data, idCol, id);
    },
    eliminarAmistad(id){
        eliminar(tabla, idCol, id);
    },
    async buscarAmistadId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarAmistads(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = amistadDao;