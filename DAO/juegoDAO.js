const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "Juego"
const idCol = "idJuego"

const juegoDao = {
    cargarJuego(data) {
        cargar(tabla, data);
    },
    modificarJuego(data, id){
        modificar(tabla, data, idCol, id);
    },
    eliminarJuego(id){
        eliminar(tabla, idCol, id);
    },
    async buscarJuegoId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarJuegoIdItemBiblioteca(ids){
        val = await buscarTodo(tabla);
        vals = val.filter(elem => ids.includes(elem[idCol]));
        return vals
    },
    async buscarJuegos(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = juegoDao;