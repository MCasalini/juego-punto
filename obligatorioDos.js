Swal.fire({
   title: "A Jugar!"
});

document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 60;
necesarios = 60;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 60) {
   	
      Swal.fire({
         title: 'GANASTE AMIGUE!!',
         width: 600,
         padding: '3em',
         color: '#716add',
         backdrop: `
           rgba(0,0,123,0.4)
           url("patoBailar.gif")
           left top
           no-repeat
         `
       })
      
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		
      Swal.fire({
         title: 'Perdiste amigue!',
         text: "Tenés otra oportunidad!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Jugar de nuevo'
       }).then((result) => {
         if (result.isConfirmed) {
           Swal.fire(
             'A jugar!!',
             'Vamos a darte otra oportunidad.',
             'success'
           )
         }
       })
     
		tiempo = 0;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);