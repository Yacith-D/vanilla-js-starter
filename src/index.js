import { guardarTarea } from "./main.js"

let btn = document.getElementById("btnStyle")
let contieneHijo = document.getElementById("container")
let inputMostrar = document.getElementById("barra")
let contador = document.getElementById("circuloContador")

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
    guardarTarea(inputMostrar.value)


    span.addEventListener("click", function () {
        if (checkbox.checked) {
            contieneHijo.removeChild(crearDiv);
            contador.innerHTML = parseInt(contador.innerHTML) - 1
            return task, checkbox
        } else {
            contieneHijo.removeChild(crearDiv);
            return task, checkbox
        }
    })
    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            contador.innerHTML = parseInt(contador.innerHTML) + 1
        } else {
            contador.innerHTML = parseInt(contador.innerHTML) - 1
        }
    })

})


























