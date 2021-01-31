//Variables datos ingresados
const datoOrigen = document.getElementById("origen").value.toLowerCase();
const datoDestino = document.getElementById("destino").value.toLowerCase();
const datoIda = document.getElementById("ida").value.toLowerCase().toString();
const datoVuelta = document.getElementById("vuelta").value.toLowerCase().toString();
const btnIdaYVuelta = document.querySelector('#Ida-y-vuelta');
const btnSoloIda = document.querySelector('#Solo-ida');
const clase = document.querySelector('#clase');

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
    precio : '',
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

clase.addEventListener('change', e =>{
    datosBusqueda.precio = e.target.value;
    // console.log(datosBusqueda.precio);
})

//radiobtns

btnIdaYVuelta.addEventListener('change', e =>{
    if (btnIdaYVuelta.checked){
        document.getElementById('vuelta').classList.remove('disabled')
    }
})

btnSoloIda.addEventListener('change', e => {
    if (btnSoloIda.checked){
        document.getElementById('vuelta').classList.add('disabled')
        datosBusqueda.vuelta = '';
        vuelta.value = '';
    }
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
    vuelosSalen.innerHTML = '<p class="resultado-titulo">Pasajes de ida</p>';
    vuelosVuelven.innerHTML = '<p class="resultado-titulo">Pasajes de vuelta</p>';
    const precioSeleccionado = clase.value;

    
    
    console.log(vuelosIda);
    console.log(vuelosVuelta);
    console.log(vuelosIdaYVuelta);
    console.log(datosBusqueda.vuelta.value);
    

if(vuelosIda.length === 0 && vuelosVuelta.length === 0){
    vuelosVuelven.innerHTML = '';
    vuelosSalen.innerHTML = '<p class="resultado-titulo resultado-titulo-negativo">No se encontraron vuelos</p>';   
}



else if(datosBusqueda.vuelta.value === undefined && btnSoloIda.checked === true){
    
        for (var i = 0; i < vuelosIda.length; i++){
    
            tabla =   `
                            <div class="resultados-container">
                            <div class="container-destinos">
                      <p><i class="fas fa-plane-departure"></i>${vuelosIda[i].origen}</p><hr></hr>
                      <p><i class="fas fa-plane-arrival"></i>${vuelosIda[i].destino}</p>
                            </div>
                            <div class="resultados-fechaprecio">
                      <p>${vuelosIda[i].fecha}</p>
                      <p>${vuelosIda[i].precio[precioSeleccionado]}</p>
                            </div>                   
                            </div>                   
                       `
            vuelosSalen.innerHTML += tabla;
            vuelosVuelven.innerHTML = '';                   
    }}    

else if(vuelosIdaYVuelta.length == 2){
    vuelosSalen.innerHTML = '<p class="resultado-titulo">Pasajes ida y vuelta</p>';
    for (var i = 0; i < vuelosIdaYVuelta.length; i++){
        
        tabla =   `
        <div class="resultados-container">    
            <div class="container-destinos">
        <p><i class="fas fa-plane-departure"></i>${vuelosIdaYVuelta[i].origen}</p><hr></hr>
        <p><i class="fas fa-plane-arrival"></i>${vuelosIdaYVuelta[i].destino}</p>
            </div>
            <div class="resultados-fechaprecio">
        <p>${vuelosIdaYVuelta[i].fecha}</p>
        <p>${vuelosIdaYVuelta[i].precio[precioSeleccionado]}</p>
        </div>   
        </div>   
        `;


        vuelosSalen.innerHTML += tabla;
        vuelosVuelven.innerHTML = '';
        
    }
}
else if(vuelosIdaYVuelta.length != 2){  
    
    for (var i = 0; i < vuelosIda.length; i++){
    
    tabla =   `
                    <div class="resultados-container">
                    <div class="container-destinos">
              <p><i class="fas fa-plane-departure"></i>${vuelosIda[i].origen}</p><hr></hr>
              <p><i class="fas fa-plane-arrival"></i>${vuelosIda[i].destino}</p>
                    </div>
                    <div class="resultados-fechaprecio">
              <p>${vuelosIda[i].fecha}</p>
              <p>${vuelosIda[i].precio[precioSeleccionado]}</p>
                    </div>                   
                    </div>                   
               `
    vuelosSalen.innerHTML += tabla;                         
    }
    
    for (var i =0; i < vuelosVuelta.length; i++){
    tabla =  `
                    <div class="resultados-container">
                <div class="container-destinos">
             <p><i class="fas fa-plane-departure"></i>${vuelosVuelta[i].origen}</p><hr></hr>
             <p><i class="fas fa-plane-arrival"></i>${vuelosVuelta[i].destino}</p>
                </div>
                <div class="resultados-fechaprecio">
             <p>${vuelosVuelta[i].fecha}</p>
             <p>${vuelosVuelta[i].precio[precioSeleccionado]}</p>                      
                    </div>
                    </div>
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


