$(document).ready(function(){

    ocultar_slide()
    function ocultar_slide(){
        $("ul li div").hide();
        $("ul li div").eq(0).show();
        $("ul li div div").eq(0).show();
    }

    agregar_icono()
   function agregar_icono(){
        var circulos = $("#slider ul li img").length;
        for(i=1;i<=circulos;i++){
             $('ol.pagination').append("<li><div class='circulos'></div></li>")
        }
   }

   $(" li div.circulos").click(pagination);
   //$(".right div").click(nextSlider);
   //$(".left div").click(prevSlider);

   function pagination(){
       var pos = $(this).index();
       console.log(pos)
       $("ul li div").hide();
       $("ul li div:nth-child("+pos+")").show()
   }
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
   theme()
   function theme(){
       $("div.temas div.tema").on('click',function(){
            let tema= $(this);
            console.log(tema);
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
       });
   }
})