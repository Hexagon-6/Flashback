class MensajeForo{
    constructor(idForo = 1, idUsuario = 1, texto = "'Buen argumento. Sin embargo...'"){
        this.idForo = idForo;
        this.idUsuario = idUsuario;
        this.texto = texto;
    }
}

exports.MensajeForo = MensajeForo;