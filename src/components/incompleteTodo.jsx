export const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete, incompleteTodosMaxCount} = props;
  return (
    <div className="incompletearea px-2 py-2 border-2 border-blue-400 rounded-xl">
      <p className="px-4 title text-lg font-bold text-neutral-600">未完了のタスク</p>
      { todos.length >= incompleteTodosMaxCount && (
        <p className="text-xlf font-bold text-red-500">上限に達しました</p>
      )}
      <ul className="my-4">

        {todos.map((todo, index) => (
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

  )
 } 