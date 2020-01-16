const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
let taskRemove= document.querySelectorAll('.task__remove');
let tasks;


if (taskInput.value.length !== 0){
  tasks = localStorage.getItem('tasks').split(' ');
    for(let i=0;i<tasks.length;i++){
      pastHtml(tasks[i]);
    }
  taskRemove = document.querySelectorAll('.task__remove');
} else {
    tasks = [];    
 }
tasksAdd.addEventListener('click', addTasks);
tasksAdd.addEventListener('keydown',addTasks);

function pastHtml(text){
    tasksList.innerHTML+=
    `<div class="task">
        <div class="task__title">
            ${text}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;
    
}

function addTasks(e) {
    e.preventDefault();
    if(taskInput.value.length !== 0 || (e.target.keyCode === 'Enter' && taskInput.value.length !== 0)){
        const text = taskInput.value;
        tasks.push(text);
        localStorage.setItem('tasks',tasks.join(' '));
        pastHtml(text);
        taskInput.value = '';
        taskRemove =  document.querySelectorAll('.task__remove');
        deleteTask();
    }
}

function deleteTask(){
    if(taskRemove !== undefined){
        taskRemove.forEach(element => {
            element.addEventListener('click',(e)=>{
                e.preventDefault();
                const text = element.previousSibling.previousSibling.textContent;
                const newText = text.replace(/[^a-zA-Z0-9]/g, "");
                newText.trim();
                if(tasks.indexOf(newText) !== -1 && tasks.length>2){
                    tasks.splice(tasks.indexOf(newText),1);
                    localStorage.setItem('tasks',tasks.join(' '));
                }else if(tasks.length === 2 && tasks.indexOf(newText) !==-1){
                    tasks.splice(tasks.indexOf(newText),1);
                    localStorage.setItem('tasks',tasks[0]);
                }else{
                    localStorage.clear();
                }
                tasksList.removeChild(element.parentElement);
            })        
        });
    }
}

deleteTask();