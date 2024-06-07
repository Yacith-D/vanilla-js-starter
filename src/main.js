import { kill } from "process";

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

export { guardarTarea, mostrarTarea, actualizarTareas, eliminarTarea }



const mostrarTarea = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/task', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    return data

  } catch (error) {


    console.log(error)
  }
}


const actualizarTareas = async (tareaID, editarTarea) => {
  try {
    const response = await fetch('http://localhost:3000/api/task' + tareaID, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        task: editarTarea
      })
    });
    const data = await response.json();
    window.location.reload()
    return data

  } catch (error) {


    console.log(error)
  }

}

async function eliminarTarea(id) {
  const response = await fetch('http://localhost:3000/api/task/' + id, {
    method: 'DELETE',
  });
  if (response.ok) {
    mostrarTarea();
  } else {
    console.error('Error deleting task:', response.statusText);
  }
}






