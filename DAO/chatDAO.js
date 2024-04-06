const {cargar, modificar, eliminar, buscar, buscarTodo} = require('./mainDAO.js');

const tabla = "Chat"
const idCol = "idChat"

const chatDao = {
    cargarChat(data) {
        cargar(tabla, data);
    },
    modificarChat(data, id){
        modificar(tabla, data, idCol, id);
    },
    eliminarChat(id){
        eliminar(tabla, idCol, id);
    },
    async buscarChatId(id){
        val = await buscar(tabla, idCol, id);
        return val;
    },
    async buscarChats(){
        val = await buscarTodo(tabla);
        return val;
    }
}

module.exports = chatDao;