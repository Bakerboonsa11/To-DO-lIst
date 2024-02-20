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
export function todo_displayer(){
const dialog = document.querySelector(".dialog");
dialog.showModal()
}
export function cancel_todo(){
   
    const dialog = document.querySelector(".dialog");
    dialog.close()
}
export function submit(){

}


