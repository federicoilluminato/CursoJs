
const vuelos = [
    {
        "origen": "buenos aires",
        "destino": "madrid",
        "fecha": "15/01/2021",
        "precio": ["economica:","premium economy:","ejecutiva:","primera clase:"]
    },
    {
        "origen": "buenos aires",
        "destino": "madrid",
        "fecha": "20/01/2021",
        "precio": ["economica:","premium economy:","ejecutiva:","primera clase:"]
    },
    {
        "origen": "madrid",
        "destino": "rio de janeiro",
        "fecha": "19/01/2021",
        "precio": ["economica:","premium economy:","ejecutiva:","primera clase:"]
    },
    {
        "origen": "buenos aires",
        "destino": "madrid",
        "fecha": "21/01/2021",
        "precio": ["economica:","premium economy:","ejecutiva:","primera clase:"]
    },






]


// funcion del btn buscar que filtra los vuelos
function buscar (){
    const datoOrigen = (document.getElementById("origen").value.toLowerCase());
    const datoDestino = (document.getElementById("destino").value.toLowerCase());
    const datoIda = (document.getElementById("ida").value.toLowerCase().toString());
    const datoIdaConvertido = datoIda.substring(8,10) + '/' + datoIda.substring(5,7) + '/' + datoIda.substring(0,4);
    const datoVuelta = (document.getElementById("vuelta").value.toLowerCase());
    const datoVueltaConvertido = datoVuelta.substring(8,10) + '/' + datoVuelta.substring(5,7) + '/' + datoVuelta.substring(0,4);

    for (vueloElegido of vuelos) {
         if ((datoOrigen == vueloElegido.origen) && (datoDestino == vueloElegido.destino)) {
            $('#contenedorVuelos').append(`<div class="col-9">Origen: ${vueloElegido.origen}, destino: ${vueloElegido.destino}, fecha: ${vueloElegido.fecha}</div>`); 
            //console.log(`Origen: ${datoOrigen}, destino: ${datoDestino}, fecha: ${vueloElegido.fecha}`);
        } else if (datoOrigen == vueloElegido.origen) {
            $('#contenedorVuelos').append(`<div class="col-9">Origen: ${vueloElegido.origen}, destino: ${vueloElegido.destino}, fecha: ${vueloElegido.fecha}</div>`); 
            //console.log(`Origen: ${datoOrigen}, destino: ${vueloElegido.destino}, fecha: ${vueloElegido.fecha}`);
        } else if (datoDestino == vueloElegido.destino) {
            $('#contenedorVuelos').append(`<div class="col-9">Origen: ${vueloElegido.origen}, destino: ${vueloElegido.destino}, fecha: ${vueloElegido.fecha}</div>`); 
            //console.log(`Origen: ${vueloElegido.origen}, destino: ${datoDestino}, fecha: ${vueloElegido.fecha}`);
        } else if (datoIdaConvertido == vueloElegido.fecha) {
            $('#contenedorVuelos').append(`<div class="col-9">Origen: ${vueloElegido.origen}, destino: ${vueloElegido.destino}, fecha: ${vueloElegido.fecha}</div>`); 
            //console.log(`Origen: ${vueloElegido.origen}, destino: ${vueloElegido.destino}, fecha: ${datoIda}`);
        } else if (datoVueltaConvertido == vueloElegido.fecha) {
            $('#contenedorVuelos').append(`<div class="col-9">Origen: ${vueloElegido.origen}, destino: ${vueloElegido.destino}, fecha: ${vueloElegido.fecha}</div>`);   
            //console.log(`Origen: ${vueloElegido.origen}, destino: ${vueloElegido.destino}, fecha: ${datoVuelta}`);
        } 
    }
}


// Funcion radio-btn ida y vuelta o solo ida

function radio(x){
    if(x==0){
    document.getElementById("vuelta").style.display="inline";}
    else{
        document.getElementById('vuelta').style.display="none";
    }return;
}


// Funcion de sugerencias



//Funcion Buscar
var search = document.getElementById('search');
search.addEventListener('click', function() {
    buscar();
})


//function vuelosPrint() {
//    return `
//    <div class="section_vuelos container-fluid">

//     <div class="container_vuelos container-sm">
//     <div class="row" id="contenedorVuelos">
//             <div class="col-9">Origen: ${datoOrigen}, destino: ${datoDestino}, fecha: ${vueloElegido.fecha}</div>
//             <div class="col-9">Origen: ${vueloElegido.origen}, destino: ${datoDestino}, fecha: ${vueloElegido.fecha}</div>
//             <div class="col-3">1</div>
//         </div>
//   </div>
// </div>
//     `
// }


