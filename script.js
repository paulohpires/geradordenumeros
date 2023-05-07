function gerarNumeros() {
  var numeros = [];
  while (numeros.length < 15) {
    var numeroAleatorio = Math.floor(Math.random() * 25) + 1;
    if (numeros.indexOf(numeroAleatorio) === -1) {
      numeros.push(numeroAleatorio);
    }
  }

  var listaNumeros = document.getElementById("numeros-aleatorios");
  listaNumeros.innerHTML = "";
  for (var i = 0; i < numeros.length; i++) {
    var itemLista = document.createElement("li");
    itemLista.appendChild(document.createTextNode(numeros[i]));
    listaNumeros.appendChild(itemLista);
  }
}
