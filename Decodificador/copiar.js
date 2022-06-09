var botaoCopiar = document.querySelector(".btcopiar");

botaoCopiar.addEventListener("click",function(){

	resultado.select();
	document.execCommand("copy");

	resultado.textContent = "";
	resultado.value = "";
	resultado.focus();
})