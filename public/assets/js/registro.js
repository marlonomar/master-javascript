$(document).ready(function(){
    let registro=()=>{

        let regis = `
          <div id="formulario_registro">
               <h2>Formulario de Registro</h2>
               <input class="form-control" type="text" placeholder="ingrese su nombre" id="name">
               <input class="form-control" type="text" placeholder="ingrese su apellido" id="apellido">
               <input class="form-control" type="text" placeholder="ingrese su CPF" id="cpf">
               <input class="form-control" type="email" placeholder="ingrese su email" id="mail">
               <input class="form-control" type="password" placeholder="cree una contrasena" id="key">
               <input class="form-control" type="number" placeholder="ingrese su edad" id="edad">
               <select class="form-control" id="sexo">
               <option value="null">Sexo</option>
               <option value="hombre">Hombre</option>
               <option value="mujer">Mujer</option>
               </select>
               <button class="btn" id="btn_form">Registrar</button>
          </div>
        `;
        $("#registro").append(regis);
        ficha_registro()
   }
   
   
   function ficha_registro(){
      $("button#btn_form").on('click',function(){
       let nombre = $("#name").val();
       let apellido = $("#apellido").val();
       let cpf = $("#cpf").val();
       let edad = $("#edad").val();
       let sexo = $("#sexo").val();
       let mail = $("#mail").val();
       let key = $("#key").val();
       localStorage.setItem('name',nombre);
       localStorage.setItem('apellido',apellido);
       localStorage.setItem('cpf',cpf);
       localStorage.setItem('edad',edad);
       localStorage.setItem('mail',mail);
       localStorage.setItem('key',key);
       localStorage.setItem('sexo',sexo);
       carnet();
      })
   }
   
   let carnet=()=>{
   $("#formulario_registro").empty();
   let nombre = localStorage.getItem('name');
   let apellido = localStorage.getItem('apellido');
   let cpf = localStorage.getItem('cpf');
   let edad = localStorage.getItem('edad');
   let sexo = localStorage.getItem('sexo');
   
   let ficha = `
        <div id="ficha_registro">
       
        <h3 id='ficha_name'>Nombre: ${nombre}</h3>
        <h3 id='ficha_apellido'>Apellido: ${apellido}</h3>
        <h3 id='ficha_cpf'>CPF: ${cpf}</h3>
        <h3 id='ficha_edad'>Edad: ${edad}</h3>
        <h3 id='ficha_sexo'>Sexo: ${sexo}</h3>
        </div>
   `;
   
   $("#formulario_registro").append("<img src='assets/img/carnet.jpg' id='carnet'>");
   $("#formulario_registro").append(ficha)
   if(sexo =="hombre"){
    $("#formulario_registro").append("<img class='ficha_avatar'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSioCg7de-8aJQjmWHd5xVtioOHjI1DKU7-3Mh0WpbA6h6WEej2BQ'>");
   }if(sexo =="mujer"){
    $("#formulario_registro").append("<img class='ficha_avatar'src='https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png'>");   
   }if(sexo=='null'){
       alert("ingrese su sexo")
   }
   }
   
   registro()
})