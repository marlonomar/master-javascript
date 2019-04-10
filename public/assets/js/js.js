/**
 * LOGICA DE PROGRAMACION 
 */

 $(document).ready(function(){
//inicio del programa=============================================================================    

//ocultar sliders-----------------------------------------
   
 let ocultar_slide= () =>{
    let foto = localStorage.getItem("colorTheme");
    console.log(foto)
    $("li.slider").hide();
    $("li.slider:nth-child(1)").show();
   
}

//iconos de paginacion------------------------------------
let agregar_icono =()=>{
    var circulos = $("#slider ul li img").length;
    for(i=1;i<=circulos;i++){
         $('ol.pagination').append("<li><div class='circulos' index="+[i]+"></div></li>")
    }
}
//paginacion automatica------------------------------------
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
//paginacion manual----------------------------------------
   
let pagination=()=>{
    $(" li div.circulos").click(function(){
        var pos = $(this).attr('index');
        $("li.slider").hide();
        $("li.slider:nth-child("+pos+")").fadeIn();
        $("li div.circulos").removeClass('active_li')
        $(this).addClass('active_li');
   });
   }
//funciones======================================================================================
ocultar_slide();
agregar_icono();
pagination_auto();
pagination();
//fin de programa=================================================================================
 });