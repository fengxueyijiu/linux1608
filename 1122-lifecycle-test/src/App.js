import React, { PropTypes } from 'react';
import Demo from './Demo';
class App extends React.Component {
  constructor(){
    super();
    console.log('state')
    this.state={
      num:0
    }
  }
  componentWillMount(){
    console.log('will')
  }
  componentDidMount(){
    console.log('did')
  }
  handleClick(){
    this.refs.du.handleClick()
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate(){
    console.log('cocomponentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  render () {
    console.log('render')
    return(
      <div>
        {this.state.num} <button onClick={this.handleClick.bind(this)}>click</button>
      <Demo com='ddddd' ref='du'/>
      <Demo>dddddddwuwuuwaaaaooo</Demo>
      </div>
    )
  }
}

export default App;
