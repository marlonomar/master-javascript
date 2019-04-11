/**
 * aplicacion con servidor del proyecto master en javascript
 */


//REQUIRES =====================================================================================
 const express = require('express');
 const app = express();
 const hbs = require('hbs');

//GETS===========================================================================================

app.use(express.static((__dirname + '/public')));

app.set('view engine', 'hbs');



hbs.registerPartials(__dirname + '/views/parciales');
//DATOS PAGINAS ================================================================================
    let datosHome = {
        estacion1: 'NIEVE',
        estacion2: 'SOL',
        estacion3: 'FLORES',
        estacion4: 'CALABAZAS',
        tituloSidebar:'registrese gratis',
        textoSidebar: 'ven a registrarte en nuestro site',
        sesion: 'Inicia sesion'
    }
//PAGINAS=======================================================================================

app.get('/',(req,res)=>{
    res.render('home',datosHome);
});

let render = (data)=>{
    app.get(`/${data}`,(req,res)=>{
        res.render(`${data}`);
    });
}

render('reloj');
render('registro');
render('sobreMi');



//SERVIDOR=======================================================================================

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("inicio del programa...")
    console.log("abrir localhost:3000...")
});

