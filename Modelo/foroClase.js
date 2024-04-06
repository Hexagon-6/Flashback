class Foro{
    constructor(idUsuario = 1, titulo = "'Una pregunta: ¿Qué opinan de...'", descripcion = "'He querido conocer la opinión de la comunidad desde hace tiempo y...'", archivos = "'https://random.imagecdn.app/360/360, https://random.imagecdn.app/360/360'", estaBloqueado = false, tema = "'Doom 1993'"){
        this.idUsuario = idUsuario;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.archivos = archivos;
        this.estaBloqueado = estaBloqueado;
        this.tema = tema;
    }
}

exports.Foro = Foro;