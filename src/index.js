import { guardarTarea, mostrarTarea, actualizarTareas, eliminarTarea } from "./main.js"//se extrae las funciones de la api

//variables de mi html
let btn = document.getElementById("btnStyle")
let contieneHijo = document.getElementById("container")
let inputMostrar = document.getElementById("barra")
let contador = document.getElementById("circuloContador")
let editTask = document.querySelector(".editTask")


btn.addEventListener("click", async function () {//boton que hace que si se envia sin texto muestre una alerta
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
        let crearDiv = document.createElement("div")//funcion que crea mis divs
        crearDiv.className = "crearDiv"
        contieneHijo.appendChild(crearDiv)

        if (tareas.length <= 0) {
            editTask.style.display = "block"//hace que si no hay tareas que muestre ("no hay tareas")y si hay que se quite 
        }
        else if (tareas.length > 0) {
            editTask.style.display = "none"
        }

        let boton = document.createElement("button")//crea mi btn de editar
        boton.id = "botonn"
        boton.textContent = "edit"


        boton.addEventListener("click", () => {//boton para abrir el modal
            let modal = document.getElementById("abrirModal")
            modal.show()
        })

        let checkbox = document.createElement("input")//crea mis checks
        checkbox.type = "checkbox"
        checkbox.className = "check"


        let parrafo = document.createElement("p")//crea mis textos de las tareas
        parrafo.className = "parrafo"



        let span = document.createElement("span")//span que hace que elimine las tareas
        span.textContent = "🗑"
        span.className = "spanStyle"
//esto es para mostrar las cosas los chechs,span,stc
        crearDiv.appendChild(checkbox)
        crearDiv.appendChild(parrafo).innerHTML = data.task;
        crearDiv.appendChild(boton)
        crearDiv.appendChild(span)

        span.addEventListener("click", function () {//evento que hace que al darle click al boton disminuya el contador
            if (checkbox.checked) {
                contieneHijo.removeChild(crearDiv);
                contador.innerHTML = parseInt(contador.innerHTML) - 1
            } else {
                contieneHijo.removeChild(crearDiv);
            }
            eliminarTarea(data.id)
        })
        checkbox.addEventListener("click", function () {//al darle el check hace que disminuya el contador
            if (checkbox.checked) {
                contador.innerHTML = parseInt(contador.innerHTML) + 1
            } else {
                contador.innerHTML = parseInt(contador.innerHTML) - 1
            }
        })
    });

}

inputMostrar.addEventListener("keypress", function (event) {//evento para darle al boton enter y se mande el texto
    if (event.key === "Enter") {
        document.getElementById("btnStyle").click();
    }
});

