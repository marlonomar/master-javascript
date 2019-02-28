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
        console.log(circulos);
        for(i=1;i<=circulos;i++){
             $('ol.pagination').append("<li><div class='circulos'></div></li>")
        }
   }

   $(".pagination").click(pagination);
   $(".right div").click(nextSlider);
   $(".left div").click(prevSlider);

   function pagination(){
       $(".slider li").hide();
   }
})