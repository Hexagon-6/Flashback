const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "ItemBiblioteca"
const idCol = "idItemItemBiblioteca"

const itemBibliotecaDao = {
    async cargarItemBiblioteca(data) {
        await cargar(tabla, data);
    },
    async modificarItemBiblioteca(data, id){
        await modificar(tabla, data, idCol, id);
    },
    async eliminarItemBiblioteca(id){
        await eliminar(tabla, idCol, id);
    },
    async buscarItemBibliotecaId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarItemBibliotecas(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = itemBibliotecaDao;