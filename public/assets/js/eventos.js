$(document).ready(function(){
    //funciones ----------------------------------------------
    ocultar_slide()
    agregar_icono()
    pagination()
    post ()
    theme()
    subir()
    login()
    nav ()

    //ocultar sliders-----------------------------------------
   
   function ocultar_slide(){
        let foto = localStorage.getItem("colorTheme");
        console.log(foto)
        $("li.slider").hide();
        $("li.slider:nth-child(1)").show();
    }
    //iconos de paginacion------------------------------------
   function agregar_icono(){
        var circulos = $("#slider ul li img").length;
        for(i=1;i<=circulos;i++){
             $('ol.pagination').append("<li><div class='circulos' index="+[i]+"></div></li>")
        }
   }
   //paginacion automatica------------------------------------
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

       var slide=()=>{
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
        }, 5000);
    
   }
   //paginacion manual----------------------------------------
   
   function pagination(){
    $(" li div.circulos").click(function(){
        var pos = $(this).attr('index');
        $("li.slider").hide();
        $("li.slider:nth-child("+pos+")").fadeIn();
        $("li div.circulos").removeClass('active_li')
        $(this).addClass('active_li');
   });
   }
   //informacion en json--------------------------------------
   
   function post (){
    var post =[
        {
            title:'Inverno',
            data: new Date(),
            text :"El invierno es una de las cuatro estaciones de clima templado. Sigue al otoño y precede a la primavera. Esta estación se caracteriza por días más cortos, noches más largas y temperaturas más bajas a medida que nos alejamos del Ecuador"
        },
        {
         title:'Primavera',
         data: new Date(),
         text :"La primavera es una de las cuatro estaciones de las zonas templadas del planeta Tierra, sigue al invierno y precede al verano. El término prima proviene de «primer» y vera de «verdor». Astronómicamente, esta estación comienza con el equinoccio de primavera, y termina con el solsticio de verano"
     },
     {
         title:'Verano',
         data: new Date(),
         text :"Estación del año comprendida entre la primavera y el otoño; en el hemisferio norte, se sitúa aproximadamente entre el 21 de junio, solsticio de verano, y el 21 de septiembre, equinoccio de otoño, y en el hemisferio sur entre el 21 de diciembre y el 21 de marzo"
         
     },
     {
         title:'Otono',
         data: new Date(),
         text :"El otoño​ es una de las cuatro estaciones del año y una de las dos de la zona intertropical. Sigue al verano y precede al invierno. Astronómicamente, comienza con el equinoccio de otoño y termina con el solsticio de invierno.​"
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
   //cambiar tema---------------------------------------------
   
   function theme(){

       $("div.temas div.tema").on('click',function(){
            let tema= $(this);
            if(tema.hasClass('invierno')){
                $("#themes").attr("href","assets/css/blue.css");
            }
            if(tema.hasClass('otono')){
                $("#themes").attr("href","assets/css/red.css");
            }
            if(tema.hasClass('verano')){
                $("#themes").attr("href","assets/css/green.css");
            }
            if(tema.hasClass('primavera')){
                $("#themes").attr("href","assets/css/pink.css");
            }
            var theme = $("#themes").attr('href');
            localStorage.setItem('colorTheme',theme)
       });
       var color =localStorage.getItem('colorTheme');
       $("#themes").attr("href",color);
   }
   // scroll--------------------------------------------------
   
   function subir(){
       $(".subir").on('click',function(){
           event.preventDefault();
           $("html,body").animate({
                scrollTop: 0
           },1000);
           return false;
       })
   }
   //login----------------------------------------------------
   
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
        $("div#about").append("<h2>bienvenido:"+nombre+"</h2>")
        $("div#about").append("<button class='btn' id='cerrar'>cerrar sesion</button><br>");
        cerrar_sesion()
        }
        else{
            alert("email o contrasena equivocados")
        }
       })
       
       
   }
   //navegador------------------------------------------------
   
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
                 $(this).siblings().toggle('slow')
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
            $("#logo > h1").text(li)
         }
         if(li == 'REGISTRO'){
            $("#logo > h1").text(li)
             var cpf =localStorage.getItem('cpf')
            registro()
            if(cpf != null){
                carnet();
            }
         }
        if(li == 'RELOJ'){
            $("#logo > h1").text(li)
            intervalo = setInterval(() => {
             reloj() 
             },1000);
         }else{
            clearInterval(intervalo)
         }
         
     })
   }
   //ficha de registro----------------------------------------
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
   //carnet---------------------------------------------------
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
// -----------------------------------------------------------
})