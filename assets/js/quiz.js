const respuestasCorrectas = {
    p1: "b",
    p2: "a",
    p3: "c",
    p4: "a",
    p5: "b",
    p6: "c",
    p7: "b",
    p8: "c",
    p9: "a",
    p10: "b"
};

document
.getElementById("btnEvaluar")
.addEventListener("click", function(){

    let correctas = 0;

    for(let pregunta in respuestasCorrectas){

        let seleccion =
        document.querySelector(
            `input[name="${pregunta}"]:checked`
        );

        if(
            seleccion &&
            seleccion.value === respuestasCorrectas[pregunta]
        ){
            correctas++;
        }
    }

    let nota =
    (correctas * 10) / 10;

    let mensaje = "";

    if(nota >= 9){
        mensaje = "🏆 Excelente";
    }
    else if(nota >= 7){
        mensaje = "✅ Muy bien";
    }
    else if(nota >= 5){
        mensaje = "⚠️ Regular";
    }
    else{
        mensaje = "❌ Debes estudiar más";
    }

    document.getElementById(
        "resultadoQuiz"
    ).innerHTML =
    `
    Aciertos: ${correctas}/10 <br>
    Nota: ${nota.toFixed(2)}/10 <br>
    ${mensaje}
    `;
});