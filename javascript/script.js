function verificarRespuesta(){

    var total = 5;
    var puntos = 0;

    var myForm = document.forms["TestVAK"];
    var respuestas = ["a", "a", "a", "a", "a"];

    for(var i = 1; i <= total; i++){
        if(myForm["p" + i].value === null || myForm["p" + i].value === ""){
            alert("Porfavor responde la pregunta " + i);
            return false;
        }else{
            if(myForm["p" + i].value === respuestas[i - 1]){
                puntos++;
            }
        }
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3>Obtuviste <span>'+ puntos +'</span> de <span>'+ total +' puntos</span></h3>';

    return false;
}