express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const usuarioDAO = require('./DAO/usuarioDAO');
const usuario = require('./Modelo/usuarioClase');
const chatDAO = require('./DAO/chatDAO');
const chat = require('./Modelo/chatClase');
const juegoDAO = require('./DAO/juegoDAO');
const juego = require('./Modelo/juegoClase');
const estadoDAO = require('./DAO/estadoDAO');
const estado = require('./Modelo/estadoClase');
const foroDAO = require('./DAO/foroDAO');
const foro = require('./Modelo/foroClase');
const formularioDAO = require('./DAO/formularioDAO');
const formulario = require('./Modelo/formularioClase');
const contribuidorDAO = require('./DAO/contribuidorDAO');
const contribuidor = require('./Modelo/contribuidorClase');
const bibliotecaDAO = require('./DAO/bibliotecaDAO');
const biblioteca = require('./Modelo/bibliotecaClase');
const itemBibliotecaDAO = require('./DAO/itemBibliotecaDAO');
const itemBiblioteca = require('./Modelo/itemBibliotecaClase');

app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'MossHornet3',
    resave: false,
    saveUninitialized: false,
  }));
port = 3000;

app.get('/invalid', (req, res) => {
    res.sendFile(path.join(__dirname, '/invalid.html'));
})

app.get('/logo', (req, res) => {
    res.sendFile(path.join(__dirname, '/fb.png'));
})


app.get('/', (req, res) => {
    if(!!req.session.idUsuario){
        res.redirect('/main');
    }
    else res.sendFile(path.join(__dirname, '/login.html'));
})
app.get('/loginstyle', (req, res) => {
    res.sendFile(path.join(__dirname, '/style/login.css'));
})
app.post('/loginform', (req, res) => {
    let r = req.body;
    let usr;

    usuarioDAO.buscarUsuarios()
    .then(e => {
        usr = e.find(user => user.email === r.email && user.contraseña === r.password);
        
        if (usr != undefined){
            req.session.idUsuario = usr.idUsuario;
            res.redirect('/main');
        }
        else{
            res.redirect('/invalid');
        }
    })
    .catch(err => {
        console.error(err);
        res.redirect('/');
    }); 
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/register.html'));
})
app.get('/registerstyle', (req, res) => {
    res.sendFile(path.join(__dirname, '/style/register.css'));
})
app.post('/registerform', (req, res) => {
    let r = req.body;
    let n = new usuario.Usuario(`'${r.email}'`, `'${r.password}'`, `'${r.usrnm}'`, undefined, false);

    usuarioDAO.cargarUsuario(n)
    .then(usuarioDAO.buscarUsuarios)
    .then(e => {
        req.session.idUsuario = e[e.length - 1].idUsuario;
        res.redirect('/main');
    })
    .catch(err => {
        console.error(err);
        res.redirect('/register');
    });   
})


app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, '/main.html'));
})
app.get('/mainstyle', (req, res) => {
    res.sendFile(path.join(__dirname, '/style/main.css'));
})



app.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname, '/perfil.html'))
})
app.get('/perfilstyle', (req, res) => {
    res.sendFile(path.join(__dirname, '/style/perfil.css'));
})


app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, '/formulario.html'));
})
app.get('/formulariostyle', (req, res) => {
    res.sendFile(path.join(__dirname, '/style/formulario.css'));
})


app.get('/adminconfig', (req, res) => {
    usuarioDAO.buscarUsuarioId(req.session.idUsuario)
    .then((user) => {
        if(user.esAdmin){
            res.sendFile(path.join(__dirname, '/adminconfig.html'));
        }
        else{
            res.redirect('/invalid');
        }
    })
    .catch(e => console.error(e));
})
app.get('/adminstyle', (req, res) => {
    res.sendFile(path.join(__dirname, '/style/admin.css'));
})


app.get('/juego', (req, res) => {
    res.sendFile(path.join(__dirname, '/juego.html'));
})
app.get('/juegostyle', (req, res) => {
    res.sendFile(path.join(__dirname, '/style/juego.css'));
})


