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
  console.log( JSON.parse(localStorage.getItem("prject_colector")))
  
});


export const prject_colector=[]

let last_holder;

 const project1 =new pkj("project1")
//  saveToLocalStorage("project1",project1);

 const project2 =new pkj("project2")
//  saveToLocalStorage("project2",project2);



//  const project1_retrived  = retrieveFromLocalStorage("project1");
prject_colector.push(project1)

//  const project2_retrived  = retrieveFromLocalStorage("project2");
prject_colector.push(project2)
//  console.log("the retrived array colector is know contain to project evry time")
//  console.log(projectCollector_retrived)

  const todo1 = new to_do_list("title","description","a_date","Priority")
  const todo2 = new to_do_list("title2","description2","a_date2","Priority2")
  const todo3 = new to_do_list("title3","description3","a_date3","Priority3")


 current_project= project1

 project1.pro_task_iteams.push(todo1)
 project2.pro_task_iteams.push(todo2)
 project1.pro_task_iteams.push(todo3)
//  saveToLocalStorage("prject_colector",prject_colector);
 
 
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
  console.log("the last colll")
  console.log("here is *****************************")
  console.log(localStorage.getItem("prject_colector"))
  console.log(retrieveFromLocalStorage("prject_colector"))
  

})
document.querySelector(".cancel").addEventListener("click" ,function(){
  cancel_todo()
})
 
//   the funcition that is used to save the data in the local storage 
export function saveToLocalStorage(key, data) {
  const jsonData = JSON.stringify(data);
  localStorage.setItem(key, jsonData);
 

}
//  funcition that is used to to retrive the data from the local storage

function retrieveFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  // console.log(data)
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
}


// window.onload = function() {
//   // Retrieve data
//   var retrievedData = localStorage.getItem('prject_colector');
  
//   // Check if data exists
//   if (retrievedData) {
//     console.log(retrievedData);
//     // Do something with the retrieved data
//   } else {
//     console.log('No data found.');
//   }
// };