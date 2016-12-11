import React, { PropTypes } from 'react'
import MyBtn from './MyBtn';
class Header extends React.Component {
  render () {
    let styles={
      color:"#fff",
      backgroundColor:'#00BCD4',
      textAlign:'center',

    }
    return(
      <div style={styles} className='Header'>
        <h3 >代码如画笔，百日百页面</h3>
      <a href="http://www.haoqicat.com">好奇猫视频网</a>
      </div>
    )
  }
}

export default Header;
