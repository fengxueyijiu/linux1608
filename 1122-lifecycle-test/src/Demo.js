import React, { PropTypes } from 'react'

class Demo extends React.Component {
  constructor(){
    super();
    this.state={
      show:0
    }
  }
  handleClick(){
    this.setState({
      show:this.state.show+1
    })
  }
  render () {
    return(
      <div>
        {this.props.com}
        <button onClick={this.handleClick.bind(this)}>demo</button>
        我是demo：{this.state.show}
        {this.props.children}
      </div>
    )
  }
}

export default Demo;
