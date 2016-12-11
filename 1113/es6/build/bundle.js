/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	// class Person{
	//   constructor(){                          //constructor默认执行
	//     console.log('hello')
	//   }
	//   sayHello(){
	//     console.log('hhhhhhhh')
	//   }
	// }
	// let peter=new Person;


	// class Person{
	//   constructor(name){
	//     this.name=name;
	//   }
	// }
	// let peter=new Person('happypeter');
	// console.log(peter.name)


	// class Person{
	//   constructor(name,height){
	//     console.log('my name is '+name);
	//     console.log('my height is '+ height);
	//   }
	//   sayHello(name){
	//     console.log('hello '+name)
	//   }
	// }
	// let peter=new Person('lily','2m');
	// peter.sayHello('peter')


	//this关键字的使用
	// class Person{
	//   constructor(name){
	//     this.name=name;
	//     console.log(this);
	//   }
	//   sayHello(name){
	//     console.log('hello '+this.name)
	//   }
	// }
	// let peter=new Person('lily');
	// peter.sayHello()


	// for(let i=0;i<3;i++){
	//   console.log('out'+i);
	//   for(let i=0;i<2;i++){
	//     console.log('in'+i)
	//   }
	// }


	var a = 1,
	    b = 2;

	var add = function add(a, b) {
	  return console.log(a + b);
	};
	add(a, b);

/***/ }
/******/ ]);