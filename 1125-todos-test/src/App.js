import React, { PropTypes } from 'react'
import TodoList from './component/TodoList';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      items:[
        {title:'我没完成',completed:false},
        {title:'我完成了',completed:true}
      ]
    }

  }
  handleClick(e){
    e.preventDefault();
    let inputValue=this.refs.input.value.trim();
    this.refs.input.value=null;
    if(inputValue==""){
      this.refs.input.focus();
      return alert('内容不能为空')
    }
    // console.log(inputValue)
    let newItems={title:inputValue,completed:false}
    this.state.items.push(newItems);
    this.setState({items:this.state.items})
    // this.setState(function(prevState,props){
    //   console.log(props)
    //   return {items:prevState.items.concat(newItems)}
    // })
  }
  render () {
    return(
      <div>
        <h1>TODO</h1>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleClick.bind(this)}>
          <input placeholder='add a todo' ref="input"></input>
          <button type='submit'>ADD #{this.state.items.length+1}</button>
        </form>
      </div>
    )

  }
}

export default App;
