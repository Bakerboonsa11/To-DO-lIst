export class to_do_list {
    constructor(title,description,a_date,Priority){
       this.tile = title
       this.description = description
       this.date = a_date
       this.Priority= Priority
    }
     get_edit(){
         
     }
   
   }
   export function to_do_list_object(tvalue,datevalue, disvalue,selvalue){
       const todo = new to_do_list(tvalue,datevalue,disvalue,selvalue)
       console.log(todo)
   }
   export function todo_displayer(){
   const dialog = document.querySelector(".dialog");
   dialog.showModal()
   }
   export function cancel_todo(){
      
       const dialog = document.querySelector(".dialog");
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
   
   

