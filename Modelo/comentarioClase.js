class Comentario{
    constructor(idEstado = 1, idUsuario = 1, texto = "'¡Sensacional!'"){
        this.idEstado = idEstado;
        this.idUsuario = idUsuario;
        this.texto = texto
    }
}

exports.Comentario = Comentario;