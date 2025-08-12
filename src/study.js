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



const a = "せやねん";
const age = "32";


//"私の名前はせやねんです。年齢は32歳です"としたい

//従来の方法
const message = "私の名前は" + a + "です。年齢は" + age + "です。";

const message2 = `私の名前は${a}です`;
console.log(message)
console.log(message2)


function func1(str){
  console.log(str)
}

func1("今日は");


const func2 = str => str;

console.log(func2("こんにちは"))

func2("こんにちは2")