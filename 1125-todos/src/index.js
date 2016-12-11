import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />,document.getElementById('app'));

let arr=[1,2,3,7,34,6,8];
var num=arr.findIndex(element => element>7);
console.log(num)
