// =============================
// CAPTURAR ELEMENTOS DEL HTML
// =============================


const ayuda = document.getElementById("ayuda");//recuperamos el elemento con id "ayuda"
const mensaje = document.getElementById("mensajeTecla");//recuperamos el elemento con id "mensajeTecla"

// SI presiona H, mostrar ayuda
document.addEventListener("keydown", (e) => {

    if(e.key.toLowerCase() === "h"){

        ayuda.classList.toggle("oculto");

        // Verificar si está visible
        if(ayuda.classList.contains("oculto")){

            mensaje.textContent = 
            "Presiona la tecla H para ver las explicaciones.";//cambiamos el texto del elemento mensaje dependiendo de si la ayuda está oculta o visible

        }else{

            mensaje.textContent = 
            "Presiona la tecla H para ocultar las explicaciones.";//cambiamos el texto del elemento mensaje dependiendo de si la ayuda está oculta o visible

        }

    }

});

// Select principal
const tipo = document.getElementById("tipo");

// Contenedores dinámicos
const contenedorTipoGasto = document.getElementById("contenedorTipoGasto");
const contenedorFrecuencia = document.getElementById("contenedorFrecuencia");

// Selects dinámicos
const tipoGasto = document.getElementById("tipoGasto");
const frecuenciaSelect = document.getElementById("frecuencia");

// Filtros de tabla
const filtroTipo = document.getElementById("filtroTipo");
const filtroTipoGasto = document.getElementById("filtroTipoGasto");
const contenedorFiltroGasto = document.getElementById("contenedorFiltroGasto");

// Botón
const btnGuardar = document.getElementById("btnGuardar");

// Cuerpo tabla
const tablaCuerpo = document.getElementById("cuerpoTabla");


// =============================
// VARIABLES GLOBALES
// =============================

// =============================
// DATOS DE PRUEBA
// =============================

