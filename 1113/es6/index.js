
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


let [a,b]=[1,2];
let add=(a,b)=>console.log(a+b);
add(a,b)
