import {useEffect, useState} from "react";
import { ColorfulMessage } from "./ColorfulMessage";


//コンポーネントの名前は大文字から始める
//コンポーネントは一つのタグで囲われている必要がある(以下の場合だとdivで囲われていない状態だとエラーになる)
//↑react特有の空タグを入れることで囲いが不要になる(フラグメントを利用する)

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value)
  }
  
  const onClickAdd = () => {
    if (todoText === "") return; 
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText(""); 
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1)

    const newCompletetodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompletetodos);
  }

  const onClickBack = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    completeTodos.splice(index, 1)

    const newCompletetodos = [...completeTodos];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompletetodos);
  }
 
  return (
    <>
      <div className="mx-4 my-4 flex flex-col gap-2">
        <div className="inputarea bg-blue-400 py-4 px-2 rounded-xl">
          <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} className="px-4 py-1 rounded-xl bg-white"/>
          <button className="px-4 py-1 ml-2 bg-neutral-100 rounded-xl hover:bg-neutral-300" onClick={onClickAdd}>追加</button>
        </div>
        <div className="uncompletearea px-2 py-2 border-2 border-blue-400 rounded-xl">
          <p className="px-4 title text-lg font-bold text-neutral-600">未完了のタスク</p>
          <ul className="my-4">

            {incompleteTodos.map((todo, index) => (
                <li key={todo}>
                  <div className="flex">
                    <p>{todo}</p>
                    <button onClick={() => onClickComplete(index)} className="px-4 py-1 ml-1 bg-neutral-200 rounded-xl hover:bg-blue-300">完了</button>
                    <button onClick={() => onClickDelete(index)} className="px-4 py-1 ml-1 bg-neutral-200 rounded-xl hover:bg-blue-300">削除</button>
                  </div>
                </li>
            ))}

          </ul>
        </div>

        <div className="completearea px-2 py-2 border-2 border-blue-400 bg-blue-100 rounded-xl">
          <p className="px-4 title text-lg font-bold text-neutral-600">完了済みのタスク</p>
          <ul>

            {completeTodos.map((todo, index) => (
                <li key={todo}>
                  <div className="flex">
                    <p>{todo}</p>
                    <button onClick={() => onClickBack(index)} className="px-4 py-1 ml-1 bg-neutral-200 rounded-xl hover:bg-blue-300">戻す</button>
                  </div>
                </li>
            ))}

          </ul>
        </div>
      </div>
    </>
  )
};

