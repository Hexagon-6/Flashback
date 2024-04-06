const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "MensajeChat"
const idCol = "idMensajeChat"

const mensajeChatDao = {
    cargarMensajeChat(data) {
        cargar(tabla, data);
    },
    modificarMensajeChat(data, id){
        modificar(tabla, data, idCol, id);
    },
    eliminarMensajeChat(id){
        eliminar(tabla, idCol, id);
    },
    async buscarMensajeChatId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarMensajeChats(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = mensajeChatDao;