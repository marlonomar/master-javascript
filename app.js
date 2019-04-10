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

app.get('/',(req,res)=>{
    res.render('home');
});

hbs.registerPartials(__dirname + '/views/parciales');

//PAGINAS=======================================================================================

let render = (data)=>{
    app.get(`/${data}`,(req,res)=>{
        res.render(`${data}`);
    });
}

render('reloj');
render('registro');
render('sobreMi');



//SERVIDOR=======================================================================================
app.listen(3000,()=>{
    console.log("inicio del programa...")
    console.log("abrir localhost:3000...")
});

