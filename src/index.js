import { guardarTarea, mostrarTarea } from "./main.js"


let btn = document.getElementById("btnStyle")
let contieneHijo = document.getElementById("container")
let inputMostrar = document.getElementById("barra")
let contador = document.getElementById("circuloContador")


btn.addEventListener("click", async function () {
    let tareas = await guardarTarea(inputMostrar.value)
    console.log(tareas[tareas.length - 1]);
  

})

listaTareas()


async function listaTareas() {
    let tareas = await mostrarTarea();
    tareas.forEach(data => {
        console.log(data.task);
        console.log(data.id);
        let crearDiv = document.createElement("h2")
    crearDiv.className = "crearDiv"
    contieneHijo.appendChild(crearDiv)


    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.className = "check"
    crearDiv.appendChild(checkbox)

    let parrafo = document.createElement("p")
    parrafo.className = "parrafo"
    crearDiv.appendChild(parrafo).innerHTML = data.task;

    let span = document.createElement("span")
    span.textContent = "🗑"
    span.className = "spanStyle"
    crearDiv.appendChild(span)


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
    });

}

















