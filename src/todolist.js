import{submit_creater} from './dom.js';
import { saveToLocalStorage,prject_colector} from './index.js'


export class to_do_list {
    constructor(title,a_date,description,Priority){
       this.title = title
       this.description = description
       this.date = a_date
       this.Priority= Priority
    }
     get_edit(){
         
     }
   
   }
export let current_project;
export function to_do_list_object(tvalue,datevalue, disvalue,selvalue){
       const todo = new to_do_list(tvalue,datevalue,disvalue,selvalue)
       current_project.pro_task_iteams.push(todo)
       console.log("the curent project is at this level")
       console.log(current_project)
       console.log("the created to do is ")
       console.log(todo)
      //  saveToLocalStorage("prject_colector",prject_colector);
       submit_creater(todo)
      
   }
export function todo_displayer(){
   const dialog = document.querySelector(".dialog");
   dialog.showModal()
   }
export function todo_displayer2(){
      const dialog2 = document.querySelector(".dialog2");
     
      dialog2.showModal()
      }
 export function todo_displayer3() {
         const dialog3 = document.querySelector(".dialog3");
     
         dialog3.showModal() 
      }
export function  projecteditorshowUp(){
   const dialog4 = document.querySelector(".dialog4");
     
         dialog4.showModal() 
}

export function viewshowup(){
   const dialog5 = document.querySelector(".dialog5");
     
         dialog5.showModal() 
}

export function viewshowupCancel(){
   const dialog5 = document.querySelector(".dialog5");
     
         dialog5.close() 
}
export function  projecteditorClose(){
   const dialog4 = document.querySelector(".dialog4");
     
         dialog4.close() 
}
export function projectedi1torClose(){
   const dialog3 = document.querySelector(".dialog3");
     
         dialog3.close() 
}
export function cancel_todo(){
      
       const dialog = document.querySelector(".dialog");
       dialog.close()
   }
   export function cancel2(){
      
      const dialog = document.querySelector(".dialog2");
      dialog.close()
  }
export function submit(event){
       event.preventDefault()
       const dialog = document.querySelector(".dialog");
     const  textInputsvalue =document.querySelector("input[type='text']").value;
     const  dateInputsvalue =document.querySelector("input[type='date']").value;
     const descrinputvalue = document.querySelector("textarea").value
     const selinputvalue = document.querySelector("select").value
   

     dialog.close()
     to_do_list_object(textInputsvalue,dateInputsvalue,descrinputvalue,selinputvalue)
   }
   
   

