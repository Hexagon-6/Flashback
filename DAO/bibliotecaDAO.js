const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "Biblioteca"
const idCol = "idBiblioteca"

const bibliotecaDao = {
    cargarBiblioteca(data) {
        cargar(tabla, data);
    },
    modificarBiblioteca(data, id){
        modificar(tabla, data, idCol, id);
    },
    eliminarBiblioteca(id){
        eliminar(tabla, idCol, id);
    },
    async buscarBibliotecaId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarBibliotecaIdUsuario(id){
        val = await buscar(tabla, "idUsuario", id);
        return val;
    },
    async buscarBibliotecas(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = bibliotecaDao;