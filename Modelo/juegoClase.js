class Juego{
    constructor(idFormulario = 1, titulo = "'Horsle'", descripcion = "'Como wordle pero la palabra siempre es horse'", dispositivo = "'atari2600'", emuladorRecomendado = "'Stella Atari Simulator'", categoria = "'Puzzle'", archivo = "'https://horsle.glitch.me/'"){
        this.idFormulario = idFormulario;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.dispositivo = dispositivo;
        this.emuladorRecomendado = emuladorRecomendado;
        this.categoria = categoria;
        this.archivo = archivo;
    }
}

exports.Juego = Juego;