var buttonDesc = document.getElementById("btdescriptografar");
console.log("olá")
buttonDesc.addEventListener("click",function(){
    resultado.style.backgroundImagem = "nome";

    var textoDigitado = texto.value;
    var textoDescriptofado = descriptografar(textoDigitado);

    resultado.textContent = textoDescriptofado;
    resultado.focus();
})
function descriptografar(texto){
    var codigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 
    var textoMinusculo = texto.toLowerCase(); 

for(i=0; i < codigos.length; i++){
    if(textoMinusculo.includes(codigos[i][1])){
        textoMinusculo = textoMinusculo.replaceAll(codigos[i][1],codigos[i][0]);
    }
}
return textoMinusculo;
}