function teacher(name){
  console.log(`我的名字是${name}`)
}
var str='hello';
// module.exports={
//   teacher,
//   str                                       5-8与9-10意思一样
// }
module.exports.str=str;
module.exports.teacher=teacher;



//es6
function sum(x,y){
  console.log(x+y)
}
var str=888;
var obj={
  name:'newming',
  age:23
}
export{sum,str,obj}
