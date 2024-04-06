class Formulario{
    constructor(idContribuidor = 1, titulo = "'Learn 2 Fly'", descripcion = "'En este juego flash el jugador debe ayudar a un pingüino a...'", archivo = "'https://jueguitosdemaquinitastrtr.com.ar/archivos/learn2fly'", email = "'mrcontribuciones1997@gmail.com'", nota = "'Creo que deberían guardar este juego en el archivo de FlashBack porque...'", multimedia = "'https://random.imagecdn.app/360/360'", categoria = "'Acción'", emuladorRecomendado = "'Stella Atari Simulator'", dispositivo = "'atari2600'"){
        this.idContribuidor = idContribuidor;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.archivo = archivo;
        this.email = email;
        this.nota = nota;
        this.multimedia = multimedia;
        this.categoria = categoria;
        this.emuladorRecomendado = emuladorRecomendado;
        this.dispositivo = dispositivo;
    }
}

exports.Formulario = Formulario;