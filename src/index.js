let btn = document.getElementById("btnStyle")
let contieneHijo = document.getElementById("container")
let inputMostrar = document.getElementById("barra")
  

btn.addEventListener("click", function () {
    let crearDiv = document.createElement("div")
    crearDiv.innerHTML = inputMostrar.value
    contieneHijo.appendChild(crearDiv)

})











