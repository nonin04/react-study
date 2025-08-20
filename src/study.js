//--udemy-reactの教材より-------------------------------

// //var は再代入 ◯、変数の再宣言 ◯
// var val1 = "var変数";
// val1 = "varは上書きできる";
// console.log(val1);

// //--------
// //let は再代入 ◯ 、変数の再宣言 ×
// let val2 = "var変数2";
// console.log(val2)

// val2 = "よろしく";
// console.log(val2);

// //--------
// //const は再代入 × 、変数の再宣言 ×
// const val3 = "普遍な変数";
// console.log(val3)

// val3 = "可変かな？";
// console.log(val3);

//----------------------

//constで作った配列のプロパティ自体は変更が可能
// console.log("hello")
// const val4 = {
//   name:"せやねん",
//   age: 32,
// };

// console.log(val4.name);
// val4.adress = "osaka";

// console.log(val4.adress);

// const val5 = ["dog", "cat"];

// val5[0] = "bird";



// const a = "せやねん";
// const age = "32";


// //"私の名前はせやねんです。年齢は32歳です"としたい

// //従来の方法
// const message = "私の名前は" + a + "です。年齢は" + age + "です。";

// const message2 = `私の名前は${a}です`;
// console.log(message)
// console.log(message2)


// function func1(str){
//   console.log(str)
// }

// func1("今日は");


// const func2 = str => str;

// console.log(func2("こんにちは"))

// func2("こんにちは2")


// const myProfile = {
//   nickname: "せやねん",
//   age: 32
// };

// const message1 = `${myProfile.nickname}`;
// console.log(message1)

// //myProfileの値をそれぞれ一括でconstしてるイメージ
// const { nickname, age } = myProfile;

// const message2 = `名前は${nickname},${age}です`
// console.log(message2)

// const myProfile2 = ["せやねん", 32];


// const [abc, def] = myProfile2
// console.log(abc)


// const myProfile = {
//   age: 32
// };

// //デフォルトちの設定
// const sayHello = (nickname) => {
//   if (nickname) {
//     console.log(`こんにちは${nickname}さん`)
//   }
//   else {
//     console.log(`ゲストさんこんちゃ`)
//   }
  
// };
// sayHello("宮本");

// const {age, nickname = "ゲスト"} = myProfile;

// console.log(age);
// console.log(nickname);


// const nickname = "せやねん";
// const age = 31;


// //定義するオブジェクトのプロパティと設定する変数が同じ場合に使える省略記法
// const myProfile = {
//   nickname,
//   age
// }

// console.log(myProfile)


//スプレッド構文
// const arr = [4,1,2,3];
// console.log(arr1);
// //配列の中身を処理して出力してくれる
// console.log(...arr1)

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2)
// };

// sumFunc(arr[0], arr[1]);

// sumFunc(...arr);


// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, num3, ...arr3] = arr2;
// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(arr3)

//スプレッド構文　配列のコピー
// const arr4 = [12, 16];
// const arr5 = [34, 53];

// const arr6 = [...arr4]
// console.log(arr6)

// //これは中身が同じオブジェクトを参照するため
// //コピー元から分離できていない
// const arr8 = arr4

// const arr7 = [...arr4, ...arr5]
// console.log(arr7)

// const nicknameArr = ["宮本", "田中", "吉田"];

// // for (let index = 0; index < nicknameArr.length; index++) {
// //   console.log(nicknameArr[index]);
// // };

// console.log(nicknameArr);

// const namesarr = nicknameArr.map((nickname) => console.log(nickname));

// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const eqArray = array.filter((num) => {
//   return num % 2 === 0
// });


// console.log(eqArray)

// const numArr = [1, 2, 3, 4, 5];

// const newArr = numArr.filter((num) => {
//   return num % 2 === 1
// });

// console.log(newArr)



// const nameArr = ["宮本", "安田", "広島", "永田", "宮本"];

// const nameNewArr = nameArr.map((nameA)=> {
//   if (nameA === "宮本") {
//     return "本家"
//   } else {
//     return nameA
//   }
// })


// console.log(nameNewArr)


// const Num = 1300;

// const formattedNum = typeof Num === 'number' ? Num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum)

const val = null;

if (val) {
  console.log("truethy");
} else {
  console.log("falsy");
}