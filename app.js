/**
 * aplicacion con servidor del proyecto master en javascript
 */

 const express = require('express');
 const app = express();
 //const hbs = require('hbs');

app.get('/',(req,res)=>{
    res.send('programa iniciado');
});

app.listen(3000);
 console.log("inicio del programa...")