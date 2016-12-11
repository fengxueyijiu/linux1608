// import React from 'react';
// import ReactDOM from 'react-dom';
// function tick(){
//   let element =(
//     <div>
//       <h1>hello, world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(element,document.getElementById('app'))
// }
//
// setInterval(tick,1000);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test';
import SelectBar from './SelectBar';
// ReactDOM.render(<App />,document.getElementById('app'))
ReactDOM.render(<SelectBar />,document.getElementById('app'))
