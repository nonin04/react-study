import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




//--udemy-reactの教材より-------------------------------
var val1 = "var変数";

val1 = "varは上書きできる";
// var変数は上書きが可能
console.log(val1);

//--------

let val2 = "var変数2";
console.log(val2)

val2 = "よろしく";
console.log(val2);

//--------

const val3 = "普遍な変数";
console.log(val3)

val3 = "可変かな？";
console.log(val3);