import React, { PropTypes } from 'react'

class TodoControl extends React.Component {
  handleShow(i){
    this.props.handleShow(i)
  }
  render () {
    return(
      <div>
        <button onClick={this.handleShow.bind(this,0)}>All</button>
        <button onClick={this.handleShow.bind(this,1)}>Active</button>
        <button onClick={this.handleShow.bind(this,2)}>Completed</button>
      </div>
    )
  }
}

export default TodoControl;
