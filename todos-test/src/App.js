import React, { PropTypes } from 'react'
import TodoList from './component/TodoList';
import TodoControl from './component/TodoControl';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      data:[
        {title:'hello',completed:false},
        {title:'world',completed:true}
      ],
      // 显示的数据，0 All，1 Active，2 Completed
      show:0
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let title = this.refs.input.value.trim();
    this.refs.form.reset();
    if(title==""){
      alert('内容不能为空');
      return;
    }
    let newData={title:title,completed:false};
    this.state.data.unshift(newData);
    this.setState({data:this.state.data});
  }
  render () {
    return(
      <div>
        <h1>todos</h1>
        <form onSubmit={this.handleSubmit.bind(this)} ref='form'>
          <input type='text' placeholder='what will you do?' className='add' ref='input'/>
        </form>
        <TodoList />
        <TodoControl />
      </div>
    )
  }
}

export default App;
