$(document).ready(function(){
    let sobreMi=()=>{
        

        let contenido =(nombre)=>{

            let datos ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation";
            

            let template = 
            `<div id="acordeon">
            <h3>${nombre}</h3>
            <div class='contenido_acordeon'>
               <p>${datos}</p>
               <p>${datos}</p>
               <p>${datos}</p>
            </div>
            </div>`;

            $("#sobreMi").append(template);

        }

        contenido('quienes somos?');
        contenido('que hacemos?');
        contenido('donde estamos?');

        let acordeon=()=>{
            $("#acordeon div").hide()
            $("#acordeon h3").on('click',function(){
                 $(this).siblings().toggle('slow')
            })
        }

        
        
        acordeon()
       }

    sobreMi()
})