// class Block {
//   constructor(width,height){
//       this.width=width;
//       this.height=height;
//
//   }
//   area(){
//     console.log(this.width*this.height)
//     console.log(this)
//   }
// }
//
// let block1=new Block(3,4);
// let block2=new Block(4,4);
// block1.area();
// block2.area();
//
//
// class Father {
//   sayHello1(){
//     console.log('hello1')
//   }
// }
//
// class Son extends Father{
//   sayHello2(){
//     console.log('hello2')
//   }
// }
// let peter = new Son;
// peter.sayHello2();
// peter.sayHello1();


var path=require('path');
console.log(path);

var $=require('jquery');
console.log($);
$(document).ready(
  function (){
    alert('dom 准备完毕')
  }
)


var aa=require('./test.js');
var xx=8;
console.log(aa.ad(5));
console.log(aa.xx)


var teacher=require('./teacher.js');
teacher.teacher('newming')


//es6
import {sum,obj,str}from './teacher.js';
console.log(sum);
console.log(str);
console.log(obj.age);
