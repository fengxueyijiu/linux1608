import teacher from './teacher.js';
import student from './student.js';
function add(teacherName,students){
  teacher(teacherName)
  students.forEach(function(item,index,array){
    student(item)
  })
}
export default add;
