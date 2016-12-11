// import React from 'react';
// import avata from '../images/1.png';
// class Header extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       show:'我现在是显示'
//     }
//   }
//   styles(){
//     return {
//       color:"blue"
//     }
//   }
//   render(){
//     let styles={
//       ul:{
//         listStyle:'none',
//         padding:'0',
//         // backgroundImage:`url(${avata})`
//       },
//      li:{
//         display:'inline-block',
//         padding:'10px 20px'
//       },
//       title:{
//         fontWeight:'bold',
//         display:'inline-block',
//         padding:'10px 20px'
//       }
//     }
//     console.log(this.styles())
//     return (
//       <div>
//         <h1 style={this.styles()}>get Bootstrop</h1>
//         <ul style={styles.ul} className="menu">
//           <li style={styles.li,styles.title}>Bootstrop</li>
//           <li style={styles.li}>get starts</li>
//           <li style={styles.li}>CSS</li>
//           <li style={styles.li}>Components</li>
//           <li style={styles.li}>{this.state.show}</li>
//
//         </ul>
//         {/* <img src={avata} /> */}
//       </div>
//     )
//   }
// }
// export default Header;




import React from 'react';
import avata from '../images/1.png';
class Header extends React.Component{
  constructor(){
    super();
    this.state={
      show:true,
      hello:0
    }
  }
  handleClick(){
    console.log('dddddd');
    this.setState({
      show:!this.state.show,
      hello:this.state.hello +1
    })
  }
  styles(){
    return {
      color:"blue"
    }
  }
  render(){
    let styles={
      ul:{
        listStyle:'none',
        padding:'0',
        // backgroundImage:`url(${avata})`
      },
     li:{
        display:'inline-block',
        padding:'10px 20px'
      },
      title:{
        fontWeight:'bold',
        display:'inline-block',
        padding:'10px 20px'
      }
    }
    console.log(this.styles())
    return (
      <div>
        {this.state.hello}
        <h1 style={this.styles()} onClick={this.handleClick.bind(this)}>get Bootstrop</h1>
        <ul style={styles.ul} className="menu">
          <li style={styles.li,styles.title}>Bootstrop</li>
          <li style={styles.li}>get starts</li>
          <li style={styles.li}>CSS</li>
          <li style={styles.li}>Components</li>
          <li style={styles.li}>{this.state.show ? '我是显示的' : '我是隐藏的'}</li>

        </ul>
        {/* <img src={avata} /> */}
      </div>
    )
  }
}
export default Header;
