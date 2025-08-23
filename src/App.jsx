import { ColorfulMessage } from "./ColorfulMessage";


//コンポーネントの名前は大文字から始める
//コンポーネントは一つのタグで囲われている必要がある(以下の場合だとdivで囲われていない状態だとエラーになる)
//↑react特有の空タグを入れることで囲いが不要になる(フラグメントを利用する)
export const App = () => {


  const onClickBtn = () => alert();

  return (
    <>
      <ColorfulMessage color="blue" message="コンチわ" />
      <p>お元気ですか？</p>
      <button onClick={onClickBtn}>ボタン</button>
    </>
  )
};