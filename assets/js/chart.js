let grafica = null;
let graficaEstadisticas = null;

// =============================
// GRÁFICA PRINCIPAL (CONSUMOS)
// =============================
function generarGrafica() {

    document.getElementById("miGrafica").style.display = "block"; //muestra la gráfica principal
    document.getElementById("miGraficaEstadisticas").style.display = "none"; //oculta la gráfica de estadísticas

    let registrosFiltrados = obtenerRegistrosFiltrados();
    let tipoGrafica = document.getElementById("tipoGrafica").value; // obtiene el tipo de gráfica seleccionado

    let ctx = document
        .getElementById("miGrafica")
        .getContext("2d");

    if (grafica) {
        grafica.destroy();
    }

    if (registrosFiltrados.length === 0) return;

    let etiquetas = registrosFiltrados.map(r => r.fecha); // obtiene las fechas de los registros filtrados 
    let valores = registrosFiltrados.map(r => r.valor); // obtiene los valores de los registros filtrados 

    const colores = [
        "#3498db", // azul
        "#2ecc71", // verde
        "#e74c3c", // rojo
        "#f1c40f", // amarillo
        "#9b59b6", // morado
        "#1abc9c", // turquesa
        "#e67e22", // naranja
        "#34495e"  // gris oscuro
    ];

    grafica = new Chart(ctx, {  // crea la gráfica con los datos filtrados
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
        options: { // configura las opciones de la gráfica
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true },
                title: {
                    display: true,
                    text: "Análisis de Consumos"
                }
            },
            scales: tipoGrafica !== "pie" ? {
                y: { beginAtZero: true },
                x: {
                    title: {
                        display: true,
                        text: "Fecha"
                    }
                }
            } : {}
        }
    });
}

// =============================
// GRÁFICA DE ESTADÍSTICAS
// =============================
function generarGraficaEstadisticas(media, mediana, moda, maximo, minimo, varianza, desviacion) {

    document.getElementById("miGrafica").style.display = "none"; // oculta la gráfica principal
    document.getElementById("miGraficaEstadisticas").style.display = "block"; // muestra la gráfica de estadísticas

    let ctx = document
        .getElementById("miGraficaEstadisticas")
        .getContext("2d");

    if (graficaEstadisticas) {
        graficaEstadisticas.destroy();
    }

    graficaEstadisticas = new Chart(ctx, { // crea la gráfica de estadísticas con los datos calculados
        type: "bar",
        data: {
            labels: [
                "Media",
                "Mediana",
                "Moda",
                "Máximo",
                "Mínimo",
                "Varianza",
                "Desviación"
            ],
            datasets: [{
                label: "Estadísticas de Consumo",
                data: [
                    media,
                    mediana,
                    moda,
                    maximo,
                    minimo,
                    varianza,
                    desviacion
                ],
                borderWidth: 2,
                backgroundColor: [
                    "#3498db", // media
                    "#2ecc71", // mediana
                    "#e74c3c", // moda
                    "#f1c40f", // maximo
                    "#9b59b6", // minimo
                    "#1abc9c", // varianza
                    "#34495e"  // desviacion
                ],
                borderColor: "#2c3e50"
            }]
        },
        options: { // configura las opciones de la gráfica
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true },
                title: {
                    display: true,
                    text: "Gráfica de Estadísticas"
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// =============================
// CAMBIO DE GRÁFICA
// =============================
document.getElementById("tipoGrafica")
.addEventListener("change", generarGrafica); // genera la gráfica principal al cambiar el tipo de gráfica