const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "Formulario"
const idCol = "idFormulario"

const formularioDao = {
    async cargarFormulario(data) {
        await cargar(tabla, data);
    },
    async modificarFormulario(data, id){
        await modificar(tabla, data, idCol, id);
    },
    async eliminarFormulario(id){
        await eliminar(tabla, idCol, id);
    },
    async buscarFormularioId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarFormularios(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = formularioDao;