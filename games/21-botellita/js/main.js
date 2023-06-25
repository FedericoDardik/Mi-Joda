const botella = document.querySelector('#botella');
botella.addEventListener('click', girar);

function girar(){
  let rand = Math.round(Math.random() * 7200);
  calcular(rand);
}

 function calcular(rand) {
  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  botella.style.transform = "rotate("+rand+"deg)";
}