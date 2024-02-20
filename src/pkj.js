import { doam_creater } from "./dom";

 export class pkj {
    project_items=[]
    constructor(project_name){
        this.name = project_name;
    }
  
   iteams_seter(take_the_object ){
     this.project_items.push(take_the_object)
   }
}

 export let the_projects_array = [];



export function add_event(){

const pname = prompt("please enter the name of ur project ")

     const project = new pkj(pname)
     the_projects_array.push(project)

     console.log(project)
     console.log(`the projects container is ${the_projects_array}`)
     doam_creater(project)
 

 }