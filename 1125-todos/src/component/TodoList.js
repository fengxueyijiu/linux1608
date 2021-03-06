import React, { PropTypes } from 'react'

class TodoList extends React.Component {
  handleChange(id){
    this.props.handleCompleted(id);
    console.log(id)
  }
  handleDel(id){
    this.props.handleDel(id)
    // console.log(this.props.handleDel(i))
  }
  render () {
    let list=this.props.items.map((item) =>
      <div key={Math.random()}>
        <input type='radio' checked={item.completed} onChange={this.handleChange.bind(this,item.id)}/>
        <span style={item.completed ? {textDecoration:'line-through',opacity:'0.6'} : null}>{item.title}</span>
      <button onClick={this.handleDel.bind(this,item.id)}>删除</button>
      </div>
    )
    return(
      <div>
        {list}
      </div>
    )
  }
}

export default TodoList;
