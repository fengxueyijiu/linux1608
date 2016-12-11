import React, { PropTypes } from 'react';
import './main.css';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      show:false
    };
  }
  handleClick(){
    this.setState({
      show:!this.state.show
    })
  }
  render () {
    return(
      <div>
        <button className='click' onClick={this.handleClick.bind(this)}>click</button>
      <div className='cover' style={{display:this.state.show ?'block' : 'none'}}></div>
        <div className='menu' style={{left:this.state.show ? '0px' : '-200px'}}>
          <h3>Title</h3>
          <p>首页</p>
          <p>登录</p>
          <p>注册</p>
        </div>

      </div>
    )
  }
}

export default App;
