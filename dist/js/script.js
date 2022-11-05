// add a task on the page whanever the user submits
const btnAddTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
// changes the backgroundcolor of an item when clicked
const changeBackground = (lis) => {
  lis.forEach((element) => {
    element.addEventListener('click', () => {
      lis.forEach((li) => li.classList.remove('clicked'));
      element.classList.add('clicked');
    });
  })
}

const submitItem = () => {
  const inputValue = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  li.innerText = inputValue;
  li.className = 'list-item';
  taskList.appendChild(li);
}

window.addEventListener('click', (event) => {
  if(event.target.id === 'criar-tarefa') {
    submitItem();
    const lis = document.querySelectorAll('.list-item');
    changeBackground(lis);
  }
})


