document.getElementById("input-texto").addEventListener("keyup",function(){
    this.value = this.value.toLowerCase();
    validar();
});


function validar () {
    var escritoaValidar = document.getElementById("input-texto").value;
    var expresion = /[a-z]/;
    if (!expresion.test(escritoaValidar)){
        alert ("ha ingresado un caracter no permitido, intentelo nuevamente");
        return false;
    }
};


var botonEncriptar = document.querySelector("#btn-encriptar");


botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    var texto = document.querySelector ("#input-texto");
    var mensajeInicial = texto.value;
    frase = mensajeInicial.replace(/[e]/gi,'enter').replace(/[i]/gi,'imes').replace(/[a]/gi,'ai').replace(/[o]/gi,'ober').replace(/[u]/gi,'ufat');
    document.getElementById("msg").value = frase;
       

});

var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var texto = document.querySelector ("#input-texto");
    var mensajeInicial = texto.value;
    frase = mensajeInicial.replace(/enter/gi,'e').replaceAll(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    document.getElementById("msg").value = frase;
});


var botonCopiar = document.querySelector("#btn-copy");

botonCopiar.addEventListener ("click", function(event) {
    var contenido = document.getElementById("msg");
    contenido.select();
    document.execCommand("copy");
    alert ("copiado");
});