app.get('/biblioteca', (req, res) => {
    res.sendFile(path.join(__dirname, '/biblioteca.html'));
})
app.get('/bibliotecastyle', (req, res) => {
    res.sendFile(path.join(__dirname, '/style/biblioteca.css'));
})



app.post('/db', (req, res) => {
    switch(req.body.tbl){
        case 'Usuario':
            usuarioDAO.buscarUsuarios().then(rows => res.json(JSON.stringify(rows)));
            break;
        case 'Estado':
            estadoDAO.buscarEstados().then(rows => res.json(JSON.stringify(rows)));
            break;
        case 'Foro':
            foroDAO.buscarForos().then(rows => res.json(JSON.stringify(rows)));
            break;
        case 'Chat':
            chatDAO.buscarChats().then(rows => res.json(JSON.stringify(rows)));
            break;
        case 'Juego':
            juegoDAO.buscarJuegos().then(rows => res.json(JSON.stringify(rows)));
            break;
        case 'Formulario':
            formularioDAO.buscarFormularios().then(rows => res.json(JSON.stringify(rows)));
            break;
    }
})
app.delete('/db', (req, res) => {
    switch(req.body.tbl){
        case 'Usuario':
            usuarioDAO.eliminarUsuario(req.body.id).then(rows => res.send('Eliminado'));
            break;
        case 'Estado':
            estadoDAO.eliminarEstado(req.body.id).then(rows => res.send('Eliminado'));
            break;
        case 'Foro':
            foroDAO.eliminarForo(req.body.id).then(rows => res.send('Eliminado'));
            break;
        case 'Chat':
            chatDAO.eliminarChat(req.body.id).then(rows => res.send('Eliminado'));
            break;
        case 'Juego':
            juegoDAO.eliminarJuego(req.body.id).then(rows => res.send('Eliminado'));
            break;
        case 'Formulario':
            formularioDAO.eliminarFormulario(req.body.id).then(rows => res.send('Eliminado'));
            break;
    }
})


app.get('/dbprofiles', (req, res) => {
    usuarioDAO.buscarUsuarioId(req.session.idUsuario)
    .then(user => res.json(user))
    .catch(e => console.error(e));
})
app.post('/dbprofiles', (req, res) => {
    let r = req.body;
    if(r.usrnm){
        usuarioDAO.buscarUsuarioId(req.session.idUsuario)
        .then(user => {
            usuarioDAO.modificarUsuario(new usuario.Usuario(`'${user.email}'`, `'${user.contraseña}'`, `'${r.usrnm}'`, `'${user.fotoPerfil}'`, `'${user.esAdmin}'`), req.session.idUsuario)
            .then(v => res.redirect('/perfil'))
            .catch(e => console.error(e));
        })
        .catch(e => console.error(e)); 
    }
    if(r.photo){
        usuarioDAO.buscarUsuarioId(req.session.idUsuario)
        .then(user => {
            usuarioDAO.modificarUsuario(new usuario.Usuario(`'${user.email}'`, `'${user.contraseña}'`, `'${user.nombreUsuario}'`, `'${r.photo}'`, `'${user.esAdmin}'`), req.session.idUsuario)
            .then(v => res.redirect('/perfil'))
            .catch(e => console.error(e));
        })
        .catch(e => console.error(e)); 
    }
    if(r.password){
        usuarioDAO.buscarUsuarioId(req.session.idUsuario)
        .then(user => {
            usuarioDAO.modificarUsuario(new usuario.Usuario(`'${user.email}'`, `'${r.password}'`, `'${user.nombreUsuario}'`, `'${user.fotoPerfil}'`, `'${user.esAdmin}'`), req.session.idUsuario)
            .then(v => res.redirect('/perfil'))
            .catch(e => console.error(e));
        })
        .catch(e => console.error(e)); 
    } 
})


