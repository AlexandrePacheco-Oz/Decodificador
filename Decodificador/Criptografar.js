var buttonCrip = document.getElementById("btcriptografar");

var texto = document.querySelector(".area-texto-criptografar");
var resultado = document.querySelector(".base");

buttonCrip.addEventListener("click", function(){
resultado.style.backgroundImage = "none";
var textoDigitado = texto.value;
var textoCriptografado = criptografar(textoDigitado);

resultado.textContent = textoCriptografado;
resultado.focus();

})
function criptografar(texto){
	var codigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 
	var textoMinusculo = texto.toLowerCase(); 

	for(i=0; i < codigos.length; i++){
		if(textoMinusculo.includes(codigos[i][0])){
			textoMinusculo = textoMinusculo.replaceAll(codigos[i][0],codigos[i][1]);
		}
	}
	return textoMinusculo;
}

