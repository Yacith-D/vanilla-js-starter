import { kill } from "process";
//metodo para guardar informacion
const guardarTarea = async (tarea) => {
  try {
    const response = await fetch('http://localhost:3000/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        task: tarea,

      })
    });
    const data = await response.json();
    window.location.reload()
    return data

  } catch (error) {


    console.log(error)
  }

}
//aqui se exporta el index.js para llamar las funciones ahi
export { guardarTarea, mostrarTarea, actualizarTareas, eliminarTarea }


//metodo para mostrar la informacion
const mostrarTarea = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/task', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    return data

  } catch (error) {


    console.log(error)
  }
}
//metodo para actualizar a informacion
const actualizarTareas = async (tareaID, editarTarea) => {
  try {
    const response = await fetch('http://localhost:3000/api/task/' + tareaID, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        task: editarTarea
      })
    });
    const data = await response.json();

    return data

  } catch (error) {


    console.log(error)
  }

}
//metodo para eliminar la informacion
async function eliminarTarea(id) {
  const response = await fetch('http://localhost:3000/api/task/' + id, {
    method: 'DELETE',
  });
  if (response.ok) {
    mostrarTarea();
  } else {
    console.error('Error deleting task:', response.statusText);

  }
  window.location.reload()
}






