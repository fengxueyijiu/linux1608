import React, { PropTypes } from 'react'
import TodoList from './component/TodoList';
import TodoControl from './component/TodoControl';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      items:[
        {title:'我还没完成',completed:false,id:1},
        {title:'我已完成',completed:true,id:2}
      ],
      // o:all ,1:Active,2:Completed
      show:0
    }
  }
  handleCompleted(id){
    let index=this.findIndex(id);
    // alert(i)
    this.state.items[index].completed=!this.state.items[index].completed;
    this.setState({
      items:this.state.items
    })
  }
  handleDel(id){
    let index=this.findIndex(id);
    // alert(i)
    // console.log(this.state.items)
    this.state.items.splice(index,1)
    this.setState({
      items:this.state.items
    })
  }
  findIndex(id){
    var index=this.state.items.findIndex((ele) => id==ele.id)
    return index
  }
  handleClick(e){
    e.preventDefault();
    let inputValue=this.refs.input.value.trim();
    this.refs.input.value=null;
    if(inputValue==''){
      this.refs.input.focus();
      alert('您输入的内容不能为空')
    }
    let date=new Date();
    let newItems={title:inputValue,completed:false,id:date.getTime()};
    this.state.items.push(newItems);
    this.setState({
      items:this.state.items
    })
    console.log(this.state.items)
  }
  handleShow(i){
    this.setState({
      show:i
    })
  }
  render(){
    if(this.state.show==0){
      var showItems=this.state.items;
    }else if(this.state.show==1){
      var showItems=this.state.items.filter(function (element){
        return element.completed==false;
      })
    }else if(this.state.show==2){
      var showItems=this.state.items.filter(function(element){
        return element.completed==true
      })
    }
    return(
      <div className='main'>
        <h1 className='title'>TODO</h1>
        <TodoList items={showItems}
          handleCompleted={this.handleCompleted.bind(this)}
          handleDel={this.handleDel.bind(this)}
        />
        <form onSubmit={this.handleClick.bind(this)}>
          <input type='text' placeholder='add a todo' ref='input' className='add'></input>
        <button>ADD#{this.state.items.length+1}</button>
        </form>
        <TodoControl handleShow={this.handleShow.bind(this)} show={this.state.show}/>
      </div>
    )
  }
}
export default App;
