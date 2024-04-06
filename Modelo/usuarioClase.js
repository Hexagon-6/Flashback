class Usuario{
    constructor(email = "'fback397@gmail.com'", contraseña = "'123'", nombreUsuario = "'FlashBackUser'", fotoPerfil = "'https://random.imagecdn.app/256/256'", esAdmin = false){
        this.email = email;
        this.contraseña = contraseña;
        this.nombreUsuario = nombreUsuario;
        this.fotoPerfil = fotoPerfil;
        this.esAdmin = esAdmin;
    }
}

exports.Usuario = Usuario;