let btn = document.getElementById("btnStyle")
let contieneHijo = document.getElementById("container")
let inputMostrar = document.getElementById("barra")


btn.addEventListener("click", function () {
    let crearDiv = document.createElement("h2")
    crearDiv.className = "crearDiv"
    contieneHijo.appendChild(crearDiv)

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.className = "check"
    crearDiv.appendChild(checkbox)

    let parrafo = document.createElement("p")
    parrafo.className = "parrafo"
    crearDiv.appendChild(parrafo).innerHTML = inputMostrar.value;

    let span = document.createElement("span")
    span.textContent = "🗑"
    span.className = "spanStyle"
    crearDiv.appendChild(span)
})











