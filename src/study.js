// //letとconst
// var var3 = "よろしく"

// let var1 = "変数1"

// const var2 = "変数2"


// //letは上書き可能
// //constは上書き不可

// const hash = {
//   name: "宮本",
//   age: 32,
// };

// const arr = [
//   "宮本",
//   32
// ]
// console.log(hash)
// console.log(arr)


// const name1 = "宮本"

// console.log(`私の名前は${name1}です`)


// //アロー関数
// //ES2015


// const func1 = function(you) {
//   return `よろしくだぜ${you}`;
// }


// const func2 = (you) => {
// return `よろしくな${you}`
// }

// const func3 = you => you

// console.log(func3("ハロー"))

// console.log(func1("ヘッヘッヘ"))
// console.log(func2("ヘッヘッヘ"))

// //分割代入

// const myProfile = {
//   names: "宮本",
//   age: 30,
// }

// const {names, age} = myProfile

// console.log(`${names}は${age}`)
 
// const hello = (hi = "hello") => {
//   console.log(`${hi}`)
// };

// hello();



// const arrs = {
//   namee: "宮本",
// };

// const {namee, ages = "設定されていません" } = arrs;
// console.log(ages)


// これらを説明できるようになる -------------------------
//letとconstの違い
//テンプレート文字列 ``
//アロー関数 () => {}
//分割代入 {} []
//デフォルト値  変数 = ""
//スプレッド構文 ...
//map,filter 
//三項演算子 ? :

// letとconstの違いは
// letは再代入が可能, constは再代入ができない

// テンプレート文字列とは
// 文字列の中で変数を展開するための記法 `私の名前は${myName}です`

// アロー関数は
// ファンクションをより書きやすくした記法
// const func = (myName) => {
//   console.log(myName)
// }
// func("宮本")

// 分割代入とは
// 配列やハッシュから値を取り出して変数として宣言するための記法
// const thisHash = {
//   nickName: "みやもん",
//   age: 24,
// }

// const {nickName, age} = thisHash;
// console.log(nickName)