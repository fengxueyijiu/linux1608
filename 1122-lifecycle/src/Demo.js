import React, { PropTypes } from 'react'

class Demo extends React.Component {
  constructor(){
    super();
    this.state={
      demoNum:0
    }
  }
  componentWillUnmount(){
    console.log('componentWillUnmount465465465456465');
    clearInterval(this.interval)
  }
  componentDidMount(){
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate(){
    console.log(this.state.demoNum);
  }
  tick() {
    this.setState({demoNum:this.state.demoNum+1})
  }
  render () {
    return(
      <div>
        我是Demo模块的{this.props.num} <br />
        {this.state.demoNum}
      </div>
    )
  }
}

export default Demo;