app.get('/dbjuegos', (req, res) => {
    juegoDAO.buscarJuegos()
    .then(juegos => res.json(juegos))
    .catch(e => console.error(e));
})
app.post('/dbjuegos', (req, res) => {
    let r = req.body[0];
    let n = new juego.Juego(`'${r.idFormulario}'`, `'${r.titulo}'`, `'${r.descripcion}'`, `'${r.dispositivo}'`, `'${r.emuladorRecomendado}'`, `'${r.categoria}'`, `'${r.archivo}'`);

    juegoDAO.buscarJuegos()
    .then(value => {
        if(value.find(e => e.idFormulario == r.idFormulario) == undefined){
            return true;
        } 
        else return false;
    })
    .then(val => {
        if(val){
            juegoDAO.cargarJuego(n);
        }
    })
    .then(e => res.send("Finalizado"))
    .catch(e => console.error(e));
})


app.get('/dbestados', (req, res) => {
    estadoDAO.buscarEstados()
    .then(estados => res.json(estados))
    .catch(e => console.error(e));
})


app.get('/dbforos', (req, res) => {
    foroDAO.buscarForos()
    .then(foros => res.json(foros))
    .catch(e => console.error(e));
})


app.post('/dbformularios', (req, res) => {
    r = req.body;
    if(!!req.session.idUsuario){
        contribuidorDAO.buscarContribuidorIdUsuario(req.session.idUsuario)
        .then(cont => {
            if(!cont){
                contribuidorDAO.cargarContribuidor(new contribuidor.Contribuidor(req.session.idUsuario))
                .then(e => console.log("Cargado"))
                .then(() => {
                    contribuidorDAO.buscarContribuidorIdUsuario(req.session.idUsuario)
                    .then(cont => cont.idContribuidor)
                    .then(id => {
                        formularioDAO.cargarFormulario(new formulario.Formulario(id, `'${r.titulo}'`, `'${r.descripcion}'`, `'${r.archivo}'`, `'${r.mail}'`, `'${r.nota}'`, `'${r.multimedia}'`, `'${r.categoria}'`, `'${r.emulador}'`, `'${r.dispositivo}'`))
                        res.redirect('/formulario');
                    })
                    .catch(e => console.error(e));
                })
                .catch(e => console.error(e));
            }
            else{
                formularioDAO.cargarFormulario(new formulario.Formulario(cont.idContribuidor, `'${r.titulo}'`, `'${r.descripcion}'`, `'${r.archivo}'`, `'${r.mail}'`, `'${r.nota}'`, `'${r.multimedia}'`, `'${r.categoria}'`, `'${r.emulador}'`, `'${r.dispositivo}'`))
                .then(carga => res.redirect('/formulario'))
                .catch(e => console.error(e));
            }
        })
        .catch(e => {
            console.error(e);
            res.redirect('/formulario');
        })
    }
})


app.get('/dbjugar', (req, res) => {
    juegoDAO.buscarJuegoId(req.session.idJuego)
    .then(juego => res.json(juego))
    .catch(e => console.error(e));
})
app.post('/dbjugar', (req, res) => {
    r = req.body;
    req.session.idJuego = r.idJuego;
    res.json({a: req.session.idJuego});
})


app.get('/dbbiblioteca', (req, res) => {
    bibliotecaDAO.buscarBibliotecaIdUsuario(req.session.idUsuario)
    .then(biblioteca => {
        itemBibliotecaDAO.buscarItemBibliotecas()
        .then(items => items.filter(item => item.idBiblioteca == biblioteca.idBiblioteca))
        .then(items => {
            juegoDAO.buscarJuegoIdItemBiblioteca(items.map(e => e.idJuego))
            .then(juegos => res.json(juegos))
            .catch(e => console.error(e));    
        })
        .catch(e => console.error(e));
    })
    .catch(e => console.error(e));
})
app.post('/dbbiblioteca', (req, res) => {
    r = req.body;
    bibliotecaDAO.buscarBibliotecaIdUsuario(req.session.idUsuario)
    .then(biblioteca => {
        itemBibliotecaDAO.cargarItemBiblioteca(new itemBiblioteca.ItemBiblioteca(biblioteca.idBiblioteca, req.session.idJuego))
        .then(res => console.log("Añadido"))
        .catch(e => console.error(error));
    })
    .catch(e => console.error(e))
})

app.listen(3000, () => console.log(`Running on port ${port}`)); //localhost