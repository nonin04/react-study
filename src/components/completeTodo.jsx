export const CompleteTodo = (props) => {
  const {todos, onClickBack} = props;
  return (
    <div className="completearea px-2 py-2 border-2 border-blue-400 bg-blue-100 rounded-xl">
        <p className="px-4 title text-lg font-bold text-neutral-600">完了済みのタスク</p>
        <ul>

          {todos.map((todo, index) => (
              <li key={todo}>
                <div className="flex">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)} className="px-4 py-1 ml-1 bg-neutral-200 rounded-xl hover:bg-blue-300">戻す</button>
                </div>
              </li>
          ))}

        </ul>
      </div>
  )
}