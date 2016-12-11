// import React, { PropTypes } from 'react'
//
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       num:0,
//     }
//     console.log('state')
//   }
//   componentWillMount(){
//     console.log('will')
//   }
//   componentDidMount(){
//     console.log('did')
//     this.interval=setInterval(() => this.tick(),1000)
//   }
//   tick(){
//     this.setState({
//       num:this.state.num+1
//     })
//   }
//   render () {
//     console.log('render')
//     return (
//       <div>
//         你在本页面待了{this.state.num}秒
//       </div>
//     )
//
//   }
// }
//
// export default App;



//(2)
import React, { PropTypes } from 'react';
import Demo from './Demo';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      num:0,
      show:true
    }
    console.log('state')
  }
  componentWillMount(){
    console.log('will')
  }
  componentDidMount(){
    console.log('did')
    console.log(this.refs.aaa);
  }
  handleClick(){
    this.setState({
      num:this.state.num+1
    })
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    console.log(nextProps, nextState);
    return true
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');

  }
  componentDidUpdate(){
    console.log('componentDidUpdate');

  }
  handleDestroy(){
    this.setState({
      show:false
    })
  }
  render () {
    console.log('render')
    return (
      <div>
        你在本页面待了{this.state.num}秒
        <button onClick={this.handleClick.bind(this)}>加一</button>
        <button onClick={this.handleDestroy.bind(this)}>删除</button>
        {this.state.show ? <Demo num={this.state.num}/> :null}
        <p ref='aaa'>我是p标签</p>
      </div>
    )

  }
}

export default App;
