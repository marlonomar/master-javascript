$(document).ready(function(){
    let reloj=()=>{

           
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
        $('#reloj').empty();
        $("#reloj").append(reloj);
        
            
    
       }
    
    setInterval(() => {
        reloj(); 
    }, 1000);
})