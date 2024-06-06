
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

export { guardarTarea,mostrarTarea,actualizarTareas}



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


const actualizarTareas = async (tareaID,editarTarea) => {
  try {
    const response = await fetch('http://localhost:3000/api/task'+ tareaID, {
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












