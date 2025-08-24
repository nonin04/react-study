import {useEffect, useState} from "react";
import { ColorfulMessage } from "./ColorfulMessage";


//コンポーネントの名前は大文字から始める
//コンポーネントは一つのタグで囲われている必要がある(以下の場合だとdivで囲われていない状態だとエラーになる)
//↑react特有の空タグを入れることで囲いが不要になる(フラグメントを利用する)
export const App = () => {
  const [num, setNum] = useState(0);

  const [isShowFace, setIsShowFace] = useState(false);
  const onClickBtn = () => {
    setNum((prev) => prev + 1); 
  }

  if (num % 3 === 0) {
    isShowFace || setIsShowFace(true)
  } else {
    isShowFace && setIsShowFace(false)
  }
  useEffect(() => {
    console.log("HELLO")
  }, [])

  return (
    <>
      <ColorfulMessage color="blue" message="コンチわ" />
      <p>お元気ですか？</p>
      <button onClick={onClickBtn}>カウントアップ</button>
      <p>{num}</p>
      { isShowFace && <img src="https://img1.kakaku.k-img.com/images/productimage/fullscale/K0001370767.jpg"></img> }
    </>
  )
};

//再レンダリング