registros = [

    {
        fecha: "2026-01-02",
        tipo: "Luz",
        valor: 32.50,
        frecuencia: "Mensual",
        observacion: "Primer registro"
    },

    {
        fecha: "2026-01-10",
        tipo: "Agua",
        valor: 18.75,
        frecuencia: "Mensual",
        observacion: "Primer registro"
    },

    {
        fecha: "2026-01-15",
        tipo: "Internet",
        valor: 25.00,
        frecuencia: "Mensual",
        observacion: "Primer registro"
    },

    {
        fecha: "2026-01-18",
        tipo: "Gastos personales",
        tipoGasto: "Comida",
        valor: 12.50,
        frecuencia: "Diario",
        observacion: "Primer registro"
    },

    {
        fecha: "2026-01-20",
        tipo: "Gastos personales",
        tipoGasto: "Ropa",
        valor: 45.00,
        frecuencia: "Mensual",
        observacion: "Primer registro"
    },

    {
        fecha: "2026-01-22",
        tipo: "Gastos personales",
        tipoGasto: "Transporte",
        valor: 8.00,
        frecuencia: "Semanal",
        observacion: "Primer registro"
    },

    {
        fecha: "2026-01-25",
        tipo: "Gastos personales",
        tipoGasto: "Estudios",
        valor: 30.00,
        frecuencia: "Mensual",
        observacion: "Primer registro"
    },

    {
        fecha: "2026-01-28",
        tipo: "Gastos personales",
        tipoGasto: "Entretenimiento",
        valor: 20.00,
        frecuencia: "Mensual",
        observacion: "Primer registro"
    },

    {
        fecha: "2026-02-01",
        tipo: "Luz",
        valor: 35.20,
        frecuencia: "Mensual",
        observacion: "Consumo ligeramente elevado"
    },

    {
        fecha: "2026-02-03",
        tipo: "Agua",
        valor: 20.10,
        frecuencia: "Mensual",
        observacion: "Consumo ligeramente elevado"
    },

    {
        fecha: "2026-02-05",
        tipo: "Internet",
        valor: 25.00,
        frecuencia: "Mensual",
        observacion: "Consumo igual al anterior"
    },

    {
        fecha: "2026-02-07",
        tipo: "Gastos personales",
        tipoGasto: "Comida",
        valor: 15.00,
        frecuencia: "Diario",
        observacion: "Consumo ligeramente elevado"
    },

    {
        fecha: "2026-02-10",
        tipo: "Gastos personales",
        tipoGasto: "Ropa",
        valor: 60.00,
        frecuencia: "Mensual",
        observacion: "Consumo elevado, revisar"
    },

    {
        fecha: "2026-02-12",
        tipo: "Gastos personales",
        tipoGasto: "Transporte",
        valor: 10.00,
        frecuencia: "Semanal",
        observacion: "Consumo ligeramente elevado"
    },

    {
        fecha: "2026-02-14",
        tipo: "Gastos personales",
        tipoGasto: "Estudios",
        valor: 28.00,
        frecuencia: "Mensual",
        observacion: "Consumo reducido"
    },

    {
        fecha: "2026-02-16",
        tipo: "Gastos personales",
        tipoGasto: "Entretenimiento",
        valor: 35.00,
        frecuencia: "Mensual",
        observacion: "Consumo elevado, revisar"
    },

    {
        fecha: "2026-03-01",
        tipo: "Luz",
        valor: 40.00,
        frecuencia: "Mensual",
        observacion: "Consumo ligeramente elevado"
    },

    {
        fecha: "2026-03-03",
        tipo: "Agua",
        valor: 16.50,
        frecuencia: "Mensual",
        observacion: "Consumo reducido"
    },

    {
        fecha: "2026-03-05",
        tipo: "Internet",
        valor: 27.50,
        frecuencia: "Mensual",
        observacion: "Consumo ligeramente elevado"
    },

    {
        fecha: "2026-03-08",
        tipo: "Gastos personales",
        tipoGasto: "Comida",
        valor: 18.00,
        frecuencia: "Diario",
        observacion: "Consumo ligeramente elevado"
    },

    {
        fecha: "2026-03-10",
        tipo: "Gastos personales",
        tipoGasto: "Ropa",
        valor: 38.00,
        frecuencia: "Mensual",
        observacion: "Consumo reducido"
    },

    {
        fecha: "2026-03-12",
        tipo: "Gastos personales",
        tipoGasto: "Transporte",
        valor: 12.00,
        frecuencia: "Semanal",
        observacion: "Consumo ligeramente elevado"
    },

    {
        fecha: "2026-03-15",
        tipo: "Gastos personales",
        tipoGasto: "Estudios",
        valor: 40.00,
        frecuencia: "Mensual",
        observacion: "Consumo elevado, revisar"
    },

    {
        fecha: "2026-03-18",
        tipo: "Gastos personales",
        tipoGasto: "Entretenimiento",
        valor: 22.00,
        frecuencia: "Mensual",
        observacion: "Consumo reducido"
    },

    {
        fecha: "2026-04-01",
        tipo: "Luz",
        valor: 37.00,
        frecuencia: "Mensual",
        observacion: "Consumo reducido"
    },

    {
        fecha: "2026-04-03",
        tipo: "Agua",
        valor: 22.00,
        frecuencia: "Mensual",
        observacion: "Consumo ligeramente elevado"
    },

    {
        fecha: "2026-04-05",
        tipo: "Internet",
        valor: 30.00,
        frecuencia: "Mensual",
        observacion: "Consumo ligeramente elevado"
    },

    {
        fecha: "2026-04-08",
        tipo: "Gastos personales",
        tipoGasto: "Comida",
        valor: 14.00,
        frecuencia: "Diario",
        observacion: "Consumo reducido"
    },

    {
        fecha: "2026-04-10",
        tipo: "Gastos personales",
        tipoGasto: "Transporte",
        valor: 9.50,
        frecuencia: "Semanal",
        observacion: "Consumo reducido"
    },

    {
        fecha: "2026-04-15",
        tipo: "Gastos personales",
        tipoGasto: "Entretenimiento",
        valor: 40.00,
        frecuencia: "Mensual",
        observacion: "Consumo elevado, revisar"
    }

];

calcularEstadisticas();
pintarTabla();
let frecuencia = "Mensual";

// =============================
// MOSTRAR SECCIÓN
// =============================

