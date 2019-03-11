$(document).ready(function(){
    //ocultar sliders
    ocultar_slide()
    function ocultar_slide(){
        $("li.slider").hide();
        $("li.slider:nth-child(1)").show();
    }
    //iconos de paginacion
    agregar_icono()
   function agregar_icono(){
        var circulos = $("#slider ul li img").length;
        for(i=1;i<=circulos;i++){
             $('ol.pagination').append("<li><div class='circulos' index="+[i]+"></div></li>")
        }
   }
   //paginacion automatica
   pagination_auto()
   function pagination_auto(){
       let imgItems = $("li div.circulos").length;
       let imgPos =1;

       $("div.left").on('click',function(){
            imgPos--
           if(imgPos < 1){
            imgPos = imgItems;
             }
             
            $("li.slider").hide();
            $("li.slider:nth-child("+imgPos+")").fadeIn();
            $("li div.circulos").removeClass('active_li')
            $("li div.circulos").eq(imgPos -1).addClass('active_li');
       })

       function slide(){
        imgPos++
        if(imgPos > imgItems){
            imgPos =1;
         }
         $("li div.circulos").removeClass('active_li')
        $("li.slider").hide();
        $("li.slider:nth-child("+imgPos+")").fadeIn();
        $("li div.circulos").eq(imgPos -1).addClass('active_li');
       }

       $("div.right").on('click',function(){
        slide()
        })

        setInterval(() => {
            slide()
        }, 50000);
    
   }
  //paginacion manual
   pagination()
   function pagination(){
    $(" li div.circulos").click(function(){
        var pos = $(this).attr('index');
        $("li.slider").hide();
        $("li.slider:nth-child("+pos+")").fadeIn();
        $("li div.circulos").removeClass('active_li')
        $(this).addClass('active_li');
   });
   }
   //informacion en json
   post ()
   function post (){
    var post =[
        {
            title:'prueba de titulo',
            data: new Date(),
            text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum."
            
        },
        {
         title:'prueba de titulo 1',
         data: new Date(),
         text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum."
         
     },
     {
         title:'prueba de titulo 2',
         data: new Date(),
         text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum."
         
     },
     {
         title:'prueba de titulo 3',
         data: new Date(),
         text :"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum."
         
     },
    ];
    //agregar articulos
    post.forEach((item,index) => {
        var posts = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.data}</span>
        <p>${item.text}</p>
        <a href="#" class="btn btn-sm">leer mas</a>
        </article>
        `;
 
        $("#post").append(posts);
    })
   }
   //cambiar tema
   theme()
   function theme(){

       $("div.temas div.tema").on('click',function(){
            let tema= $(this);
            if(tema.hasClass('invierno')){
                $("#themes").attr("href","blue.css");
            }
            if(tema.hasClass('otono')){
                $("#themes").attr("href","red.css");
            }
            if(tema.hasClass('verano')){
                $("#themes").attr("href","green.css");
            }
            if(tema.hasClass('primavera')){
                $("#themes").attr("href","pink.css");
            }
            var theme = $("#themes").attr('href');
            localStorage.setItem('colorTheme',theme)
       });
       var color =localStorage.getItem('colorTheme');
       $("#themes").attr("href",color);
   }
   // scroll
   subir()
   function subir(){
       $(".subir").on('click',function(){
           event.preventDefault();
           $("html,body").animate({
                scrollTop: 0
           },1000);
           return false;
       })
   }
   //login
   login()
   function login(){
       
       $("input[type='submit'].btn").on('click',function(){
        
        let email = $("#email").val();
        let clave = $("#clave").val();
        let usuario = localStorage.getItem('mail');
        let key = localStorage.getItem('key');
        let nombre = localStorage.getItem('name');
        function cerrar_sesion(){
            $("#cerrar").on('click',function(){
                localStorage.clear();
                location.reload();
            })
        }
        if(email == usuario && clave == key){
        $("div#about p").hide();
        $("div.formulario").hide();
        $("div#about").append("<button class='btn' id='cerrar'>cerrar sesion</button><br><h2>bienvenido:"+nombre+"</h2>");
        cerrar_sesion()
        }
        else{
            alert("email o contrasena equivocados")
        }
       })
       
       
   }
   
   //navegador
   nav ()
   function nav (){
       function sobreMi(){
        $("#contenido,#slider").hide();
        var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        var contenido =`
        <div id="acordeon">
        <h3>quienes somos?</h3>
        <div class='contenido_acordeon'>
            <p>${texto}</p>
            <p>${texto}</p>
            <p>${texto}</p>
        </div>
        <h3>que queremos?</h3>
        <div class='contenido_acordeon'>
        <p>${texto}</p>
        <p>${texto}</p>
        <p>${texto}</p>
        </div>
        <h3>a donde vamos?</h3>
        <div class='contenido_acordeon'>
        <p>${texto}</p>
        <p>${texto}</p>
        <p>${texto}</p>
        </div>
    </div>
        `;
        function acordeon(){
            $("#acordeon div").hide()
            $("#acordeon h3").on('click',function(){
                 $(this).siblings("div").toggle('slow')
            })
       }
        $("#cont").empty();
        $("#cont").append(contenido);
        acordeon()
       }
       function reloj(){

           
        let data = new Date;
        let hora = data.getHours();
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();
        let dia = data.getDate();
        let mes = data.getMonth() +1;
        let year = data.getFullYear();

        var reloj =`
            <div id="reloj_digital">
                <h1>${hora} : ${minutos} :${segundos}</h1>
                <h2>${dia} / ${mes} / ${year}</h2>
            </div>
        `;
        $("#cont").empty();
        $("#cont").append(reloj);
        
            

       }

       function registro(){
        $("#cont").empty();
         var regis = `
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
         $("#cont").append(regis);
         ficha_registro()
       }

    $("#nav ul li").click(function(){
        let li = $(this).text();
        if(li == 'INICIO'){
            location.reload();
        }
        if(li == 'SOBRE MI'){
            sobreMi()
         }
         if(li == 'REGISTRO'){
            registro() 
         }
        if(li == 'RELOJ'){
            intervalo = setInterval(() => {
             reloj() 
             },1000);
         }else{
            clearInterval(intervalo)
         }
         
     })
   }

   //ficha de registro
   function ficha_registro(){
       $("button#btn_form").on('click',function(){
        var nombre = $("#name").val();
        var apellido = $("#apellido").val();
        var cpf = $("#cpf").val();
        var edad = $("#edad").val();
        var sexo = $("#sexo").val();
        var mail = $("#mail").val();
        var key = $("#key").val();
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
   function carnet(){
    $("#formulario_registro").empty();
    var nombre = localStorage.getItem('name');
    var apellido = localStorage.getItem('apellido');
    var cpf = localStorage.getItem('cpf');
    var edad = localStorage.getItem('edad');
    var sexo = localStorage.getItem('sexo');

    var ficha = `
         <div id="ficha_registro">
         <h2 id='ficha'>Ficha de Registro</h2>
         <h3 id='ficha_name'>Nombre: ${nombre}</h3>
         <h3 id='ficha_apellido'>Apellido: ${apellido}</h3>
         <h3 id='ficha_cpf'>CPF: ${cpf}</h3>
         <h3 id='ficha_edad'>Edad: ${edad}</h3>
         <h3 id='ficha_sexo'>Sexo: ${sexo}</h3>
         </div>
    `;
    $("#formulario_registro").append("<img src='carnet.jpg' id='carnet'>");
    $("#formulario_registro").append(ficha)
    if(sexo =="hombre"){
     $("#formulario_registro").append("<img class='ficha_avatar'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSioCg7de-8aJQjmWHd5xVtioOHjI1DKU7-3Mh0WpbA6h6WEej2BQ'>");
    }if(sexo =="mujer"){
     $("#formulario_registro").append("<img class='ficha_avatar'src='https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png'>");   
    }if(sexo=='null'){
        alert("ingrese su sexo")
    }
   }
// ----------------------------------------------------------------------------------------------------------------------
})