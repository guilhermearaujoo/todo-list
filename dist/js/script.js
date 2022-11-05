// changes the backgroundcolor of an item when clicked
const changeBackground = (lis) => {
  lis.forEach((element) => {
    element.addEventListener("click", () => {
      lis.forEach((li) => li.classList.remove("clicked"));
      element.classList.add("clicked");
    });
  });
};

// add a task on the page whanever the user submits
const btnAddTask = document.getElementById("criar-tarefa");
const taskList = document.getElementById("lista-tarefas");

const submitItem = () => {
  input = document.getElementById("texto-tarefa");
  const inputValue = input.value;
  const li = document.createElement("li");
  li.innerText = inputValue;
  li.className = "list-item";
  input.value = '';
  taskList.appendChild(li);
};

//remove all tasks when clicked
const deleteAll = (lis) => {
  lis.forEach((element) => {
    element.remove();
  });
};

//remove all done tasks when clicked
const deleteAllDone = (lis) => {
  lis.forEach((element) => {
    element.remove();
  });
};


window.addEventListener("click", (event) => {
  // create tasks and add background set on it
  if (event.target.id === "criar-tarefa") {
    submitItem();
    const lis = document.querySelectorAll(".list-item");
    changeBackground(lis);
  }

  // remove all tasks
  if (event.target.id === "apaga-tudo") {
    const lis = document.querySelectorAll(".list-item");
    deleteAll(lis);
  }

  //remove all done tasks
  if(event.target.id === 'remover-finalizados') {
    const lis = document.querySelectorAll(".done");
    deleteAllDone(lis);
  }
});

// makes the element be risked when doubleclicked
const doubleClick = (item) => {
  item.classList.contains("done")
    ? item.classList.remove("done")
    : item.classList.add("done");
};

window.addEventListener("dblclick", (event) => {
  //add risk property when clicked
  if (event.target.classList.contains("list-item")) {
    doubleClick(event.target);
  }
});
