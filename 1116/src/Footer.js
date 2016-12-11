import React, { Component } from 'react';
class Footer extends Component {
  render(){
    let styles={
      fontSize:'24px',
      color:"red",
      backgroundColor:'#bada55'
    }
    return (
      <div className='Footer' style={styles}>我是Footer组件</div>
    )
  }
}
export default Footer
