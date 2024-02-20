import template from './index.html';
import template_style from './style.css';
import {pkj,the_projects_array } from './pkj.js'
import {add_event} from './pkj.js'
import { doam_creater} from './dom.js'
import {submit,cancel_todo,todo_displayer,to_do_list,to_do_list_object} from './todolist.js'

const btn_new_project =document.querySelector(".new_project_btn")
const btn_cancel = document.querySelector(".cancel")
const btn_submit = document.querySelector(".submit")
const btn_new_todo = document.querySelector(".new_to_btn")
btn_new_project.addEventListener("click",add_event)
btn_cancel.addEventListener("click",cancel_todo)
btn_submit.addEventListener("click",submit)
btn_new_todo.addEventListener("click",todo_displayer)




