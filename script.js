
function onLoad(){
    aberturaInicial() 
}

function aberturaInicial(){
    document.getElementById("q1").style.left = "-50%"
    document.getElementById("q2").style.right = "-50%"
    document.getElementById("q3").style.left = "-50%"
    document.getElementById("q4").style.right = "-50%"
    document.getElementById("q5").style.left = "-50%"
    document.getElementById("q6").style.right = "-50%"

    setTimeout(function(){ 
        document.getElementById("loader").style.display = "none"
    }, 1);

}
