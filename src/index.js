import template from './index.html';

import template_style from './style.css';
import {pkj} from './pkj.js';
import{project_displyer,todorender} from './dom.js';
import{todo_displayer,cancel_todo,submit,to_do_list_object,current_project,to_do_list} from './todolist.js';
// import{current_project} from './todolist.js';


function retrieveDataFromLocalStorage() {
  const retrievedData = retrieveFromLocalStorage("prject_colector");
  if (retrievedData) {
    prject_colector.length = 0; // Clear the existing array
    prject_colector.push(...retrievedData); // Add the retrieved data to the array
  }
}


window.addEventListener('load', function() {
alert("retfgyhuj")
 retrieveDataFromLocalStorage();
 const retrived_data =JSON.parse(localStorage.getItem("prject_colector"))
 console.log(retrived_data)
  for(let obj=0;obj<retrived_data.length;obj++){
     console.log(retrived_data[obj])
     if(retrived_data[obj].pname==="project1" ||retrived_data[obj].pname==="project2"){
      console.log("the are the default")
     }
     else{
      addbtnf2(retrived_data[obj])
     }
     
    //  addbtnf()
  }
});


export const prject_colector=[]

let last_holder;

 const project1 =new pkj("project1")
//  saveToLocalStorage("project1",project1);

 const project2 =new pkj("project2")




prject_colector.push(project1)


prject_colector.push(project2)


  const todo1 = new to_do_list("title","09/23/2021","description","low")
  const todo2 = new to_do_list("title2","10/23/2022","description2","medium")
  const todo3 = new to_do_list("title3","11/24/2022","description3","high")


 current_project= project1

 project1.pro_task_iteams.push(todo1)
 project2.pro_task_iteams.push(todo2)
 project1.pro_task_iteams.push(todo3)

 
 
 project_displyer(project1.pname)
 project_displyer(project2.pname)

document.querySelector(".addbtn").addEventListener("click",addbtnf)

function addbtnf(){
  retrieveDataFromLocalStorage();
  saveToLocalStorage("prject_colector", prject_colector);
  let pro_name_array=[]
  saveToLocalStorage("pro_name_array",pro_name_array)
  // const retrived_pro_name_array=retrieveFromLocalStorage("pro_name_array") 

   
   let  pname=prompt('enter project name ')
    pro_name_array.push(pname)
  let  proname =new pkj(pname)
  
  // saveToLocalStorage("proname", proname)
  // let retrived_proname=retrieveFromLocalStorage("proname") 
  prject_colector.push(proname)

  saveToLocalStorage("pro_name_array",pro_name_array)
 
  saveToLocalStorage("prject_colector",prject_colector);
  //  console.log(retrieveFromLocalStorage("pro_name_array"))
  //   console.log( retrieveFromLocalStorage("prject_colector"))
  


 
  project_displyer(proname.pname)
  colector_reruner()
}
function colector_reruner(){
     
      const clickeddiv = document.querySelectorAll(".name_of_project");
      
      
      for (let clicked of clickeddiv) {
        clicked.addEventListener("click", function () {
          projectmacher(event);
        });
      }
}
colector_reruner()


function  projectmacher(event){
    let   element = event.target
    console.log(element)
   const found_project = prject_colector.find(function (project) {
      return project.pname === element.textContent;
    });
    console.log(found_project)
    current_project= found_project

  todorender(found_project)

      
    
}
 document.querySelector(".add_task").addEventListener("click",function(){
            todo_displayer()
      })
document.querySelector(".submit").addEventListener("click" ,function(){
  submit(event)
  saveToLocalStorage("prject_colector",prject_colector);
  // console.log("the last colll")
  // console.log("here is *****************************")
  // console.log(localStorage.getItem("prject_colector"))
  // console.log(retrieveFromLocalStorage("prject_colector"))
  

})
document.querySelector(".cancel").addEventListener("click" ,function(){
  cancel_todo()
})

 

export function saveToLocalStorage(key, data) {
  const jsonData = JSON.stringify(data);
  localStorage.setItem(key, jsonData);
 

}


function retrieveFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  // console.log(data)
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
}




function addbtnf2(project){
  
  // const retrived_pro_name_array=retrieveFromLocalStorage("pro_name_array") 

   
   let  pname=project.pname
  
   let  proname =new pkj(pname)
  
  
  


 
  project_displyer(proname.pname)
  colector_reruner()
}
export function delet_funcition(){
 const todo_container = document.querySelector(".this_contentchange")
 todo_container.style.opacity="100%"
 const ratg =(event.target)
 const parent = ratg.parentNode
 console.log("the parent is ")
 console.log(parent.textContent)
 console.log(parent)
 const children = parent.children;
 const todeltedproject =retrieveFromLocalStorage("prject_colector")
 const found_project = todeltedproject.find(function (project) {
  return project.pname === children[1].textContent;
  
});
todo_container.style.opacity="0"
const the_index_to_be_removed=todeltedproject.indexOf(found_project);
console.log(the_index_to_be_removed)
todeltedproject.splice(the_index_to_be_removed, 1);
console.log("after the index is removed it looks like this")
console.log(todeltedproject)
saveToLocalStorage("prject_colector",todeltedproject )
parent.parentNode.removeChild(parent);
document.querySelector(".top_proname").textContent="";
}

export function tododeletefunc() {
  // event.stopPropagation();
  // event.stopImmediatePropagation();
  alert("i clicked");
  const target_todo = event.target;
  const parentsub = target_todo.parentNode;
  const text = parentsub.parentNode.children[0].children[1].textContent;
  console.log("the returned object is:");
  console.log(current_project)
  const todotask =current_project.pro_task_iteams
  

    const found_todo =todotask.find(function (project) {
      return project.title === text;
    });
  
  
  console.log(found_todo);
  const the_index_to_be_removed=todotask.indexOf(found_todo);
  console.log(the_index_to_be_removed)
  todotask.splice(the_index_to_be_removed, 1);
console.log("after the index is removed it looks like this")
// console.log(todeltedproject)
saveToLocalStorage("prject_colector",prject_colector )
parentsub.parentNode.remove();
}


