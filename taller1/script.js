function agregarTarea(){
      let nombreTarea = document.getElementById("taskInput").value.trim()
      const taskError = document.getElementById("taskError")

      if (nombreTarea ==="") {
      taskError.innerHTML = "Debe ingresar una tarea"
      return
      
      } 

      const listaTareas =document.getElementById("taskList")
      const nuevaTarea= document.createElement ("li")
      nuevaTarea.textContent =nombreTarea
      const eliminarBtn =document.createElement ("button")
      eliminarBtn.textContent ="Eliminar"
      eliminarBtn.style.marginLeft ="10px"

      eliminarBtn.addEventListener("click",function(){
            listaTareas.removeChild(nuevaTarea)
      })

      nuevaTarea.appendChild(eliminarBtn)
      listaTareas.appendChild(nuevaTarea)

      document.getElementById ("taskInput").value =""
}

document.getElementById("addTaskBtn").addEventListener("click",agregarTarea)


 