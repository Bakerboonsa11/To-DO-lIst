import template from './index.html';
import template_style from './style.css';
import {pkj} from './pkj.js';
import{project_displyer} from './dom.js';
import{todo_displayer} from './todolist.js';

const prject_colector=[]

 
 const project1 =new pkj("project1")
 const project2 =new pkj("project2")
 prject_colector.push(project1)
 prject_colector.push(project2)
  const todo1 = {
       tile :"title",
       description :"description",
       date :"a_date",
       Priority: "Priority"
  }
 const todo2 = {
      tile :"title2",
      description :"description2",
      date :"a_date2",
      Priority: "Priority2"
 }

 project1.pro_task_iteams.push(todo1)
 project2.pro_task_iteams.push(todo2)
 console.log(`the check is ${project2.pro_task_iteams}`)
 console.log(project1.pro_task_iteams)

 project_displyer(project1.pname)
 project_displyer(project2.pname)

document.querySelector(".addbtn").addEventListener("click",function(){
  const pname=prompt('enter project name ')
  const project =new pkj(pname)
  project_displyer(project.pname)
  console.log(project)
})
document.querySelector(".add_task").addEventListener("click",function(){
      todo_displayer()
})
document.querySelector(".name_of_project").addEventListener("click",function(){
      alert("clicked")
     projectmacher(event)
})

function  projectmacher(event){
    let   element = event.target
    console.log(element)
   const found_project = prject_colector.find(function (project) {
      return project.pname === element.textContent;
    });
    console.log(found_project)
}