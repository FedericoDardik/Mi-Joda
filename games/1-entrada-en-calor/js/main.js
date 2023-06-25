const ruleta = document.querySelector('#ruleta');
ruleta.addEventListener('click', girar);

const boton = document.querySelector('#boton');
boton.addEventListener('click', function() {girar(ruleta)});


function girar(){
  let rand = Math.random() * 7200;
  calcular(rand);
}

 function calcular(rand) {
  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";
}