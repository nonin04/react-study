
const onClickAdd = () => {
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = ""

  createIncompleteTodo(inputText)
};

document.getElementById("addBtn").addEventListener("click", onClickAdd);
// document.getElementById("deleteBtn").addEventListener("click", onClickDelete);



//未完了TODOを作成する
const createIncompleteTodo = (todo) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "flex";
  li.className = "my-2";

  const p = document.createElement("p");

  p.className = "px-4 py-1 w-60"
  p.innerText = todo;

  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  completeButton.className = "px-4 py-1 ml-1 bg-neutral-200 rounded-xl hover:bg-blue-300";
  completeButton.id = "completeBtn"
  completeButton.innerText = "完了"
  deleteButton.className = "px-4 py-1 ml-1 bg-neutral-200 rounded-xl hover:bg-red-300";
  deleteButton.innerText = "削除"

    //要素を作成して代入する
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incompletelist").appendChild(li);

  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    console.log(deleteTarget)
    deleteTarget.remove();
  })
}

