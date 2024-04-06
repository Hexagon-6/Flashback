const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "Usuario"
const idCol = "idUsuario"

const usuarioDao = {
    async cargarUsuario(data) {
        await cargar(tabla, data);
    },
    async modificarUsuario(data, id){
        await modificar(tabla, data, idCol, id);
    },
    async eliminarUsuario(id){
        await eliminar(tabla, idCol, id);
    },
    async buscarUsuarioId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarUsuarios(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = usuarioDao;