function mostrarSeccion(id){

    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(seccion => {
        seccion.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");

}

// =============================
// GUARDAR GASTO
// =============================

function agregarGasto() {
    let fecha = document.getElementById("fecha").value;
    let valor = document.getElementById("valor").value;

    let tipoSeleccionado = tipo.value;
    let tipoGastoSeleccionado = tipoGasto.value;
    let frecuenciaGasto = frecuencia;

    // Si es comida o estudios,
    // tomar frecuencia del usuario
    if (
        tipoSeleccionado === "Gastos personales" &&
        (
            tipoGastoSeleccionado === "Comida" ||
            tipoGastoSeleccionado === "Estudios"
        )
    ) {
        frecuenciaGasto = frecuenciaSelect.value;
    }
    let observacion = generarObservacion(
        tipoSeleccionado,
        parseFloat(valor),
        tipoGastoSeleccionado
    );

    let registro = {
        fecha: fecha,
        tipo: tipoSeleccionado,
        valor: parseFloat(valor),
        frecuencia: frecuenciaGasto,
        observacion: observacion
    };

    // Si es gastos personales
    if (tipoSeleccionado === "Gastos personales") {
        registro.tipoGasto = tipoGastoSeleccionado;
    }

    // Guardar
    registros.push(registro);
    console.log(registros);

    calcularEstadisticas();
    pintarTabla();
    limpiarFormulario();
}


// =============================
// PINTAR TABLA
// =============================

function pintarTabla() {

    tablaCuerpo.innerHTML = "";

    let tipoFiltro = filtroTipo.value;
    let tipoGastoFiltro = filtroTipoGasto.value;

    let registrosFiltrados = registros.filter(function (registro) {

        // Mostrar todos
        if (tipoFiltro === "Todos") {
            return true;
        }

        // Filtrar por tipo
        if (registro.tipo !== tipoFiltro) {
            return false;
        }

        // Si es gastos personales
        if (
            tipoFiltro === "Gastos personales" &&
            tipoGastoFiltro !== "Todos"
        ) {
            return registro.tipoGasto === tipoGastoFiltro;
        }

        return true;
    });

    registrosFiltrados.forEach(function (registro) {

        let fila =
            "<tr>" +
                "<td>" + registro.fecha + "</td>" +
                "<td>" + registro.tipo + "</td>" +
                "<td>" + (registro.tipoGasto ? registro.tipoGasto : "-") + "</td>" +
                "<td>$" + registro.valor.toFixed(2) + "</td>" +
                "<td>" + registro.frecuencia + "</td>" +
                "<td>" + registro.observacion + "</td>" +
            "</tr>";

        tablaCuerpo.innerHTML += fila;
    });
}


// =============================
// FRECUENCIA AUTOMÁTICA
// =============================

tipo.addEventListener("change", function () {

    if (
        tipo.value === "Luz" ||
        tipo.value === "Agua" ||
        tipo.value === "Internet"
    ) {
        frecuencia = "Mensual";
    }

});


// =============================
// MOSTRAR / OCULTAR
// =============================

function mostrarOcultar(seleccion, valores, contenedor) {
    if (valores.includes(seleccion.value)) {
        contenedor.style.display = "block";
    } else {
        contenedor.style.display = "none";
    }

}
// =============================
// ACTIVAR EVENTOS DINÁMICOS
// =============================

function activarMostrarOcultar(seleccion, valores, contenedor) {
    seleccion.addEventListener("change", function () {

        mostrarOcultar(
            seleccion,
            valores,
            contenedor
        );
    });
}
// =============================
// GENERAR OBSERVACIÓN AUTOMÁTICA
// =============================

function generarObservacion(tipo, valor, tipoGasto = null) {

    // Buscar registros anteriores del mismo tipo
    let registrosSimilares = registros.filter(function(registro) {

        // Si es gasto personal, comparar también tipoGasto
        if (tipo === "Gastos personales") {
            return (
                registro.tipo === tipo &&
                registro.tipoGasto === tipoGasto
            );
        }

        return registro.tipo === tipo;
    });

    // Si es el primer registro
    if (registrosSimilares.length === 0) {
        return "Primer registro";
    }

    // Tomar último valor registrado
    let ultimoRegistro = registrosSimilares[registrosSimilares.length - 1];
    let valorAnterior = ultimoRegistro.valor;

    // Calcular diferencia
    let diferencia = valor - valorAnterior;

    // Reglas de observación
    if (diferencia === 0) {
        return "Consumo igual al anterior";
    }

    if (diferencia > 0 && diferencia <= 10) {
        return "Consumo ligeramente elevado";
    }

    if (diferencia > 10) {
        return "Consumo elevado, revisar";
    }

    if (diferencia < 0 && diferencia >= -10) {
        return "Consumo reducido";
    }

    if (diferencia < -10) {
        return "Consumo bajó considerablemente";
    }
}

// =============================
// CALCULAR ESTADÍSTICAS
// =============================

// =============================
// CALCULAR ESTADÍSTICAS
// SEGÚN FILTRO
// =============================

function calcularEstadisticas() {

    // Leer filtros actuales
    let tipoFiltro = filtroTipo.value;
    let tipoGastoFiltro = filtroTipoGasto.value;

    // Filtrar registros igual que en la tabla
    let registrosFiltrados = registros.filter(function(registro){

        // Mostrar todos
        if(tipoFiltro === "Todos"){
            return true;
        }

        // Filtrar por tipo
        if(registro.tipo !== tipoFiltro){
            return false;
        }

        // Si es gastos personales
        if(
            tipoFiltro === "Gastos personales" &&
            tipoGastoFiltro !== "Todos"
        ){
            return registro.tipoGasto === tipoGastoFiltro;
        }

        return true;
    });

    // Si no hay registros
    if(registrosFiltrados.length === 0){

        document.getElementById("media").textContent = "Media: --";
        document.getElementById("mediana").textContent = "Mediana: --";
        document.getElementById("moda").textContent = "Moda: --";
        document.getElementById("maximo").textContent = "Máximo: --";
        document.getElementById("minimo").textContent = "Mínimo: --";
        document.getElementById("rango").textContent = "Rango: --";
        document.getElementById("varianza").textContent = "Varianza: --";
        document.getElementById("desviacion").textContent = "Desv. estándar: --";

        return;
    }

    // Sacar solo valores
    let valores = registrosFiltrados.map(
        registro => registro.valor
    );

    // Ordenar
    let ordenados = [...valores].sort(
        (a,b) => a-b
    );

    // ======================
    // MEDIA
    // ======================

    let suma = valores.reduce(
        (acc, num) => acc + num,
        0
    );

    let media = suma / valores.length;

    // ======================
    // MEDIANA
    // ======================

    let mitad = Math.floor(
        ordenados.length / 2
    );

    let mediana;

    if(ordenados.length % 2 === 0){
        mediana =
            (
                ordenados[mitad - 1] +
                ordenados[mitad]
            ) / 2;
    }else{
        mediana = ordenados[mitad];
    }

    // ======================
    // MODA
    // ======================

    let contador = {};

    valores.forEach(function(valor){
        contador[valor] =
            (contador[valor] || 0) + 1;
    });

    let moda = valores[0];
    let maxFrecuencia = 0;

    for(let numero in contador){
        if(
            contador[numero] >
            maxFrecuencia
        ){
            maxFrecuencia =
                contador[numero];

            moda = numero;
        }
    }

    // ======================
    // MÁXIMO Y MÍNIMO
    // ======================

    let maximo = Math.max(...valores);
    let minimo = Math.min(...valores);

    // ======================
    // RANGO
    // ======================

    let rango = maximo - minimo;

    // ======================
    // VARIANZA
    // ======================

    let sumaCuadrados =
        valores.reduce(
            function(acc, valor){
                return acc +
                    Math.pow(
                        valor - media,
                        2
                    );
            },
            0
        );

    let varianza =
        sumaCuadrados /
        valores.length;

    // ======================
    // DESVIACIÓN ESTÁNDAR
    // ======================

    let desviacion =
        Math.sqrt(varianza);

    // ======================
    // MOSTRAR
    // ======================

    document.getElementById("media").textContent =
        "Media: " + media.toFixed(2);

    document.getElementById("mediana").textContent =
        "Mediana: " + mediana.toFixed(2);

    document.getElementById("moda").textContent =
        "Moda: " + moda;

    document.getElementById("maximo").textContent =
        "Máximo: " + maximo.toFixed(2);

    document.getElementById("minimo").textContent =
        "Mínimo: " + minimo.toFixed(2);

    document.getElementById("rango").textContent =
        "Rango: " + rango.toFixed(2);

    document.getElementById("varianza").textContent =
        "Varianza: " + varianza.toFixed(2);

    document.getElementById("desviacion").textContent =
        "Desv. estándar: " +
        desviacion.toFixed(2);
}

// =============================
// LIMPIAR FORMULARIO
// =============================

function limpiarFormulario() {

    document.getElementById("fecha").value = "";
    document.getElementById("valor").value = "";

    tipo.value = "Luz";
    tipoGasto.value = "Comida";
    frecuenciaSelect.value = "Mensual";

    frecuencia = "Mensual";

    mostrarOcultar(
        tipo,
        ["Gastos personales"],
        contenedorTipoGasto
    );

    mostrarOcultar(
        tipoGasto,
        ["Comida", "Estudios"],
        contenedorFrecuencia
    );

}


// =============================
// BOTÓN GUARDAR
// =============================

btnGuardar.addEventListener(
    "click",
    agregarGasto
);


// =============================
// FILTROS TABLA
// =============================

filtroTipo.addEventListener(
    "change",
    function(){
        pintarTabla();
        calcularEstadisticas();
    }
);

filtroTipoGasto.addEventListener(
    "change",
    function(){
        pintarTabla();
        calcularEstadisticas();
    }
);


// Mostrar segundo filtro
activarMostrarOcultar(
    filtroTipo,
    ["Gastos personales"],
    contenedorFiltroGasto
);


// =============================
// CAMPOS DINÁMICOS FORMULARIO
// =============================

activarMostrarOcultar(
    tipo,
    ["Gastos personales"],
    contenedorTipoGasto
);

activarMostrarOcultar(
    tipoGasto,
    ["Comida", "Estudios"],
    contenedorFrecuencia
);


// =============================
// ESTADO INICIAL
// =============================

mostrarOcultar(
    tipo,
    ["Gastos personales"],
    contenedorTipoGasto
);
mostrarOcultar(
    tipoGasto,
    ["Comida", "Estudios"],
    contenedorFrecuencia
);
mostrarOcultar(
    filtroTipo,
    ["Gastos personales"],
    contenedorFiltroGasto
);
pintarTabla();