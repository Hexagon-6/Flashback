class Estado{
    constructor(idUsuario = 1, texto = "'¡Acabo de terminar el último nivel de...'", archivo = "'https://random.imagecdn.app/360/360'"){
        this.idUsuario = idUsuario;
        this.texto = texto;
        this.archivo = archivo;
    }
}

exports.Estado = Estado;