//Variables datos ingresados
const datoOrigen = document.getElementById("origen").value.toLowerCase();
const datoDestino = document.getElementById("destino").value.toLowerCase();
const datoIda = document.getElementById("ida").value.toLowerCase().toString();
const datoVuelta = document.getElementById("vuelta").value.toLowerCase().toString();

//Variables datos ingresados convertidos
// const datoIdaConvertido = datoIda.substring(8,10) + '/' + datoIda.substring(5,7) + '/' + datoIda.substring(0,4);
// const datoVueltaConvertido = datoVuelta.substring(8,10) + '/' + datoVuelta.substring(5,7) + '/' + datoVuelta.substring(0,4);

var search = document.getElementById('search');
const resultado = document.querySelector('#resultado');
const vuelosIda = [];
const vuelosVuelta = [];
let vuelosIdaYVuelta = [];

//Objeto de la busqueda
const datosBusqueda = {
    origen: '',
    destino: '',
    ida: '',
    vuelta: '',
    // : '',
    // : '',
}
mostrarVuelos(vuelos);

//Events
search.addEventListener('click', function() {
    filtrarVuelos();
    console.log(datosBusqueda)

})

origen.addEventListener('change', e => {
    datosBusqueda.origen = e.target.value
    // console.log(datosBusqueda.origen)

})
destino.addEventListener('change', e => {
    datosBusqueda.destino = e.target.value
    // console.log(datosBusqueda.destino)

})
ida.addEventListener('change', e => {
    datosBusqueda.ida = e.target.value
    // console.log(datosBusqueda.ida)

})
vuelta.addEventListener('change', e => {
    datosBusqueda.vuelta = e.target.value
    // console.log(datosBusqueda.vuelta)

})


//Funciones

function mostrarVuelos (vuelos) {

    limpiarHTML();
    vuelos.forEach(vuelo => {
        const {origen, destino, fecha, precio} = vuelo;
        const vueloHTML = document.createElement('p');
        vueloHTML.textContent = `
        ${origen} ${destino} ${fecha} ${precio}
        `;
        resultado.appendChild(vueloHTML);
    })
}

//Limpiar HTML
function limpiarHTML () {  
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


function imprimirVuelos(vuelosIda, vuelosVuelta){
    limpiarHTML();
    const vuelosSalen = document.createElement('div');
    const vuelosVuelven = document.createElement('div');
    vuelosSalen.innerHTML = '<p>Pasajes de ida:</p>';
    vuelosVuelven.innerHTML = '<p>Pasajes de vuelta:</p>';

    
    
    // console.log(vuelosIda);
    // console.log(vuelosVuelta);
    console.log(vuelosIdaYVuelta)
    

    if(vuelosIdaYVuelta.length == 2){
    vuelosSalen.innerHTML = '<p>Pasajes ida y vuelta:</p>';
    for (var i = 0; i < vuelosIdaYVuelta.length; i++){
        
        tabla =   `
        
        <p>${vuelosIdaYVuelta[i].origen}</p>
        <p>${vuelosIdaYVuelta[i].destino}</p>
        <p>${vuelosIdaYVuelta[i].fecha}</p>
        <p>${vuelosIdaYVuelta[i].precio}</p>
        
        `;


        vuelosSalen.innerHTML += tabla;
        vuelosVuelven.innerHTML = '';
        
    }
}
else if(vuelosIdaYVuelta.length != 2){   
    for (var i = 0; i < vuelosIda.length; i++){
    tabla =   `
        
              <p>${vuelosIda[i].origen}</p>
              <p>${vuelosIda[i].destino}</p>
              <p>${vuelosIda[i].fecha}</p>
              <p>${vuelosIda[i].precio}</p>
                                        
               `
    vuelosSalen.innerHTML += tabla;                         
    }
    
    for (var i =0; i < vuelosVuelta.length; i++){
    tabla =  `
             <p>${vuelosVuelta[i].origen}</p>
             <p>${vuelosVuelta[i].destino}</p>
             <p>${vuelosVuelta[i].fecha}</p>
             <p>${vuelosVuelta[i].precio}</p>                      
    
              `
    vuelosVuelven.innerHTML += tabla;
    }                     
    }
    resultado.appendChild(vuelosSalen);
    resultado.appendChild(vuelosVuelven);
    
}



//Funcion que filtra en base a la busqueda

function filtrarVuelos() {
    
    const vuelosIdaResultado = vuelos.filter(filtrarOrigen).filter(filtrarDestino).filter(filtrarIda);
    const vuelosVueltaResultado = vuelos.filter(filtrarOrigenVuelta).filter(filtrarDestinoVuelta).filter(filtrarVuelta);

    const vuelosIda = vuelosIdaResultado.concat();
    const vuelosVuelta = vuelosVueltaResultado.concat();
    
    if(vuelosIda.length == 1 && vuelosVuelta.length == 1){
        // vuelosIdaYVuelta.concat(vuelosVuelta,vuelosIda);
         vuelosIdaYVuelta = [...vuelosIda,...vuelosVuelta];
    }
    
    imprimirVuelos(vuelosIda,vuelosVuelta,vuelosIdaYVuelta);
}



    
    //Funciones de filtrado de datos

    function filtrarOrigen(vuelo){
    const { origen } = datosBusqueda;
    if( origen ){
        return vuelo.origen == origen;
    }
    return vuelo;
    }


    function filtrarDestino(vuelo){
        const { destino } = datosBusqueda;
        if( destino ){
            return vuelo.destino == destino;
        }
        return vuelo;
    }

    function filtrarIda(vuelo){
        const { ida } = datosBusqueda;
        if ( ida ){
            return vuelo.fecha == ida
        }
        return vuelo;
    }

    function filtrarVuelta(vuelo){
        const { vuelta } = datosBusqueda;
        if ( vuelta ){
            return vuelo.fecha == vuelta;
        }
        return vuelo;
    }

    function filtrarOrigenVuelta(vuelo){
        const { destino } = datosBusqueda;
        if (destino){
            return vuelo.origen == destino;
        }
        return vuelo;
    }

    function filtrarDestinoVuelta(vuelo){
        const { origen } = datosBusqueda;
        if ( origen ){
            return vuelo.destino == origen;
        }
        return vuelo;
    }


