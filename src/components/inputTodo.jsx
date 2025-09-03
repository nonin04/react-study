export const InputTodo = (props) => {
  const {todoText, onChangeText, onClickAdd} = props;
  return (
    <div className="inputarea bg-blue-400 py-4 px-2 rounded-xl">
      <input placeholder="TODOを入力" value={todoText} onChange={onChangeText} className="px-4 py-1 rounded-xl bg-white"/>
      <button className="px-4 py-1 ml-2 bg-neutral-100 rounded-xl hover:bg-neutral-300" onClick={onClickAdd}>追加</button>
    </div>
  )
}