import template from './index.html';
import template_style from './style.css';
import {pkj} from './pkj.js';
import{project_displyer,todorender} from './dom.js';
import{todo_displayer} from './todolist.js';

const prject_colector=[]

 const project1 =new pkj("project1")
 const project2 =new pkj("project2")
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
      document.querySelector(".add_task").addEventListener("click",function(){
            todo_displayer()
      })
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
//      where the dom part is colled to hindle the rander part
  todorender(found_project)

      
    
}


