import {delet_funcition,tododeletefunc} from "./index.js"
export function project_displyer(proname){
  
    const box = document.querySelector(".box2")
     const boxdisplyer = document.createElement("div")
     boxdisplyer.classList.add("project_displyer")
    
     box.append(boxdisplyer)

    let homeIcon = document.createElement('ion-icon');
    homeIcon.setAttribute('name', 'home-outline');
    homeIcon.classList.add('icon_home');
    boxdisplyer.appendChild(homeIcon)

    let pname = document.createElement("p")
    pname.classList.add("name_of_project")
    pname.textContent=proname;
    boxdisplyer.appendChild(pname)
    
    let editIcon = document.createElement('ion-icon');
    editIcon.setAttribute('name', 'create-outline');
    editIcon.classList.add('iconedit');
    boxdisplyer.appendChild(editIcon)
   

    let deleteIcon = document.createElement('ion-icon');
    deleteIcon.setAttribute('name', 'trash-outline');
    deleteIcon.classList.add('icondelete_pro');
    boxdisplyer.appendChild(deleteIcon)
    if(proname==="project1"||proname==="project2"){
      deleteIcon.classList.add('disabled');
      // deleteIcon.style.backgroundColor = "blue";
      deleteIcon.style.pointerEvents = "none";
      
    }
    else{
      deleteIcon.addEventListener("click" ,delet_funcition)
    }
  
   
    
      }
 
    //   funciton thar render on the page 
   export function todorender(found_project){

     console.log("i found this ")
     console.log(found_project)
   
   
    //  console.log(project_name)
    //  console.log(project_array)

     let project_name= found_project.pname;
     let project_array = found_project.pro_task_iteams;
    
     document.querySelector(".top_proname").textContent=found_project.pname
     const allcont =  document.querySelector(".this_contentchange")
    //  const todo_container = document.querySelector(".this_contentchange")
          allcont.style.opacity="100%"
     console.log(allcont)
     
      while (allcont.firstChild) {
          allcont.removeChild(allcont.firstChild);
        }

    project_array.forEach(function (element) {
     

        const todolistcontainer = document.createElement("div")
        todolistcontainer.classList.add("TO-DO-LIST_displyer")
    
        const radibtncontent= document.createElement("div")
        radibtncontent.classList.add("radiobtncont")
        todolistcontainer.appendChild(radibtncontent)
    
        const radio = document.createElement("input")
        radio.setAttribute('type', 'radio');
        radibtncontent.appendChild(radio)
    
        const title = document.createElement("p")
        title.textContent=element.title
        console.log("textt is")
        console.log(title.textContent)
        radibtncontent.appendChild(title)
    
    
    
        // Create the date container div
    const  dateContainer = document.createElement('div');
    dateContainer.classList.add('datecont');
    
    // Create the date paragraph
    const dateParagraph = document.createElement('p');
    dateParagraph.classList.add('date');
    dateParagraph.textContent = element.date;
    
    // Create the priority paragraph
    const priorityParagraph = document.createElement('p');
    priorityParagraph.classList.add('prio');
    priorityParagraph.textContent = element.Priority;
    
    // Create the edit icon
    const editIcon = document.createElement('ion-icon');
    editIcon.setAttribute('name', 'create-outline');
    editIcon.classList.add('iconedit');
    
    // Create the delete icon
    const deleteIcon = document.createElement('ion-icon');
    deleteIcon.setAttribute('name', 'trash-outline');
    deleteIcon.classList.add('icondelete');
    
    // Append the child elements to the date container
    dateContainer.appendChild(dateParagraph);
    dateContainer.appendChild(priorityParagraph);
    dateContainer.appendChild(editIcon);
    dateContainer.appendChild(deleteIcon);
    todolistcontainer.appendChild(dateContainer)

    allcont.appendChild(todolistcontainer)
      });

 
     

    }

 export function submit_creater(to_do){
 
  console.log(to_do.title)
  const allcont =  document.querySelector(".this_contentchange")
  const todolistcontainer = document.createElement("div")
  todolistcontainer.classList.add("TO-DO-LIST_displyer")

  const radibtncontent= document.createElement("div")
  radibtncontent.classList.add("radiobtncont")
  todolistcontainer.appendChild(radibtncontent)

  const radio = document.createElement("input")
  radio.setAttribute('type', 'radio');
  radibtncontent.appendChild(radio)

  const title = document.createElement("p")
  title.textContent=to_do.title
  console.log("textt is")
  console.log(title.textContent)
  radibtncontent.appendChild(title)



  // Create the date container div
const  dateContainer = document.createElement('div');
dateContainer.classList.add('datecont');

// Create the date paragraph
const dateParagraph = document.createElement('p');
dateParagraph.classList.add('date');
dateParagraph.textContent = to_do.date;

// Create the priority paragraph
const priorityParagraph = document.createElement('p');
priorityParagraph.classList.add('prio');
priorityParagraph.textContent = to_do.Priority;

// Create the edit icon
const editIcon = document.createElement('ion-icon');
editIcon.setAttribute('name', 'create-outline');
editIcon.classList.add('iconedit');

// Create the delete icon
const deleteIcon = document.createElement('ion-icon');
deleteIcon.setAttribute('name', 'trash-outline');
deleteIcon.classList.add('icondelete');


// Append the child elements to the date container
dateContainer.appendChild(dateParagraph);
dateContainer.appendChild(priorityParagraph);
dateContainer.appendChild(editIcon);
dateContainer.appendChild(deleteIcon);
todolistcontainer.appendChild(dateContainer)

allcont.appendChild(todolistcontainer)
  deleteIcon.addEventListener("click",tododeletefunc)
 }
   

     

































