// add a task on the page whanever the user submits
const btnAddTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

// changes the backgroundcolor of an item when clicked
const changeBackground = (li) => {
  li.addEventListener('click', () => {
    li.style.backgroundColor === 'gray' ? li.style.backgroundColor = 'white' : li.style.backgroundColor = 'gray';
  });
}

const submitItem = () => {
  const inputValue = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  li.innerText = inputValue;
  taskList.appendChild(li);
  changeBackground(li);
}

window.addEventListener('click', (event) => {
  if(event.target.id === 'criar-tarefa') {
    submitItem();
  }
})


