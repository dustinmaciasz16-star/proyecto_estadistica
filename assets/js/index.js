const tipo = document.getElementById("tipo");//obtenemos el elemento select del tipo de gasto
const contenedorTipoGasto = document.getElementById("contenedorTipoGasto");//obtenemos el contenedor del select del tipo de gasto para mostrarlo u ocultarlo según la selección del tipo de gasto
const tipoGasto = document.getElementById("tipoGasto");//obtenemos el elemento select del tipo de gasto específico para mostrarlo u ocultarlo según la selección del tipo de gasto
const contenedorFrecuencia = document.getElementById("contenedorFrecuencia");//obtenemos el contenedor del select de la frecuencia para mostrarlo u ocultarlo según la selección del tipo de gasto específico

let frecuencia = "";//variable para almacenar la frecuencia del gasto, se asignará automáticamente según el tipo de gasto seleccionado

// Agregamos un evento de cambio al select del tipo de gasto para asignar automáticamente la frecuencia según el tipo de gasto seleccionado
tipo.addEventListener("change", function() {
    if(tipo.value === "Luz" ||
         tipo.value === "Agua" ||
         tipo.value === "Internet"
        ) {
        frecuencia = "Mensual";
    }
});

// Función para mostrar u ocultar un contenedor según la selección del usuario en un select, recibe el select, los valores que deben mostrar el contenedor y el contenedor a mostrar u ocultar
function mostrarOcultar(seleccion, valores, contenedor) {
    if (valores.includes(seleccion.value)) {
        contenedor.style.display = "block";//mostramos el contenedor si la selección del usuario coincide con alguno de los valores que deben mostrar el contenedor
    } else {
        contenedor.style.display = "none";
    }
}

// Función para activar el evento de cambio en un select y mostrar u ocultar un contenedor según la selección del usuario, recibe el select, los valores que deben mostrar el contenedor y el contenedor a mostrar u ocultar
function activarMostrarOcultar(seleccion, valores, contenedor) {
    seleccion.addEventListener("change", function() {//agregamos un evento de cambio al select para mostrar u ocultar el contenedor según la selección del usuario en el select
        mostrarOcultar(seleccion, valores, contenedor);
    });
}

activarMostrarOcultar(tipo, ["Gastos personales"], contenedorTipoGasto);//activamos el evento de cambio en el select del tipo de gasto para mostrar u ocultar el contenedor del select del tipo de gasto específico según la selección del tipo de gasto del usuario
activarMostrarOcultar(tipoGasto, ["Comida", "Estudios"], contenedorFrecuencia);//activamos el evento de cambio en el select del tipo de gasto específico para mostrar u ocultar el contenedor del select de la frecuencia según la selección del tipo de gasto específico del usuario 
mostrarOcultar(tipo, ["Gastos personales"], contenedorTipoGasto);//mostramos u ocultamos el contenedor del select del tipo de gasto específico según la selección del tipo de gasto del usuario al cargar la página 
mostrarOcultar(tipoGasto, ["Comida", "Estudios"], contenedorFrecuencia);//mostramos u ocultamos el contenedor del select de la frecuencia según la selección del tipo de gasto específico del usuario al cargar la página 

