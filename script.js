let inputBox = document.getElementById('inputBox');
let taskList = document.getElementById('taskList');

const addTask = ()=>{
  if(inputBox.value === ''){
    alert('You should enter a task first!')
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData()
}

taskList.addEventListener('click', (e)=>{
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveData()
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData()
  }
})

const saveData = ()=>{
  localStorage.setItem('data', taskList.innerHTML);
}
const showList = ()=>{
  taskList.innerHTML = localStorage.getItem('data')
}
showList()