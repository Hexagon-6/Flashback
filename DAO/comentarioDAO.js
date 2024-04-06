const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "Comentario"
const idCol = "idComentario"

const comentarioDao = {
    cargarComentario(data) {
        cargar(tabla, data);
    },
    modificarComentario(data, id){
        modificar(tabla, data, idCol, id);
    },
    eliminarComentario(id){
        eliminar(tabla, idCol, id);
    },
    async buscarComentarioId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarComentarios(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = comentarioDao;