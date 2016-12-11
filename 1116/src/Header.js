import React, { Component } from 'react';
class Header extends Component {
  render(){
    let styles={
      ul:{
        listStyle:"none"
      },
      li:{color:'pink',
          display:"inline"
      }
    }
    return (
      <div className='Header'>
        <ul style={styles.ul}>
          <li style={styles.li}>首页</li>
          <li style={styles.li}>导航</li>
          <li style={styles.li}>后台</li>
          <li style={styles.li}>前端</li>
          <li style={styles.li}>交互</li>
        </ul>
      </div>
    )
  }
}
export default Header
