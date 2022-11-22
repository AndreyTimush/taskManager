const tasks = [
  {
    id: "5d2ca9e2e03d40b326596aa7",
    content:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    date: "20.10.2022",
  },
  {
    id: "5d2ca9e29c8a94095c1288e0",
    content:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    date: "21.10.2022",
  },
  {
    id: "5d2ca9e2e03d40b3232496aa7",
    content:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    date: "22.10.2022",
  },
  {
    id: "5d2ca9e29c8a94095564788e0",
    content:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    date: "23.10.2022",
  },
];

// const ul = document.querySelector(".list-group")
(function (arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task.id] = task;
    return acc;
  }, {});

  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );
  const form = document.forms["addTaskAndRemoveAll"];
  const deleteBtn = form.elements["deleteBtn"];
  const submitBtn = form.elements["submitBtn"];
  const addContent = form.elements["body"];

  renderAllTasks(objOfTasks);

  form.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn-danger")) {
      listContainer.innerHTML = "";
    } else if (e.target.classList.contains("btn-primary")) {
      listContainer.appendChild(
        listTemplate({
          id: Math.random(),
          content: addContent.value,
          date: new Date(),
        })
      );
    }
  });

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error("error");
      return;
    }

    const fragment = document.createDocumentFragment();

    Object.values(tasksList).forEach((task) => {
      const li = listTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listTemplate({ id, content, date } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("data-task-id", id);

    const span = document.createElement("span");
    span.textContent = content;
    span.style.fontWeight = "bold";

    const paragraf = document.createElement("p");
    paragraf.textContent = date;
    paragraf.classList.add("mt-2", "w-100");

    li.appendChild(span);
    li.appendChild(paragraf);

    return li;
  }
})(tasks);
