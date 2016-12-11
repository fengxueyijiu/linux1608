import React, { PropTypes } from 'react'
import Add from './Add';
class TestRef extends React.Component {
  handleClick(){
    this.refs.aaa.handleClick()
  }
  render () {
    return(
      <div>
        <Add ref="aaa"/>
        <Add>dddddddddddd</Add>            //Add.js   this.props.children
        <button onClick={this.handleClick.bind(this)}>父组件加一</button>
      </div>
    )
  }
}

export default TestRef;
