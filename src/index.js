import template from './index.html';

import template_style from './style.css';
import {pkj} from './pkj.js';
import{project_displyer,todorender} from './dom.js';
import{todo_displayer,cancel_todo,submit,to_do_list_object,current_project} from './todolist.js';
// import{current_project} from './todolist.js';
const prject_colector=[]
saveToLocalStorage("prject_colector",prject_colector);
// const projectCollector = retrieveFromLocalStorage("prject_colector");
// console.log(projectCollector);



 const project1 =new pkj("project1")
 saveToLocalStorage("project1",project1);
 const project2 =new pkj("project2")
//  saveToLocalStorage("prject_colector",prject_colector);
 prject_colector.push(project1)
 prject_colector.push(project2)
  const todo1 = {
       title:"title",
       description :"description",
       date:"a_date",
       Priority: "Priority"
  }
  const todo3 = {
      title:"title3",
      description :"description3",
      date:"a_date3",
      Priority: "Priority3"
 }
 const todo2 = {
      title :"title2",
      description :"description2",
      date :"a_date2",
      Priority: "Priority2"
 }
 current_project= project1

 project1.pro_task_iteams.push(todo1)
 project2.pro_task_iteams.push(todo2)
 project1.pro_task_iteams.push(todo3)
 
 project_displyer(project1.pname)
 project_displyer(project2.pname)

document.querySelector(".addbtn").addEventListener("click",function(){
  const pname=prompt('enter project name ')
  const project =new pkj(pname)
 
  prject_colector.push(project)
  project_displyer(project.pname)
  colector_reruner()
//   console.log(project)
})
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
})
document.querySelector(".cancel").addEventListener("click" ,function(){
  cancel_todo()
})

//   the funcition that is used to save the data in the local storage 
function saveToLocalStorage(key, data) {
  const jsonData = JSON.stringify(data);
  localStorage.setItem(key, jsonData);
 

}
//  funcition that is used to to retrive the data from the local storage

function retrieveFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  console.log(data)
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
}


