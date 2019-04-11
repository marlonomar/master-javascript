/**
 * LOGICA DE PROGRAMACION 
 */

$(document).ready(function(){
let ocultar_slide= () =>{
    let foto = localStorage.getItem("colorTheme");
    $("li.slider").hide();
    $("li.slider:nth-child(1)").show();
   
}

let agregar_icono =()=>{
    var circulos = $("#slider ul li img").length;
    for(i=1;i<=circulos;i++){
         $('ol.pagination').append("<li><div class='circulos' index="+[i]+"></div></li>")
    }
}

let pagination_auto=()=>{
    let imgItems = $("li div.circulos").length;
    let imgPos =1;

    $("div.left").on('click',()=>{
         imgPos--
        if(imgPos < 1){
         imgPos = imgItems;
        }
          
         $("li.slider").hide();
         $("li.slider:nth-child("+imgPos+")").fadeIn();
         $("li div.circulos").removeClass('active_li')
         $("li div.circulos").eq(imgPos -1).addClass('active_li');
    })

    let slide=()=>{
     imgPos++
     if(imgPos > imgItems){
         imgPos =1;
      }
     $("li div.circulos").removeClass('active_li')
     $("li.slider").hide();
     $("li.slider:nth-child("+imgPos+")").fadeIn();
     $("li div.circulos").eq(imgPos -1).addClass('active_li');
    }

    $("div.right").on('click',()=>{
     slide()
    })

     setInterval(() => {
         slide()
    }, 5000);
 
}

let pagination=()=>{
    $(" li div.circulos").click(function(){
        var pos = $(this).attr('index');
        $("li.slider").hide();
        $("li.slider:nth-child("+pos+")").fadeIn();
        $("li div.circulos").removeClass('active_li')
        $(this).addClass('active_li');
   });
}
 
let post =()=>{
    let artic = (titulo)=>{

            let datos = {
            title:titulo,
            data: new Date(),
            text :"El invierno es una de las cuatro estaciones de clima templado. Sigue al otoño y precede a la primavera. Esta estación se caracteriza por días más cortos, noches más largas y temperaturas más bajas a medida que nos alejamos del Ecuador"
            }
        
            var posts = `
            <article class="post">
            <h2>${datos.title}</h2>
            <span class="date">${datos.data}</span>
            <p>${datos.text}</p>
            <a href="#" class="btn btn-sm">leer mas</a>
            </article>
            `;
     
            $("#post").append(posts);
            
    }
    artic('invierno');
    artic('verano');
    artic('otono');
    artic('primavera');
}
   
let theme =()=>{

    $("div.temas div.tema").on('click',function(){
         let tema= $(this);
         
         let cambioTema = (estacion,color)=>{
            if(tema.hasClass(estacion)){
                $("#themes").attr("href",`assets/css/${color}.css`);
            }
         }

         cambioTema('invierno','blue');
         cambioTema('verano','green');
         cambioTema('otono','red');
         cambioTema('primavera','pink');

         let theme = $("#themes").attr('href');
         localStorage.setItem('colorTheme',theme)
    });
    let color =localStorage.getItem('colorTheme');
    $("#themes").attr("href",color);
}
 
let subir=()=>{
    $(".subir").on('click',function(){
        event.preventDefault();
        $("html,body").animate({
             scrollTop: 0
        },1000);
        return false;
    })
}
  
let login=()=>{
       
    $("input[type='submit'].btn").on('click',function(){
     
     let email = $("#email").val();
     let clave = $("#clave").val();
     let usuario = localStorage.getItem('mail');
     let key = localStorage.getItem('key');
     let nombre = localStorage.getItem('name');

     let cerrar_sesion=()=>{
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



ocultar_slide();
agregar_icono();
pagination_auto();
pagination();
post ();
theme();
subir();
login();
 });