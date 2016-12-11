import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './main.css';

import Cards from './Cards';

ReactDOM.render(<Cards/>,document.getElementById('app'));
let arr = ['sfdsf','aaaa','dddd','eeee'];
let xxx = arr.map( (item,index) => item )
console.log(xxx);
