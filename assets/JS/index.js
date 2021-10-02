const addTasksBtn = document.getElementById('btn');
const tasksList = document.getElementById('tasksList');
const inputEl = document.getElementById('task');

btn.addEventListener = ('click', addTask);
   
function addTask(e){
    const item = document.createElement('li');
    item.innerHTML = inputEl.value;
    tasksList.append(item);
}