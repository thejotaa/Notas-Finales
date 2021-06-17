
let nombre = prompt("Escribe tu Nombre", "Juan Pablo");
let carrera = prompt("Escribe el nombre de tu carrera", "Desarrollo Web");
let ramo1 = prompt("Escribe el nombre de tu primer ramo", "HTML");
let ramo2 = prompt("Escribe el nombre de tu segundo ramo", "CSS");
let ramo3 = prompt("Escribe el nombre de tu tercer ramo", "JavaScript");
let nota1 = +prompt("Ingrese nota 1 [HTML]:");
let nota2 = +prompt("Ingrese nota 2 [HTML]:");
let nota3 = +prompt("Ingrese nota 3 [HTML]:");
let nota4 = +prompt("Ingrese nota 1 [CSS]:");
let nota5 = +prompt("Ingrese nota 2 [CSS]:");
let nota6 = +prompt("Ingrese nota 3 [CSS]:");
let nota7 = +prompt("Ingrese nota 1 [JavaScript]:");
let nota8 = +prompt("Ingrese nota 2 [JavaScript]:");
let promedio1 = (nota1 + nota2 + nota3) / 3;
let promedio2 = (nota4 + nota5 + nota6) / 3;
let promedio3 = (nota7 + nota8) / 2;
let promedio4 = promedio1.toFixed(2);
let promedio5 = promedio2.toFixed(2);
let promedio6 = promedio3.toFixed(2);

document.write(
  `<div class="datos"><p class="fw-bolder">Nombre:</p> <p>${nombre}</p></div>`
);

document.write(
  `<div class="datos"><p class="fw-bolder">Carrera:</p> <p>${carrera}</p></div>`
);

document.write(`<table class="table">
<thead class="table-dark">
  <tr>
      <th scope="col">Ramo</th>
      <th scope="col">Nota 1</th>
      <th scope="col">Nota 2</th>
      <th scope="col">Nota 3</th>
      <th scope="col">Promedio</th>
  </tr>
</thead>

  <tr>
      <th>${ramo1}</td>
      <th>${nota1}</td>
      <th>${nota2}</td>
      <th>${nota3}</td>
      <th>${promedio1}</td>
  <tr>

  <tr>
      <th>${ramo2}</th>
      <th>${nota4}</th>
      <th>${nota5}</th>
      <th>${nota6}</th>
      <th>${promedio2}</th>
  </tr>

  <tr>
      <th>${ramo3}</th>
      <th>${nota7}</th>
      <th>${nota8}</th>
      <th>-</th>
      <th>-</th>
  </tr>

`);
