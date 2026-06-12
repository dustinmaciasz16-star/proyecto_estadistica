let grafica = null;

function generarGrafica(){

    let registrosFiltrados =
    obtenerRegistrosFiltrados();

    let tipoGrafica =
    document.getElementById(
        "tipoGrafica"
    ).value;

    let ctx =
    document
    .getElementById("miGrafica")
    .getContext("2d");

    if(grafica){
        grafica.destroy();
    }

    if(registrosFiltrados.length === 0){
        return;
    }

    let etiquetas =
    registrosFiltrados.map(
        registro => registro.fecha
    );

    let valores =
    registrosFiltrados.map(
        registro => registro.valor
    );

    grafica = new Chart(ctx, {

        type: tipoGrafica,

        data: {

            labels: etiquetas,

            datasets: [{

                label: "Consumo ($)",

                data: valores,

                borderWidth: 2,

                fill: false,

                backgroundColor: [

                    "#3498db",
                    "#2ecc71",
                    "#e74c3c",
                    "#f1c40f",
                    "#9b59b6",
                    "#1abc9c",
                    "#34495e",
                    "#e67e22"

                ],

                borderColor:
                "#2980b9"

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: true,

                    position: "top"

                },

                title: {

                    display: true,

                    text:
                    "Análisis de Consumos"

                }

            },

            scales:

            tipoGrafica !== "pie"

            ?

            {

                y: {

                    beginAtZero: true,

                    title: {

                        display: true,

                        text: "Valor ($)"

                    }

                },

                x: {

                    title: {

                        display: true,

                        text: "Fecha"

                    }

                }

            }

            :

            {}

        }

    });

}

// Cambio de tipo de gráfica

document
.getElementById("tipoGrafica")
.addEventListener(
    "change",
    generarGrafica
);