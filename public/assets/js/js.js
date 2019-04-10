/**
 * LOGICA DE PROGRAMACION 
 */

$(document).ready(function(){
let ocultar_slide= () =>{
    let foto = localStorage.getItem("colorTheme");
    console.log(foto)
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


ocultar_slide();
agregar_icono();
pagination_auto();
pagination();
post ();

 });