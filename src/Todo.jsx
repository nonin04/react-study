import {useEffect, useState} from "react";
import { ColorfulMessage } from "./ColorfulMessage";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodo } from "./components/incompleteTodo";
import { CompleteTodo } from "./components/completeTodo";

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

  const incompleteTodosMaxCount = 5
 
  return (
    <>
      <div className="mx-4 my-4 flex flex-col gap-2">


        <InputTodo 
          todoText={todoText} 
          onChangeText={onChangeTodoText} 
          onClickAdd={onClickAdd}
        />

        <IncompleteTodo
          todos={incompleteTodos}
          onClickComplete={onClickComplete} 
          onClickDelete={onClickDelete}
          maxCount={incompleteTodosMaxCount}
        />
        <CompleteTodo 
          todos = {completeTodos}
          onClickBack = {onClickBack}
        />
      </div>
    </>
  )
};

