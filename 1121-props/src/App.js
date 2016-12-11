//(1)
// import React, { PropTypes } from 'react'
//
// class App extends React.Component {
//   render () {
//     console.log(this.props)
//     return (
//       <div>
//         {this.props.name} <br />
//         {this.props.age} <br />
//         {this.props.arr}
//       </div>
//     )
//   }
// }
//
// export default App;


//(2)
// import React, { PropTypes } from 'react'
//
// class App extends React.Component {
//   render () {
//     let show=[];
//     for(var i=0;i<this.props.comment.length;i++){
//       show.push(
//             <p key={i}>
//               <span>{this.props.comment[i]}</span>
//             <span>{i+1}</span>
//             </p>)
//     }
//     return (
//       <div>
//         <h1>评论列表：</h1>
//         {show}
//       </div>
//     )
//   }
// }
//
// export default App;


//(4)
import React, { PropTypes } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
