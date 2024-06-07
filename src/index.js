import { guardarTarea, mostrarTarea, actualizarTareas, eliminarTarea } from "./main.js"


let btn = document.getElementById("btnStyle")
let contieneHijo = document.getElementById("container")
let inputMostrar = document.getElementById("barra")
let contador = document.getElementById("circuloContador")
let editTask = document.querySelector(".editTask")
// let contenedorPadre = document.getElementById("contenedorAbajo")
btn.addEventListener("click", async function () {
    mostrarTarea()
    if (inputMostrar.value.trim() === '') {
        alert('ingresa texto')
    } else {
        let tareas = await guardarTarea(inputMostrar.value)
        console.log(tareas[tareas.length - 1]);
    }
})

listaTareas()
actualizarTareas()

async function listaTareas() {
    let tareas = await mostrarTarea();
    tareas.forEach(data => {
        let crearDiv = document.createElement("div")
        crearDiv.className = "crearDiv"
        contieneHijo.appendChild(crearDiv)

        if (tareas.length <= 0) {
            editTask.style.display = "block"
        }
        else if (tareas.length > 0) {
            editTask.style.display = "none"
        }

        let boton = document.createElement("button")
        boton.id = "botonn"
        boton.textContent = "edit"


        boton.addEventListener("click", () => {
            let modal = document.getElementById("abrirModal")
            modal.show()
        })

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.className = "check"


        let parrafo = document.createElement("p")
        parrafo.className = "parrafo"



        let span = document.createElement("span")
        span.textContent = "🗑"
        span.className = "spanStyle"

        crearDiv.appendChild(checkbox)
        crearDiv.appendChild(parrafo).innerHTML = data.task;
        crearDiv.appendChild(boton)
        crearDiv.appendChild(span)

        span.addEventListener("click", function () {
            if (checkbox.checked) {
                contieneHijo.removeChild(crearDiv);
                contador.innerHTML = parseInt(contador.innerHTML) - 1
            } else {
                contieneHijo.removeChild(crearDiv);
            }
            eliminarTarea(data.id)
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

inputMostrar.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("btnStyle").click();
    }
});

