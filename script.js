
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

    }
]

// funcion del btn buscar que filtra los vuelos

function buscar (){
    const datoOrigen = (document.getElementById("origen").value.toLowerCase());
    const datoDestino = (document.getElementById("destino").value.toLowerCase());
    const datoIda = (document.getElementById("ida").value.toLowerCase());
    const datoVuelta = (document.getElementById("vuelta").value.toLowerCase());

    const vuelosDisponibles = vuelos.filter(function(vuelos){
        if (datoOrigen === vuelos.origen) {
            return datoOrigen
        } else if (datoDestino === vuelos.destino) {
            return datoDestino;
        } else if (datoDestino) {
            vuelos.destino === datoDestino;
            return datoDestino;
        } else if (datoIda) {
            vuelos.ida === datoIda;
            return datoIda;
        }
    })
    console.log(vuelosDisponibles)
}



// Funcion radio-btn ida y vuelta o solo ida

function radio(x){
    if(x==0){
    document.getElementById("vuelta").style.display="inline";}
    else{
        document.getElementById('vuelta').style.display="none";
    }return;
    
}

// Funcion de sugestiones







