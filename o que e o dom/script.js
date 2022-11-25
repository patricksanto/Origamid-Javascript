const h1selecionado = document.querySelector("h1");

h1selecionado.addEventListener("click", function () {
  console.log("Clicou em ", h1selecionado.innerText);
});

console.log(window.location.href);

const ativo = document.querySelector(".ativo");
console.log(ativo);

const language = window.navigator.language;
console.log(language);

const larguradajanela = window.innerWidth;
console.log(larguradajanela);
