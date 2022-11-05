//gets the local storage items saved
const getSavedPage = () => {
  const lis = JSON.parse(localStorage.getItem("list-items"));
  return lis;
};

//puts the elments on the page
const setSavedPage = () => {
  const items = getSavedPage();
  if (items) {
    items.forEach((element) => {
      const li = document.createElement("li");
      li.innerText = element.text;
      const className = element.class;
      li.className = className;
      const taskList = document.getElementById("lista-tarefas");
      taskList.appendChild(li);
    });
  }
};

// changes the backgroundcolor of an item when clicked
const changeBackground = (lis) => {
  lis.forEach((element) => {
    element.addEventListener("click", () => {
      lis.forEach((li) => li.classList.remove("clicked"));
      element.classList.add("clicked");
    });
  });
};

//add elemtents on page
const submitItem = (taskList) => {
  input = document.getElementById("texto-tarefa");
  const inputValue = input.value;
  const li = document.createElement("li");
  li.innerText = inputValue;
  li.className = "list-item";
  input.value = "";
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

//saves the current state of page when reopened
const savePage = (lis) => {
  const listLocalStorage = [];
  lis.forEach((element) =>
    listLocalStorage.push({ text: element.innerText, class: element.className })
  );
  localStorage.setItem("list-items", JSON.stringify(listLocalStorage));
};

// makes the element be risked when doubleclicked
const doubleClick = (item) => {
  item.classList.contains("done")
    ? item.classList.remove("done")
    : item.classList.add("done");
};

//moves the element up 
const movesUp = (element, lis) => {
  if(lis[0] !== element) {
    const upperSibling = element.previousElementSibling;
    const helpElementText = upperSibling.innerText;
    const helpElementClass = upperSibling.className;

    upperSibling.className = element.className;
    upperSibling.innerText = element.innerText;

    element.innerText = helpElementText;
    element.className = helpElementClass;
  }
}

//moves the element down 
const movesDown = (element, lis) => {
  if(lis[lis.length - 1] !== element) {
    const downSibling = element.nextElementSibling;
    const helpElementText = downSibling.innerText;
    const helpElementClass = downSibling.className;

    downSibling.className = element.className;
    downSibling.innerText = element.innerText;

    element.innerText = helpElementText;
    element.className = helpElementClass;
  }
}

//remove selected item
const removeSelected = (element) => {
  element.remove();
}

//verify if has content saved on local storage and adds it on page
window.onload = () => {
  setSavedPage();

  // makes the element be risked when doubleclicked
  window.addEventListener("dblclick", (event) => {
    //add risk property when clicked
    if (event.target.classList.contains("list-item")) {
      doubleClick(event.target);
    }
  });

  window.addEventListener("click", (event) => {
    // create tasks 
    if (event.target.id === "criar-tarefa") {
      const taskList = document.getElementById("lista-tarefas");
      submitItem(taskList);
    }

    // changes background 
    if (event.target.classList.contains("list-item")) {
      const lis = document.querySelectorAll(".list-item");
      changeBackground(lis);
    }

    // remove all tasks
    if (event.target.id === "apaga-tudo") {
      const lis = document.querySelectorAll(".list-item");
      deleteAll(lis);
    }

    //remove all done tasks
    if (event.target.id === "remover-finalizados") {
      const lis = document.querySelectorAll(".done");
      deleteAllDone(lis);
    }

    //save the task items
    if (event.target.id === "salvar-tarefas") {
      const lis = document.querySelectorAll(".list-item");
      savePage(lis);
    }

    //moves the element up
    if (event.target.id === 'mover-cima') {
      const selected = document.getElementsByClassName('clicked')[0];
      const lis = document.querySelectorAll(".list-item");
      if(selected) movesUp(selected, lis);
    };

    //moves the element down 
    if (event.target.id === 'mover-baixo') {
      const selected = document.getElementsByClassName('clicked')[0];
      const lis = document.querySelectorAll(".list-item");
      if(selected) movesDown(selected, lis);
    };

    //remove selected item
    if (event.target.id === 'remover-selecionado') {
      const selected = document.getElementsByClassName('clicked')[0];
      const lis = document.querySelectorAll(".list-item");
      if(selected) removeSelected(selected);
    };
    
    //gives moviment to border
    if(event.target.id === 'texto-tarefa') {
      const div = document.getElementsByClassName('div-texto-tarefa')[0];
      div.classList.add('active'); 
    }
  });
};
