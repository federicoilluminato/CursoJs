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

//Objeto de la busqueda
const datosBusqueda = {
    origen: '',
    destino: '',
    ida: '',
    vuelta: '',
    // : '',
    // : '',
}


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



//Funcion que filtra en base a la busqueda

function filtrarVuelos() {
    const vuelosResultado = vuelos.filter( filtrarOrigen ).filter( filtrarDestino ).filter( filtrarIdayVuelta );
    // .filter( filtrarIda ).filter( filtrarVuelta);
    
    console.log(vuelosResultado);
    
    
    mostrarVuelos(vuelosResultado);

    if( vuelosResultado.length ){
        mostrarVuelos(vuelosResultado);
    } else {
        console.log('no hay resultado');
    }
}



function filtrarOrigen(vuelo){
    const { origen } = datosBusqueda;
    if( origen ){
        return vuelo.origen === origen;
    }
    return vuelo;
}

function filtrarDestino(vuelo){
    const { destino } = datosBusqueda;
    if( destino ){
        return vuelo.destino === destino;
    }
    return vuelo;
}

// function filtrarIda (vuelo){
//     const { ida } = datosBusqueda;
//     if ( ida ){
//         return vuelo.fecha == ida;
//     }
//     return vuelo;
// }

// function filtrarVuelta (vuelo){
//     const { vuelta } = datosBusqueda;
//     if ( vuelta ){
//         return vuelo.fecha === vuelta;
//     }
//     return vuelo;
// }

function filtrarIdayVuelta (vuelo){
    const { ida, vuelta } = datosBusqueda;
    if ( ida || vuelta ){
        return vuelo.fecha == ida || vuelta;
    } return vuelo;
    
    
    
    
    // if ( ida ){
    //     return vuelo.fecha == ida;
    // }
    // return vuelo;
}


