export function doam_creater (project){
  
        
        const box = document.querySelector(".project_name_container")
        const project_info_container = document.createElement("div")
        project_info_container.classList.add("project_info_container")
        box.appendChild(project_info_container)
        const nameof_project_holder = document.createElement("p")
        nameof_project_holder.classList.add('nameofpro')
        nameof_project_holder.textContent=project.name
        project_info_container.appendChild(nameof_project_holder)
        const btn_delete = document.createElement("button")
        btn_delete.classList.add("project_delete_btn")
        btn_delete.textContent="X"
        project_info_container.appendChild(btn_delete)
 
      
    }


