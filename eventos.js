$(document).ready(function(){

    ocultar_slide()
    function ocultar_slide(){
        $("li.slider").hide();
        $("li.slider:nth-child(1)").show();
    }

    agregar_icono()
   function agregar_icono(){
        var circulos = $("#slider ul li img").length;
        for(i=1;i<=circulos;i++){
             $('ol.pagination').append("<li><div class='circulos' index="+[i]+"></div></li>")
        }
   }
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
            console.log(theme)
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
        let nombre = $("#nombre").val();
        let email = $("#email").val();
        let clave = $("#clave").val();
        localStorage.setItem('nombre',nombre)
        localStorage.setItem('email',email)
        localStorage.setItem('clave',clave)
        $("div#about p").hide();
        $("div.formulario").hide();
        $("div#about").append("<button class='btn' id='cerrar'>cerrar sesion</button><br><h2>bienvenido: "+nombre+"</h2>");
       })
   }
   
   nav ()
   function nav (){
       $("#nav ul li").eq(0).click(function(){
            location.reload();
       })

       $("#nav ul li").eq(2).on('click',function(){
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
            $("#cont").empty();
            $("#cont").append(contenido);
            acordeon()
       })

       $("#nav ul li").eq(1).click(function(){
        $("#contenido,#slider,#acordeon").hide();
            setInterval(() => {
                reloj() 
            },1000);
        })

       
       function acordeon(){
            $("#acordeon div").hide()
            $("#acordeon h3").on('click',function(){
                 $(this).siblings("div").toggle('slow')
            })
       }

       
       function reloj(){
            let data = new Date;
            let hora = data.getHours();
            let minutos = data.getMinutes();
            let segundos = data.getSeconds();
            console.log(hora+minutos+segundos)

            var reloj =`
                <h1>${hora} : ${minutos} :${segundos}</h1>
            `;
            $("#cont").empty();
            $("#cont").append(reloj);
       }
   }

   
})