// import { connect_obj_to_pro } from "./todolist.js"
// let current_pro ;
// let  project_info_container;
// export function doam_creater (project,the_projects_array){

        
//         const box = document.querySelector(".project_name_container")
//         project_info_container = document.createElement("div")
//         project_info_container.classList.add("project_info_container")
//         box.appendChild(project_info_container)
//         const nameof_project_holder = document.createElement("p")
//         nameof_project_holder.classList.add('nameofpro')
//         nameof_project_holder.textContent=project.name
//         project_info_container.appendChild(nameof_project_holder)
//         const btn_delete = document.createElement("button")
//         btn_delete.classList.add("project_delete_btn")
//         btn_delete.textContent="X"

//         project_info_container.appendChild(btn_delete)
//         div_click(project_info_container)
      
//     }
   
//     export function div_click(project_info_container){
//       current_pro=  connect_obj_to_pro(project_info_container)
//       console.log(`the current pro is ${current_pro}`)
//     }

//     export function objconecter(current_to_do){
//         console.log(`curent project and current to_do${current_pro} ,${current_to_do}`)
//         // console.log(current_pro)
//         // console.log(current_to_do)
//     //    console.log(current_pro.project_items)
//        current_pro.project_items.push(current_to_do)
//        console.log(current_pro.project_items)
//        console.log(current_pro)
//        const to_do_list_container= document.querySelector(".to_do_list_container")
//        if (to_do_list_container.hasChildNodes()) {
//         // Container has child elements, remove all existing children
       
//         while (to_do_list_container.firstChild) {
//           to_do_list_container.removeChild(to_do_list_container.firstChild);

//         }
//         ui_creater(current_pro)
//       } 
//       else{
//         ui_creater(current_pro)
//       }
     
//     }

//   function ui_creater(curent_project){
//         for(let obj of current_pro.project_items) {
//             // if (current_pro.project_items .includes(obj) && obj.check===true) {
//             //     console.log('Object already exists:');
//             //   } else {
//                 // obj.check=true
//                 const to_do_list_container= document.querySelector(".to_do_list_container")
//                 const containerresult  = document.createElement("div")
//                 containerresult.classList.add("containerresult")
//                 to_do_list_container.appendChild(containerresult)
//                 const to_doname_container = document.createElement("div") 
//                 to_doname_container.classList.add("to_do_name_cont")
//                containerresult.appendChild(to_doname_container)
//                 const to_do_delete_container = document.createElement("div")
//                 to_do_delete_container.classList.add("to_do_delete_container")
//                containerresult.appendChild(to_do_delete_container)
//                //   below create the contents of each div
//                const radioButton = document.createElement('input');
//                radioButton.type = 'radio';
    
//                to_doname_container.appendChild(radioButton)
//                const title= document.createElement("p")
//                title.classList.add("todolist_name")
//                title.textContent=obj.title;
//                to_doname_container.appendChild(title)
    
//                const date = document.createElement("p")
//                date.classList.add("date")
//                date.textContent= obj.date
//                to_do_delete_container.appendChild(date)
    
//                const delte = document.createElement("span")
//                 delte.classList.add("deletetodo")
//                 delte.textContent="X"
//                 to_do_delete_container.appendChild(delte)
//               }
          

//         }
   

//     // }


