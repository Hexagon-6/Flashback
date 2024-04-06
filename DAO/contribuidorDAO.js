const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "Contribuidor"
const idCol = "idContribuidor"

const contribuidorDao = {
    async cargarContribuidor(data) {
        await cargar(tabla, data);
    },
    async modificarContribuidor(data, id){
        await modificar(tabla, data, idCol, id);
    },
    async eliminarContribuidor(id){
        await eliminar(tabla, idCol, id);
    },
    async buscarContribuidorId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarContribuidorIdUsuario(id){
        val = await buscar(tabla, "idUsuario", id);
        return val;
    },
    async buscarContribuidors(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = contribuidorDao;