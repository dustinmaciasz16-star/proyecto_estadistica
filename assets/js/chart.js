let grafica = null;
let graficaEstadisticas = null;

// =============================
// GRÁFICA PRINCIPAL (CONSUMOS)
// =============================
function generarGrafica() {

    document.getElementById("miGrafica").style.display = "block";
    document.getElementById("miGraficaEstadisticas").style.display = "none";

    // FILTROS DE LA SECCIÓN GRÁFICAS
    let tipoFiltro = filtroTipoGrafica.value;
    let tipoGastoFiltro = filtroTipoGastoGrafica.value;

    let registrosFiltrados = registros.filter(function(registro){

        if(tipoFiltro === "Todos"){
            return true;
        }

        if(registro.tipo !== tipoFiltro){
            return false;
        }

        if(
            tipoFiltro === "Gastos personales" &&
            tipoGastoFiltro !== "Todos"
        ){
            return registro.tipoGasto === tipoGastoFiltro;
        }

        return true;

    });

    let tipoGrafica = document.getElementById("tipoGrafica").value;

    let ctx = document
        .getElementById("miGrafica")
        .getContext("2d");

    if(grafica){
        grafica.destroy();
    }

    if(registrosFiltrados.length === 0){
        return;
    }

    let etiquetas = registrosFiltrados.map(registro => registro.fecha);
    let valores = registrosFiltrados.map(registro => registro.valor);

    const colores = [
        "#3498db",
        "#2ecc71",
        "#e74c3c",
        "#f1c40f",
        "#9b59b6",
        "#1abc9c",
        "#e67e22",
        "#34495e",
        "#16a085",
        "#8e44ad"
    ];

    grafica = new Chart(ctx, {

        type: tipoGrafica,

        data: {

            labels: etiquetas,

            datasets: [{

                label: "Consumo ($)",

                data: valores,

                borderWidth: 2,

                backgroundColor: colores,

                borderColor: "#2c3e50",

                fill: false

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: true

                },

                title: {

                    display: true,

                    text: "Análisis de Consumos"

                }

            },

            scales: tipoGrafica !== "pie"
                ? {

                    y: {

                        beginAtZero: true

                    },

                    x: {

                        title: {

                            display: true,

                            text: "Fecha"

                        }

                    }

                }
                : {}

        }

    });

}

// =============================
// GRÁFICA DE ESTADÍSTICAS
// =============================
function generarGraficaEstadisticas(
    media,
    mediana,
    moda,
    maximo,
    minimo,
    varianza,
    desviacion
){

    document.getElementById("miGrafica").style.display = "none";
    document.getElementById("miGraficaEstadisticas").style.display = "block";

    let ctx = document
        .getElementById("miGraficaEstadisticas")
        .getContext("2d");

    if(graficaEstadisticas){
        graficaEstadisticas.destroy();
    }

    graficaEstadisticas = new Chart(ctx,{

        type:"bar",

        data:{

            labels:[
                "Media",
                "Mediana",
                "Moda",
                "Máximo",
                "Mínimo",
                "Varianza",
                "Desviación"
            ],

            datasets:[{

                label:"Estadísticas",

                data:[
                    media,
                    mediana,
                    moda,
                    maximo,
                    minimo,
                    varianza,
                    desviacion
                ],

                borderWidth:2,

                backgroundColor:[
                    "#3498db",
                    "#2ecc71",
                    "#e74c3c",
                    "#f1c40f",
                    "#9b59b6",
                    "#1abc9c",
                    "#34495e"
                ],

                borderColor:"#2c3e50"

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    display:true
                },

                title:{
                    display:true,
                    text:"Gráfica de Estadísticas"
                }

            },

            scales:{

                y:{
                    beginAtZero:true
                }

            }

        }

    });

}

// =============================
// EVENTOS
// =============================

document
.getElementById("tipoGrafica")
.addEventListener("change", generarGrafica);

filtroTipoGrafica.addEventListener("change", function(){

    mostrarOcultar(
        filtroTipoGrafica,
        ["Gastos personales"],
        contenedorFiltroGastoGrafica
    );

    generarGrafica();

});

filtroTipoGastoGrafica.addEventListener("change", generarGrafica);