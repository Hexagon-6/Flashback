class MensajeChat{
    constructor(idChat = 1, idUsuario = 1, texto = "'Buenos días'"){
        this.idChat = idChat;
        this.idUsuario = idUsuario;
        this.texto = texto;
    }
}

exports.MensajeChat = MensajeChat;