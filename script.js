const botao = document.querySelector("#botao");
botao.onclick = function active() {
  
  let minValor = document.getElementById("min").value;
  let maxValor = document.getElementById("max").value;
  
    minValor = Math.ceil(minValor);

  const aleatorio = Math.floor(Math.random() * (maxValor - minValor + 1)+ minValor) ;
  document.querySelector("#resultado-final").innerHTML = aleatorio;
};