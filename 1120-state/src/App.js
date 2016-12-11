// import React from 'react';
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       like:true
//     }
//   }
//   handleClick(){
//     console.log('newming');
//     this.setState({
//       like:!this.state.like
//     })
//   }
//   render(){
//     if(this.state.like){
//       var content='like'
//     }else{
//       var content='dislike'
//     }
//     let styles={
//       div:{
//         width:"100px",
//         height:'100px',
//         backgroundColor:'red',
//         display:this.state.like ? 'block' :'none'
//       }
//     }
//     return (
//       <div onClick={this.handleClick.bind(this)}>
//         你{content}狗吗   <br />
//       <div style={styles.div}></div>
//       </div>
//     )
//   }
// }
// export default App;


import React from 'react';
import './main.css';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  // handleClick(){
  //   this.setState({
  //     show:!this.state.show
  //   })
  // }


  // handleClick(){
  //   this.setState(function(prevState,props){       //与49-53意思一样
  //     return {show:!prevState.show}
  //   })
  // }


  handleClick(){
    this.setState((prevState,props) =>({show:!prevState.show})     //与49-53意思一样

    )
  }
  render(){

    return (
      <div>
        <button onClick={this.handleClick.bind(this)} className='click'>
          click
        </button>
        <div className='cover'
          style={{display:this.state.show ? 'block':'none'}}
          onClick={this.handleClick.bind(this)}></div>
        <div className='menu' style={{left:this.state.show ? '0px':'-200px'}}>
          <h3>
            Modern Demo
          </h3>
          <p>
            首页
          </p>
          <p>
            登录
          </p>
          <p>
            注册
          </p>
        </div>
      </div>
    )
  }
}
export default App;
