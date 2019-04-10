
/**
 * logica de programacion de master javascript
 */

//ocultar sliders-----------------------------------------
   
let ocultar_slide = ()=>{
    localStorage.getItem("colorTheme");
    $("li.slider").hide();
    $("li.slider:nth-child(1)").show();
}

