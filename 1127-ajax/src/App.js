import React, { PropTypes } from 'react';
import $ from 'jquery';
import GitShow from './GitShow';
import axios from 'axios';
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       data:{},
//       wait:true
//     }console
//   }
//   componentDidMount(){
//     //1.原生
//     // var _this=this;
//     // var xmlhttp=new XMLHttpRequest();
//     // xmlhttp.onreadystatechange=function(){
//     // if (xmlhttp.readyState==4 && xmlhttp.status==200){
//     //   var dataObj=JSON.parse(xmlhttp.responseText);
//     //   console.log(dataObj);
//     //   _this.setState({
//     //     data:dataObj,
//     //     wait:false
//     //   })
//     //   }
//     // }
//     // xmlhttp.open("GET","http://api.github.com/users/fengxueyijiu",true);//地址异步
//     // xmlhttp.send();
//
//
//     //2.jquery
//
//     var _this=this
//     $.get('http://api.github.com/users/fengxueyijiu',function(data,status){
//       alert(status);
//       _this.setState({
//         data:data,
//         wait:false
//       })
//     })
//   }
//   render () {
//
//     return(
//       <div>
//         <h1>dddddddddddd</h1>
//         {this.state.wait? '正在加载数据' :<div>
//           <img src={this.state.data.avatar_url}></img>
//           <p>微信号：{this.state.data.bio}</p>
//           <p>微信号：{this.state.data.blog}</p>
//         </div>}
//       </div>
//     )
//   }
// }
//
// export default App;



class App extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  handleSubmit(e){

    e.preventDefault()
    let value=this.refs.input.value;
    axios.get(`https://api.github.com/users/${value}`)
    .then((response) =>this.setState({data:response.data,wait:false}))
    .catch(function (error) {
      console.log(error);
    });
  }
  componentDidMount(){

  }
  render () {

    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='search git' ref='input'></input>
        </form>
        {this.state.wait ? '正在加载' : <GitShow gitInfo={this.state.data} />}
      </div>
    )
  }
}

export default App;
